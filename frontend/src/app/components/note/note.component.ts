import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Note } from 'src/app/models/models';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, fromEvent, Subscription } from 'rxjs';
import { filter, switchMap, first, tap } from 'rxjs/operators';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() note: Note
  noteForm = new FormGroup({
    body: new FormControl('', {
      validators: Validators.maxLength(500),
      updateOn: 'blur'
    }), 
  })
  mode: 'view' | 'edit' = 'view';
  noteStyle: any
  editMode = new Subject()
  editMode$ = this.editMode.asObservable();
  private readonly subscriptions = new Subscription()
  @Output() deleteNote: EventEmitter<number> = new EventEmitter()
  @Output() updateNote: EventEmitter<Note> = new EventEmitter()
    constructor(
    private elRef: ElementRef) {     
  }

  ngOnInit() {
    this.noteForm.setValue({body: this.note.body})
    this.noteStyle = this.setStyle()

    this.subscriptions.add(
      fromEvent(this.elRef.nativeElement, 'dblclick').subscribe(() => {
        if (this.mode !== 'edit') {
          this.mode = 'edit'
          this.editMode.next(true)
        }
      })
    )

    this.subscriptions.add(
      this.editMode$.pipe(
        switchMap(() => fromEvent(document, 'click').pipe(
          filter(event => this.elRef.nativeElement.contains(event.target) === false),
          first()
        ))
      ).subscribe(() => {
        this.mode = 'view'
        const updatedNote = {
          ...this.note,
          body: this.noteForm.value.body
        }
        if (this.note.body !== this.noteForm.value.body){
          this.note.body = this.noteForm.value.body
          this.updateNote.emit(updatedNote)
        }
      })
    )
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe()
  }

  deleteNoteEmit(){
    this.deleteNote.emit(this.note.id)
  }

  setStyle(){
    let degrees = Math.floor(Math.random()*4)
    degrees *= Math.floor(Math.random()*2) == 1 ? 1 : -1
    return {
      'transform': `rotate(${degrees}deg)`,
      'background-color': `#${this.note.color}`
    }
  }
}
