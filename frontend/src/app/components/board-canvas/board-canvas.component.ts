import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BoardService } from 'src/app/services/board.service';
import { Observable } from 'rxjs';
import { Note, webSocketNotes } from 'src/app/models/models';
import { SocketService } from 'src/app/services/socket.service';
import { NotesService } from 'src/app/services/notes.service';
import { debug } from 'util';



@Component({
  selector: 'app-board-canvas',
  templateUrl: './board-canvas.component.html',
  styleUrls: ['./board-canvas.component.scss']
})
export class BoardCanvasComponent implements OnInit, OnDestroy {
  // sock = new WebSocket('ws://127.0.0.1:8000'+window.location.pathname)
  notes: Note[]
  serverMessages
  ns = this.notesService.connect(window.location.pathname)

  constructor(
    private route: ActivatedRoute,
    private bs: BoardService,
    private notesService: NotesService
  ) { }

  ngOnInit() {

   this.ns.subscribe(
      (message: webSocketNotes) => {
        this.notes = message.notes
        console.log(this.notes)
      },
      err => console.log(err), 
      () => console.log('complete')
    );


      console.log(this.serverMessages)
    console.log(window.location)

  }

  ngOnDestroy() {
    // this.ns.unsubscribe()
  }

  // sendMsg() {
  //   // this.ns.error({code: 4000, reason: 'I think our app just broke!'})
  //   this.ns.next({
  //     'message': 'hell'
  // })
  // }


}
