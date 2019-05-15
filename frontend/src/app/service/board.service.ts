import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { NewBoard } from '../models/new-board.model';




@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private boardApiUrl = 'http://127.0.0.1:8000/api/boards/'

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

        `Backend returned code ${error.error['status_code']}, ` +
        `body was: ${error.error['detail']}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  addBoard(board: NewBoard): Observable<HttpResponse<NewBoard>> {
    const boardJson = JSON.stringify(board)
    return this.http.post<NewBoard>(this.boardApiUrl, boardJson, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
      observe: 'response'
    })
      .pipe(
        catchError(this.handleError)
      )
  }

  // checkBoardNameNotTaken(boardName) {

  //   return this.http.get(this.boardApiUrl+'?name='+boardName)
  //       .pipe(
  //         .map(
  //           res => console.log(res)
  //         )
  //       )
      
  // }

  checkEmailNotTaken(boardName: string) {
    console.log('checkEmailNotTaken: ',boardName)
    return this.http
      .get(this.boardApiUrl+'?name='+boardName)
  }

}
