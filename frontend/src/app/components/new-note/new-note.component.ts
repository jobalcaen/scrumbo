import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { NewNoteButton, websocketEvent } from 'src/app/models/models';
import { WebSocketSubject } from 'rxjs/webSocket';


@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  @Input() noteButtonInformation: NewNoteButton
  notesService$: WebSocketSubject<websocketEvent>
  boardName = window.location.pathname

  color: string

  constructor(
    private notesService: NotesService
    ) { 
      
    }

  ngOnInit() {
    console.log(this.noteButtonInformation)
    this.color = this.noteButtonInformation.color
    this.notesService$ = this.notesService.connect(this.boardName)
    this.notesService$.subscribe()

  }

  createNote() {
    this.notesService$.next({
      type: 'note.add',
      payload: {
        note: {
          top: this.noteButtonInformation.top,
          left: this.noteButtonInformation.left,
          body: ''
        }
      }

    })
  }

  ngOnDestroy() {
    this.notesService$.unsubscribe()
  }

}
