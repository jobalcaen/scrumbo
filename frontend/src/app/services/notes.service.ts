import { Injectable } from '@angular/core';
import { websocketEvent } from '../models/models';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";
import { Subscription } from 'rxjs';

const WS_URL = 'ws://127.0.0.1:8000'

export enum event_type {
  CONNECT = 'connect',
  DELETE = 'note.delete',
  ADD = 'note.add',
  MOVE = 'note.move',
  EDIT = 'note.edit'
}

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  
  private websocketSubject: WebSocketSubject<websocketEvent>
  constructor() {}
  
  connect(boardName) {
    this.disconnect()
    this.websocketSubject = webSocket(WS_URL+'/'+boardName)   
  }

  subscribe(callback): Subscription {
    return this.websocketSubject.subscribe(callback)
  }

  disconnect() {
    if(this.websocketSubject) {
      this.websocketSubject.unsubscribe()
    }
    this.websocketSubject = undefined
  }

  addNote(top:number, left:number, color: string) {
    this.websocketSubject.next({
      type: 'note.add',
      payload: {
        note: {
          top: top,
          left: left,
          body: '',
          color: color
        }
      }
    })
  }


  deleteNote(noteId: number) {
    this.websocketSubject.next({
      type: event_type.DELETE,
      payload: {
        id: noteId
      }
    })
  }

  updateNote(noteId: number, newBody: string) {
    this.websocketSubject.next({
      type: event_type.EDIT,
      payload: {
        id: noteId,
        body: newBody
      }
    })
  }

  moveNote(noteId: number, top: number, left: number) {
    this.websocketSubject.next({
      type: event_type.MOVE,
      payload: {
        id: noteId,
        top: top,
        left: left
      }
    })
  }


}
