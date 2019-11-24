import { Injectable } from '@angular/core';
import { websocketEvent } from '../models/models';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';

export enum note_event_type {
  CONNECT = 'connect',
  DELETE = 'note.delete',
  ADD = 'note.add',
  MOVE = 'note.move',
  EDIT = 'note.edit'
}

export enum column_event_type {
  ADD = 'column.add',
  REMOVE = 'column.remove',
  EDIT_TITLE = 'column.edit',
}

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  
  private websocketSubject: WebSocketSubject<websocketEvent>
  constructor() {}
  
  connect(boardName) {
    this.disconnect()
    this.websocketSubject = webSocket(environment.wsUrl+'/'+boardName)   
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
      type: note_event_type.ADD,
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
      type: note_event_type.DELETE,
      payload: {
        id: noteId
      }
    })
  }

  updateNote(noteId: number, newBody: string) {
    this.websocketSubject.next({
      type: note_event_type.EDIT,
      payload: {
        id: noteId,
        body: newBody
      }
    })
  }

  moveNote(noteId: number, top: number, left: number) {
    this.websocketSubject.next({
      type: note_event_type.MOVE,
      payload: {
        id: noteId,
        top: top,
        left: left
      }
    })
  }

  addColumn() {
    this.websocketSubject.next({
      type: column_event_type.ADD,
      payload: null
    })
  }

  removeColumn() {
    this.websocketSubject.next({
      type: column_event_type.REMOVE,
      payload: null
    })
  }

  editColumnTitle() {

  }


}
