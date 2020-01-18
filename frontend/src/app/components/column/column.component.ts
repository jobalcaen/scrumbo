import { Component, OnInit, Input, Output, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { Column } from 'src/app/models/models';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, fromEvent, Subscription } from 'rxjs';
import { filter, first, switchMap, tap } from 'rxjs/operators';

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
      updateOn: 'change'
    }), 
  })
  mode: 'view' | 'edit' = 'view';
  editMode = new Subject()
  editMode$ = this.editMode.asObservable()
  private readonly subscriptions = new Subscription()


  @Output() updateColumn: EventEmitter<Column> = new EventEmitter()
    constructor() {     
  }

  ngOnInit() {    
    this.columnForm.setValue({title: this.column.title ? this.column.title : ""})

    this.subscriptions.add(
      fromEvent(this.titleformRef.nativeElement, 'dblclick').subscribe(() => {
        if (this.mode !== 'edit') {
          this.mode = 'edit'
          this.editMode.next(true)
        }
     })
    )

    this.subscriptions.add(
      this.editMode$.pipe(
        switchMap(() => fromEvent(document, 'click').pipe(
          filter(event => {
            return this.titleformRef.nativeElement.contains(event.target) === false}),
          first()
        ))
      ).subscribe(() => {
        this.mode = 'view'
        
        if (this.column.title !== this.columnForm.value.title){ 
          this.column.title = this.columnForm.value.title
          this.updateColumn.emit({
            ...this.column,
            title: this.columnForm.value.title
          })
        }
      })
    )
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe()
  }

}
