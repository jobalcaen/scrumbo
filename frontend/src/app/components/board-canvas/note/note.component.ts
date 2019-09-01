import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NotesService } from 'src/app/services/notes.service';
import { Note } from 'src/app/models/models';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() coordinates: Note
  @Input() note: Note
  @HostBinding('style.top.px') top: number = this.coordinates.top
  @HostBinding('style.left.px') left: number = this.coordinates.left
  @Output() deleteNote: EventEmitter<Note> = new EventEmitter()
 
  constructor(
    ) {     
  }

  ngOnInit() {
  }
  deleteNoteEmit(){
    this.deleteNote.emit(this.note)
  }

}
