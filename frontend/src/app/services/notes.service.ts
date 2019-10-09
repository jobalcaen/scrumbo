import { Injectable } from '@angular/core';
import { websocketEvent } from '../models/models';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";

const WS_URL = 'ws://127.0.0.1:8000'

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  constructor() {
    
  }
  
  connect(boardName): WebSocketSubject<websocketEvent>  {
   return webSocket(WS_URL+boardName)
  }


}
