import { Component, OnInit, Input, HostBinding, Output, EventEmitter, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NotesService } from 'src/app/services/notes.service';
import { Note, coordinates } from 'src/app/models/models';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() note: Note
  @HostBinding('style.top.px')
  public get getTopPosition(): number { 
    console.log('update top')
    return this.note.top  } 
    
  @HostBinding('style.left.px')
  public get getLeftPosition(): number { 
    console.log('update left')
    return this.note.left  } 
  @Output() deleteNote: EventEmitter<Note> = new EventEmitter()
 
  constructor(
    private elRef: ElementRef,
    ) {     
  }

  ngOnInit() {
  }
  deleteNoteEmit(){
    this.deleteNote.emit(this.note)
  }

  getClientPosition(){
    return this.elRef.nativeElement.getBoundingClientRect()
  }

}
