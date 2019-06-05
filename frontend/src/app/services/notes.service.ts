import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';
import { Subject } from 'rxjs';
import { Note } from '../models/models';
import { webSocket } from "rxjs/webSocket";

const WS_URL = 'ws://127.0.0.1:8000'

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private socket$: WebSocket
  public notes: Subject<Note[]>
  constructor() {
    
  }
  
  connect(boardName) {
   return webSocket(WS_URL+boardName)
  }
}