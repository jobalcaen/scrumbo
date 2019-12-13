import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { Note, websocketEvent, NewNoteButton, Column } from 'src/app/models/models';
import { ActivatedRoute } from '@angular/router';
import { WebSocketSubject } from 'rxjs/webSocket';
import { NotesService, note_event_type, column_event_type } from 'src/app/services/notes.service';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Subscription, fromEvent } from 'rxjs';
import { tap, mergeMap, takeUntil, switchMap } from 'rxjs/operators';

const noteButtons = [
  {
    top: 50,
    left: 50,
    color: 'ACC1FF'
  },
  {
    top: 150,
    left: 50,
    color: 'C7EEFF'
  },
  {
    top: 150,
    left: 50,
    color: 'FFAEAE'
  },
  {
    top: 150,
    left: 50,
    color: 'FFEC94'
  },
  {
    top: 150,
    left: 50,
    color: 'B0E57C'
  },

]


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @ViewChild('column_container',{static: true}) columnContainer: ElementRef
  @ViewChild('dragger',{static: true}) dragger: ElementRef
  notes: Note[] = []
  columns: Column[] = []
  columnContainerWidth: number = 1080
  notesService$: WebSocketSubject<websocketEvent>
  noteButtons: NewNoteButton[] = []
  private readonly subscriptions = new Subscription()
  constructor(
    private notesService: NotesService,
    private cd: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.noteButtons = noteButtons

    this.subscriptions.add(
      this.activatedRoute.paramMap.subscribe((params) => {
        this.notesService.connect(params.get('boardUrl'))
      })
    )

    this.subscriptions.add(
      this.notesService.subscribe((event: websocketEvent) => {
        switch (event.type) {
          case note_event_type.CONNECT:
            this.notes = event.payload.notes
            this.columns = event.payload.columns
            break
  
          case note_event_type.DELETE:
            this.notes = this.notes.filter(note => note.id !== event.payload.id)
            break
            
          case note_event_type.ADD:
            this.notes.push(event.payload.note)
            break
  
          case note_event_type.MOVE:
            this.notes.map((note) => {
              if(note.id === event.payload.id){
                note.top = event.payload.top
                note.left = event.payload.left
              }
              return note
            })
            break
  
          case note_event_type.EDIT:
            this.notes.map((note) => {
              if(note.id === event.payload.id){
                note.body = event.payload.body
              }
              return note      
            })
            break
  
          case column_event_type.ADD:
            console.log('column added', event.payload)
            this.columns.push(event.payload as Column)
            break

          case column_event_type.REMOVE:
            console.log('column removed', event.payload)
            this.columns.splice(-1,1)
            break
          }
        console.log('columns ', this.columns)
        this.cd.markForCheck()
       })
    )    
  }
  
  ngAfterViewInit() {
    console.log('columnContainer: ',this.columnContainer)
    this.columnContainerDragHandler(this.columnContainer)
    
  }  
  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }

  deleteNote(noteId: number) {
    this.notesService.deleteNote(noteId)
  }

  updateNote(note: Note) {
    this.notesService.updateNote(note.id, note.body)
  }

  updateColumn(column: Column) {
    console.log('update column', column)
    this.notesService.editColumnTitle(column)
  }

  dragEnd(evt: CdkDragEnd) {
    const newTop = evt.source.data.top + evt.distance.y
    const newLeft = evt.source.data.left + evt.distance.x
    this.notesService.moveNote(evt.source.data.id, newTop, newLeft)
  }
 
  trackByFn(index, note) {
    if (!note) {
      return null
    } else {
      return note.id
    }
  }

  columnContainerDragHandler(e: ElementRef) {
    const mouseMove$ = fromEvent(e.nativeElement, 'mousemove')
    const mouseDown$ = fromEvent(e.nativeElement, 'mousedown')
    const mouseUp$ = fromEvent(e.nativeElement, 'mouseup')

    mouseDown$.pipe(
      switchMap(() => mouseMove$.pipe(
        takeUntil(
          mouseUp$.pipe(
            tap(() => {
              console.log('api call')
              console.log('this.columnContainerWidth: ', this.columnContainerWidth)

            })
          )
        )
      ))
    ).subscribe((event) => {

      console.log('mouse evemt: ', event.movementX)

      this.columnContainerWidth = this.columnContainerWidth += event.movementX

      console.log('this.columnContainerWidth: ', this.columnContainerWidth)
    })
  }

}
