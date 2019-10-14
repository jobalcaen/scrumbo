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
  color: string

  constructor(
    private notesService: NotesService
    ) { 
      
    }

  ngOnInit() {
    this.color = `#${this.noteButtonInformation.color}`
  }

  createNote() {
    this.notesService.addNote(
      this.noteButtonInformation.top,
      this.noteButtonInformation.left,
      this.noteButtonInformation.color
      )
  }

}
