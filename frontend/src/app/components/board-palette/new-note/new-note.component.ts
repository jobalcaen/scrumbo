import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { coordinates } from 'src/app/models/models';


@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  @Input() startCoordinates: coordinates
  notesService$
  boardName = window.location.pathname

  constructor(
    private notesService: NotesService
    ) { 
      
    }

  ngOnInit() {
    this.notesService$ = this.notesService.connect(this.boardName)
    this.notesService$.subscribe()
  }

  createNote() {
    this.notesService$.next({
      'type': 'note.add',
      'note': {
        'top': this.startPosition.top,
        'left': this.startPosition.left,
        'body': ''
      }
    })
  }

}
