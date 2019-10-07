import { Component, OnInit, ChangeDetectorRef, QueryList, ContentChildren, ViewChildren, ElementRef } from '@angular/core';
import { Board, coordinates, Note, websocketEvent } from 'src/app/models/models';
import { ActivatedRoute } from '@angular/router';
import { WebSocketSubject } from 'rxjs/webSocket';
import { NotesService } from 'src/app/services/notes.service';
import { NoteComponent } from '../note/note.component';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

const coordinates = [
  {
    top: 50,
    left: 50,
    color: '#ACC1FF'
  }
  // {
  //   top: 150,
  //   left: 50,
  //   color: '#C7EEFF'
  // },
  // {
  //   top: 150,
  //   left: 50,
  //   color: '#FFAEAE'
  // },
  // {
  //   top: 150,
  //   left: 50,
  //   color: '#FFEC94'
  // },
  // {
  //   top: 150,
  //   left: 50,
  //   color: '#B0E57C'
  // },

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
  notes: Note[] = []
  boardName = window.location.pathname
  notesService$: WebSocketSubject<websocketEvent>
  noteCoordinates: coordinates[] = []

  controls: FormArray
  constructor(
    private notesService: NotesService,
    private cd: ChangeDetectorRef,

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
          this.notes.map((note) => {
            if(note.id === event.payload.id){
              note.body = event.payload.body
            }
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

  deleteNote(note: Note) {
    this.notesService$.next({
      type: event_type.DELETE,
      payload: {
        id: note.id
      }
    })
  }

  updateNote(note: Note) {
    this.notesService$.next({
      type: event_type.EDIT,
      payload: {
        id: note.id,
        body: note.body
      }
    })
  }

  dragEnd(evt: CdkDragEnd) {
    this.notesService$.next({
      type: event_type.MOVE,
      payload: {
        id: evt.source.data.id,
        top: evt.source.data.top + evt.distance.y,
        left: evt.source.data.left + evt.distance.x
      }
    })
  }
 
  trackByFn(index) {
    return index
  }

}
