import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NotesService } from 'src/app/services/notes.service';
import { Note, coordinates } from 'src/app/models/models';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  private _note: Note
  @Input() set note(note: Note) {
    this._note = note
    this.top = this._note.top
    this.left = this._note.left
  }
  @HostBinding('style.top.px') top: number
  @HostBinding('style.left.px') left: number
  @Output() deleteNote: EventEmitter<Note> = new EventEmitter()
 
  constructor(
    ) {     
  }

  ngOnInit() {
  }
  deleteNoteEmit(){
    this.deleteNote.emit(this._note)
  }

}
