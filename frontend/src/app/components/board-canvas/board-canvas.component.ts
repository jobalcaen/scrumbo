import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, pluck, map, tap } from 'rxjs/operators';
import { BoardService } from 'src/app/services/board.service';
import { Observable } from 'rxjs';
import { Note, webSocketNotes } from 'src/app/models/models';
import { SocketService } from 'src/app/services/socket.service';
import { NotesService } from 'src/app/services/notes.service';
import { debug } from 'util';



@Component({
  selector: 'app-board-canvas',
  templateUrl: './board-canvas.component.html',
  styleUrls: ['./board-canvas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush


})
export class BoardCanvasComponent implements OnInit, OnDestroy {
  boardName = window.location.pathname
  notes$ = this.notesService.connect(this.boardName).pipe(
    tap((notes) => console.log('notes', notes)),
    pluck('notes')
    )

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
      
    })
  }


}
