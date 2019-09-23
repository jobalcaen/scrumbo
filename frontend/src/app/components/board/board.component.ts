import { Component, OnInit, ChangeDetectorRef, QueryList, ContentChildren, ViewChildren, ElementRef } from '@angular/core';
import { Board, coordinates, Note, websocketEvent } from 'src/app/models/models';
import { ActivatedRoute } from '@angular/router';
import { WebSocketSubject } from 'rxjs/webSocket';
import { NotesService } from 'src/app/services/notes.service';
import { NoteComponent } from '../note/note.component';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

const coordinates = [
  {
    top: 50,
    left: 50
  },
  {
    top: 150,
    left: 50
  },
  {
    top: 250,
    left: 50
  }
]

enum event_type {
  CONNECT = 'connect',
  DELETE = 'note.delete',
  ADD = 'note.add',
  MOVE = 'note.move',
  EDIT = 'note.edit'
}
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @ViewChildren(NoteComponent) noteChildren: QueryList<NoteComponent>
  dragPosition = {x: 50, y: 50}
  notes: Note[] = []
  boardName = window.location.pathname
  notesService$: WebSocketSubject<websocketEvent>
  noteCoordinates: coordinates[] = []

  controls: FormArray
  constructor(
    private notesService: NotesService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {

    this.noteCoordinates = coordinates

    this.notesService$ = this.notesService.connect(this.boardName)

    this.notesService$.subscribe((event: websocketEvent) => {
      console.log('event', event)
      switch (event.type) {
        case event_type.CONNECT:
          this.notes = event.payload.notes
          break
        case event_type.DELETE:
          this.notes = this.notes.filter(note => note.id !== event.payload.id)
          break
        case event_type.ADD:
          this.notes.push(event.payload.note)
          break
        case event_type.MOVE:
          this.notes.map((note) => {
            if(note.id === event.payload.id){
              note.top = event.payload.top
              note.left = event.payload.left
            }
            return note
          })
          break
        case event_type.EDIT:
          console.log(event.payload.body)
          this.notes.map((note) => {
            if(note.id === event.payload.id){
              note.body = event.payload.body
            }
            console.log('edit note: ', note)
            return note      
          })
          break
        }
      this.cd.markForCheck()
     })

     const toGroups = this.notes.map(note => {
      return new FormGroup({
        body: new FormControl(note.body, Validators.required)
      })
    })
    this.controls = new FormArray(toGroups);
  }

  ngOnDestroy() {
    this.notesService$.unsubscribe()
  }

  // getControl(index: number) : FormControl {
  //   return this.controls.get(index)
  // }

  deleteNote(note: Note) {
    this.notesService$.next({
      type: event_type.DELETE,
      payload: {
        id: note.id
      }
    })
  }
  updateNote(note: Note) {
    console.log('updated body', note.body)
    this.notesService$.next({
      type: event_type.EDIT,
      payload: {
        id: note.id,
        body: note.body
      }
    })
  }

  dragEnd(note: Note) {
    
    this.noteChildren.forEach((noteCmp: NoteComponent) => {
      if (noteCmp.note.id === note.id) {

        const coortdinates = noteCmp.getClientPosition()
        console.log('coortdinates ', coortdinates)
        this.notesService$.next({
          type: event_type.MOVE,
          payload: {
            id: note.id,
            top: Math.floor(coortdinates.top),
            left: Math.floor(coortdinates.left),
          }
        })
      }
    })
  }

  trackByFn(note){
    return note.id
  }

}
