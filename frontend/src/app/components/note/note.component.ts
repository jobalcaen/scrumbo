import { Component, OnInit, Input, HostBinding, Output, EventEmitter, ElementRef, ChangeDetectorRef, HostListener } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NotesService } from 'src/app/services/notes.service';
import { Note, coordinates } from 'src/app/models/models';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() note: Note
  @HostBinding('style')
  public get getPosition(): SafeStyle { 
    const transformString = this.sanitizer.bypassSecurityTrustStyle(`transform: translate3d(${this.note.left}px, ${this.note.top}px, 0px);`);
    return transformString } 
    
  // @HostBinding('style.left.px')
  // public get getLeftPosition(): number { 
  //   console.log('update left')
  //   return this.note.left  } 
  @Output() deleteNote: EventEmitter<Note> = new EventEmitter()
    constructor(
    private elRef: ElementRef,
    private sanitizer: DomSanitizer
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
