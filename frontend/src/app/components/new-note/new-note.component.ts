import { Component, OnInit, Input } from '@angular/core';
import { BoardActionsService } from 'src/app/services/board-actions.service';
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
    private boardActionsService: BoardActionsService
    ) { 
      
    }

  ngOnInit() {
    this.color = `#${this.noteButtonInformation.color}`
  }

  createNote() {
    this.boardActionsService.addNote(
      this.noteButtonInformation.top,
      this.noteButtonInformation.left,
      this.noteButtonInformation.color
      )
  }

}
