import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Note, websocketEvent, NewNoteButton, Column } from 'src/app/models/models';
import { ActivatedRoute } from '@angular/router';
import { WebSocketSubject } from 'rxjs/webSocket';
import { NotesService, note_event_type, column_event_type } from 'src/app/services/notes.service';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';

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
  notes: Note[] = []
  columns: Column[] = []
  notesService$: WebSocketSubject<websocketEvent>
  noteButtons: NewNoteButton[] = []
  private readonly subscriptions = new Subscription()
  constructor(
    private notesService: NotesService,
    private cd: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.noteButtons = noteButtons

    this.subscriptions.add(
      this.activatedRoute.paramMap.subscribe((params) => {
        this.notesService.connect(params.get('boardUrl'))
      })
    )

    this.subscriptions.add(
      this.notesService.subscribe((event: websocketEvent) => {
        switch (event.type) {
          case note_event_type.CONNECT:
            this.notes = event.payload.notes
            this.columns = event.payload.columns
            break
  
          case note_event_type.DELETE:
            this.notes = this.notes.filter(note => note.id !== event.payload.id)
            break
            
          case note_event_type.ADD:
            this.notes.push(event.payload.note)
            break
  
          case note_event_type.MOVE:
            this.notes.map((note) => {
              if(note.id === event.payload.id){
                note.top = event.payload.top
                note.left = event.payload.left
              }
              return note
            })
            break
  
          case note_event_type.EDIT:
            this.notes.map((note) => {
              if(note.id === event.payload.id){
                note.body = event.payload.body
              }
              return note      
            })
            break
  
          case column_event_type.ADD:
            console.log('column added', event.payload)
            this.columns.push(event.payload.column)
            break

          case column_event_type.REMOVE:
            console.log('column removed', event.payload)
            this.columns = this.columns.filter(column => column.id !== event.payload.id)
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
