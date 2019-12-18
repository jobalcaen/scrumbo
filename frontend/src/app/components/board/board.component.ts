import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Note, websocketEvent, NewNoteButton, Column } from 'src/app/models/models';
import { ActivatedRoute } from '@angular/router';
import { WebSocketSubject } from 'rxjs/webSocket';
import { NotesService, note_event_type, column_event_type } from 'src/app/services/notes.service';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Subscription, fromEvent, EMPTY } from 'rxjs';
import { tap, mergeMap, takeUntil, switchMap, map, filter, finalize } from 'rxjs/operators';

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
  // !: QueryList<ChildDirective>;
  @ViewChildren('dragger') dragger!: QueryList<ElementRef>
  isInteracting = false
  notes: Note[] = []
  columns: Column[] = []
  columnContainerWidth: number
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
        console.log('event', event)
        switch (event.type) {
          case note_event_type.CONNECT:
            this.notes = event.payload.notes
            this.columns = event.payload.columns
            this.columnContainerWidth = event.payload.columns_container_width - 80
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
            this.columns.push(event.payload as Column)
            break

          case column_event_type.REMOVE:
            this.columns.splice(-1,1)
            break

          case column_event_type.EDIT_TITLE:
            this.columns.map((column) => {
              if(column.id === event.payload.id) {
                column.title = event.payload.title
              }
              return column
            })
            break

          case column_event_type.RESIZE:
            this.columnContainerWidth = event.payload.columns_container_width - 80
            break
          }
        this.cd.markForCheck()
       })
    )    
  }
  
  ngAfterViewInit() {
    this.subscriptions.add(
      this.dragger.changes.pipe(
        filter((queryList) => queryList.length !== 0),
        switchMap((queryList) => {

          const mouseMove$ = fromEvent<MouseEvent>(document, 'mousemove')
          const mouseDown$ = fromEvent<MouseEvent>(queryList.first.nativeElement, 'mousedown')
          const mouseUp$ = fromEvent<MouseEvent>(document, 'mouseup')
      
          return mouseDown$.pipe(
            map(() => this.isInteracting = true),
            switchMap(() => mouseMove$.pipe(
              // map(event => event.clientX),
              takeUntil(
                mouseUp$
                ),
              map(event => event.pageX),
              finalize(() => {
                this.notesService.changeColumnContainerWidth(event.pageX)
                console.log('hello', event)
                this.isInteracting = false
              })      
            )),
          )
        }),

      ).subscribe(
        
        (width) => {
          console.log('width', width)
          this.columnContainerWidth = width - 80

     
        // this.columnContainerWidth = draggerXCoordinate - 80
        // this.notesService.changeColumnContainerWidth(width)

      })

    )
    
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
    console.log('e: ', e)
    const mouseMove$ = fromEvent(document, 'mousemove')
    const mouseDown$ = fromEvent(e.nativeElement, 'mousedown')
    const mouseUp$ = fromEvent(document, 'mouseup')

    mouseDown$.pipe(
      tap(() => console.log('mouse down')),
      switchMap(() => mouseMove$.pipe(
        takeUntil(
          mouseUp$.pipe(
            tap(() => {
              console.log('api call')
            })
          )
        )
      ))
    )
    // ).subscribe((event) => {
    //  this.columnContainerWidth = (event as MouseEvent).clientX - 80
    // })
  }

}
