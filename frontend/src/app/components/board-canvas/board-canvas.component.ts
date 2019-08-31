import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Note, websocketEvent } from 'src/app/models/models';
import { NotesService } from 'src/app/services/notes.service';
import { WebSocketSubject } from 'rxjs/webSocket';

enum event_type {
  connect = 'connect',
  delete = 'note.delete',
  add = 'note.add',
  move = 'note.move',
  edit = 'note.edit'
}

@Component({
  selector: 'app-board-canvas',
  templateUrl: './board-canvas.component.html',
  styleUrls: ['./board-canvas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class BoardCanvasComponent implements OnInit, OnDestroy {
  notes?: Note[] = []
  boardName = window.location.pathname
  notesService$: WebSocketSubject<websocketEvent>
  constructor(
    private notesService: NotesService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.notesService$ = this.notesService.connect(this.boardName)

    this.notesService$.subscribe((event: websocketEvent) => {
      console.log('event', event)
      switch (event.type) {
        case event_type.connect:
          this.notes = event.notes
          break;
        case event_type.delete:
          this.notes = this.notes.filter(note => note.id !== event.note.id)
          break;
        case event_type.add:
          this.notes.push(event.note)
          break;
        
        }
  
      this.cd.detectChanges()
     })    
  }

  ngOnDestroy() {
    this.notesService$.unsubscribe()
  }

  createNote() {
    this.notesService$.next({
      'type': event_type.add,
      'note': {
        'x_position': 10,
        'y_position': 10,
        'body': ''
      }
    })
  }

  deleteNote(note) {
    this.notesService$.next({
      'type': event_type.delete,
      'note': note
    })
  }


}
