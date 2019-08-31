import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, pluck, map, tap, filter } from 'rxjs/operators';
import { BoardService } from 'src/app/services/board.service';
import { Observable } from 'rxjs';
import { Note, webSocketNotes, websocketEvent } from 'src/app/models/models';
import { SocketService } from 'src/app/services/socket.service';
import { NotesService } from 'src/app/services/notes.service';
import { debug } from 'util';


enum event_type {
  connect = 'connect',
  delete = 'note_delete',
  add = 'note_add',
  move = 'note_move',
  edit = 'note_edit'

}

@Component({
  selector: 'app-board-canvas',
  templateUrl: './board-canvas.component.html',
  styleUrls: ['./board-canvas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class BoardCanvasComponent implements OnInit, OnDestroy {
  boardName = window.location.pathname
  notes$ = this.notesService.connect(this.boardName).pipe(
    tap((event) => console.log('event', event)),
   ).subscribe((event: websocketEvent) => {
    switch (event.type) {
      case event_type.connect:
        this.notes = event.notes
        break;
      case event_type.delete:
        console.log('DELETING NOTE')
        this.notes = this.notes.filter( note => note.id !== event.note.id)
        break;
      case event_type.add:
        this.notes.push(event.note)
      }
     
     this.cd.detectChanges()
   })

  notesService$ = this.notesService.connect(this.boardName)
  serverMessages
  notes: Note[] = []


  constructor(
    private route: ActivatedRoute,
    private bs: BoardService,
    private notesService: NotesService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
   this.notesService$.subscribe()
    console.log(this.serverMessages)
    console.log(window.location)
  }

  ngOnDestroy() {
    // this.ns.unsubscribe()
  }

  sendMsg() {
    // this.ns.error({code: 4000, reason: 'I think our app just broke!'})

    this.notesService$.next({
      'type': 'note.add',
    })
  }

  deleteNote(note) {
    this.notesService$.next({
      'type': 'note.delete',
      'note': note
      
    })
  }


}
