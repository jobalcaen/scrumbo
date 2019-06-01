import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BoardService } from 'src/app/services/board.service';
import { Observable } from 'rxjs';
import { Note } from 'src/app/models/models';
import { SocketService } from 'src/app/services/socket.service';



@Component({
  selector: 'app-board-canvas',
  templateUrl: './board-canvas.component.html',
  styleUrls: ['./board-canvas.component.scss']
})
export class BoardCanvasComponent implements OnInit {
  sock = new WebSocket('ws://127.0.0.1:8000'+window.location.pathname)
  notes$: Observable<Note[]>
  constructor(
    private route: ActivatedRoute,
    private bs: BoardService,
  ) { }

  

  sendMsg() {
    this.sock.send(JSON.stringify('fuck/!!'))
  }
  ngOnInit() {

    console.log(window.location)

    this.sock.onmessage = (e) => {
      console.log("message", e)
    }
 
    this.sock.onopen = (e) => {
      console.log("open", e)
      this.sock.send(JSON.stringify('bullshit'))
    }

    this.sock.onerror = (e) => {
      console.log("error", e)
    }

    this.sock.onclose = (e) => {
      console.log('close', e)
    }

    

    this.notes$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.bs.getNotes(params.get('boardUrl'))
    
      )
    )
  }

}
