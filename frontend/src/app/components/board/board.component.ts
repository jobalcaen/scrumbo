import { Component, OnInit, ChangeDetectorRef, QueryList, ContentChildren, ViewChildren, ElementRef } from '@angular/core';
import { Board, coordinates, Note, websocketEvent } from 'src/app/models/models';
import { ActivatedRoute } from '@angular/router';
import { WebSocketSubject } from 'rxjs/webSocket';
import { NotesService } from 'src/app/services/notes.service';
import { NoteComponent } from '../note/note.component';

const coordinates = [
  {
    top: 50,
    left: 50
  },
  {
    top: 200,
    left: 200
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
          break;
        case event_type.DELETE:
          this.notes = this.notes.filter(note => note.id !== event.payload.note_id)
          break;
        case event_type.ADD:
          this.notes.push(event.payload.note)
          break;
        case event_type.MOVE:
          this.notes.map((note) => {
            if(note.id === event.payload.note_id){
              note.top = event.payload.top
              note.left = event.payload.left
            }
            console.log('update note: ')
            return note
          })
          break;
        }
  
      this.cd.markForCheck()
     })    
  }

  ngOnDestroy() {
    this.notesService$.unsubscribe()
  }


  deleteNote(note: Note) {
    this.notesService$.next({
      type: event_type.DELETE,
      payload: {
        note_id: note.id
      }
    })
  }

  dragEnd(note: Note) {
    
    this.noteChildren.forEach((noteCmp: NoteComponent) => {
      if (noteCmp.note.id === note.id) {

        const coortdinates = noteCmp.getClientPosition()

        this.notesService$.next({
          type: event_type.MOVE,
          payload: {
            note_id: note.id,
            top: coortdinates.top,
            left: coortdinates.left,
          }
        })
      }
    })
  }

}
