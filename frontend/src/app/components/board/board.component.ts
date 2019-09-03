import { Component, OnInit, ChangeDetectorRef, QueryList, ContentChildren, ViewChildren } from '@angular/core';
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

  notes?: Note[] = []
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
          this.notes = event.notes
          break;
        case event_type.DELETE:
          this.notes = this.notes.filter(note => note.id !== event.note.id)
          break;
        case event_type.ADD:
          this.notes.push(event.note)
          break;
        }
  
      this.cd.detectChanges()
     })    
  }

  ngOnDestroy() {
    this.notesService$.unsubscribe()
  }



  deleteNote(note) {
    this.notesService$.next({
      'type': event_type.DELETE,
      'note': note
    })
  }

  dragEnd(note: Note) {
    console.log('drag end note: ', note)
    this.noteChildren.forEach(note => console.log(note))
    const draggedNote = this.noteChildren.find((child) => child.note.id === note.id);
    console.log('dragged note: ', draggedNote)
    
  }

}
