import { Component, OnInit, Input, Output, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { Column } from 'src/app/models/models';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, fromEvent } from 'rxjs';
import { filter, first, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  
  @ViewChild('titleForm', {read: false, static: true})
  titleformRef: ElementRef
  @Input() column: Column
  columnForm = new FormGroup({
    title: new FormControl('', {
      validators: Validators.maxLength(30),
      updateOn: 'blur'
    }), 
  })
  mode: 'view' | 'edit' = 'view';
  editMode = new Subject()
  editMode$ = this.editMode.asObservable();

  @Output() updateColumn: EventEmitter<Column> = new EventEmitter()
    constructor() {     
  }

  private viewModeHandler() { 
    fromEvent(this.titleformRef.nativeElement, 'dblclick').subscribe(() => {
      if (this.mode !== 'edit') {
        this.mode = 'edit'
        this.editMode.next(true)
      }
   })
  }

  private editModeHandler() {
    const clickedOutside$ = fromEvent(document, 'click').pipe(
      filter(event => this.titleformRef.nativeElement.contains(event.target) === false),
      first()
    )

    this.editMode$.pipe(
      switchMap(() => clickedOutside$)
    ).subscribe(() => {
      this.mode = 'view'
      const updatedNote = {
        ...this.column,
        title: this.columnForm.value.title
      }
      if (this.column.title !== this.columnForm.value.title){
        this.column.title = this.columnForm.value.title
        this.updateColumn.emit(updatedNote)
      }
    })
  }

  ngOnInit() {
    console.log(this.column)
    this.columnForm.setValue({title: this.column.title ? this.column.title : ""})
    this.viewModeHandler()
    this.editModeHandler()
  }

}
