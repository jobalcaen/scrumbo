import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { NewBoard } from '../models/new-board.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private boardApiUrl = 'http://127.0.0.1:8000/api/boards'

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    console.log("ERROR")
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  addBoard(board: NewBoard): Observable<NewBoard> {

    let boardJson = JSON.stringify(board)
    console.log('board json' + boardJson)
    console.log("board service triggered with: "+board)
    return this.http.post<NewBoard>(this.boardApiUrl, boardJson , httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

}
