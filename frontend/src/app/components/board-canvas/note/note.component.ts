import { Component, OnInit, Input, HostBinding, Output } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NotesService } from 'src/app/services/notes.service';
import { EventEmitter } from 'events';
import { Note } from 'src/app/models/models';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Output() deleteNote: EventEmitter = new EventEmitter();
  @Input() note?
  constructor(
    ) {     
  }

  ngOnInit() {
  }
  deleteNoteEmit(){
    this.deleteNote.emit(this.note)
  }

}
