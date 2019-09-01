import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Note, websocketEvent } from 'src/app/models/models';
import { NotesService } from 'src/app/services/notes.service';
import { WebSocketSubject } from 'rxjs/webSocket';

enum event_type {
  CONNECT = 'connect',
  DELETE = 'note.delete',
  ADD = 'note.add',
  MOVE = 'note.move',
  EDIT = 'note.edit'
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

  dragEnd(note) {
    console.log('drag end note: ', note)
    const updatedNote = {...note,
      top: 300,
      left: 300
    }

    this.notesService$.next({
      'type': event_type.EDIT,
      'note': updatedNote
    })
  }


}
