import { Component, OnInit, Input, HostBinding, Output, EventEmitter, ElementRef, ChangeDetectorRef, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NotesService } from 'src/app/services/notes.service';
import { Note, coordinates } from 'src/app/models/models';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, fromEvent } from 'rxjs';
import { filter, take, switchMap, tap, combineLatest } from 'rxjs/operators';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteComponent implements OnInit {

  @Input() note: Note
  @HostBinding('style')
  public get getPosition(): SafeStyle { 
    const transformString = this.sanitizer.bypassSecurityTrustStyle(`transform: translate3d(${this.note.left}px, ${this.note.top}px, 0px);`);
    return transformString } 
    
    noteForm = new FormGroup({
      name: new FormControl('', [
        Validators.maxLength(500)
      ])
    })

    mode: 'view' | 'edit' = 'view';

    
    editMode = new Subject()
    editMode$ = this.editMode.asObservable();

    private viewModeHandler() { 
      fromEvent(this.elRef.nativeElement, 'dblclick').subscribe(() => {
        console.log('edit mode')
        if (this.mode !== 'edit') {
          this.mode = 'edit'
          this.editMode.next(true)
          this.cd.markForCheck()
        }
        
     })
   }

   private editModeHandler() {
    const clickedOutside$ = fromEvent(document, 'click').pipe(
      filter(event => this.elRef.nativeElement.contains(event.target) === false),
      take(1)
    )

    this.editMode$.pipe(
      switchMap(() => clickedOutside$)
    ).subscribe(event => {
      console.log('view mode')
      this.mode = 'view'
      this.cd.markForCheck()
    })
  }
  @Output() deleteNote: EventEmitter<Note> = new EventEmitter()
    constructor(
    private elRef: ElementRef,
    private sanitizer: DomSanitizer,
    private cd: ChangeDetectorRef ) {     
  }

  ngOnInit() {
    this.viewModeHandler()
    this.editModeHandler()
  }
  deleteNoteEmit(){
    this.deleteNote.emit(this.note)
  }

  getClientPosition(){
    return this.elRef.nativeElement.getBoundingClientRect()
  }



}
