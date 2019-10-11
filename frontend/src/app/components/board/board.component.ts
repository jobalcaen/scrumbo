import { Component, OnInit, ChangeDetectorRef, QueryList, ContentChildren, ViewChildren, ElementRef } from '@angular/core';
import { Board, Note, websocketEvent, NewNoteButton } from 'src/app/models/models';
import { ActivatedRoute } from '@angular/router';
import { WebSocketSubject } from 'rxjs/webSocket';
import { NotesService, event_type } from 'src/app/services/notes.service';
import { NoteComponent } from '../note/note.component';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

const noteButtons = [
  {
    top: 50,
    left: 50,
    color: 'ACC1FF'
  },
  {
    top: 150,
    left: 50,
    color: 'C7EEFF'
  },
  {
    top: 150,
    left: 50,
    color: 'FFAEAE'
  },
  {
    top: 150,
    left: 50,
    color: 'FFEC94'
  },
  {
    top: 150,
    left: 50,
    color: 'B0E57C'
  },

]


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
  noteButtons: NewNoteButton[] = []

  private readonly subscriptions = new Subscription()

  controls: FormArray
  constructor(
    private notesService: NotesService,
    private cd: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {

    this.noteButtons = noteButtons

    this.subscriptions.add(
      this.activatedRoute.paramMap.subscribe((params) => {
        this.notesService$ = this.notesService.connect(params.get('boardUrl'))
      })
    )

    this.subscriptions.add(
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
    )    
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }

  deleteNote(noteId: number) {
    this.notesService.deleteNote(noteId)
  }

  updateNote(note: Note) {
    this.notesService.updateNote(note.id, note.body)
  }

  dragEnd(evt: CdkDragEnd) {
    console.log('drag end')
    const newTop = evt.source.data.top + evt.distance.y
    const newLeft = evt.source.data.left + evt.distance.x
    this.notesService.moveNote(evt.source.data.id, newTop, newLeft)
  }
 
  trackByFn(index, note) {
    if (!note) {
      return null
    } else {
      return note.id
    }
  }

}
