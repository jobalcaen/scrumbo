import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Board} from '../models/models';




@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private boardApiUrl = 'http://127.0.0.1:8000/api/boards/'

  constructor(
    private http: HttpClient
    ) { }

  private handleError(error: HttpErrorResponse) {
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

  addBoard(boardName: string): Observable<Board> {
    const boardJson = JSON.stringify({'name': boardName})
    return this.http.post<Board>(this.boardApiUrl, boardJson, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    })
      .pipe(
        catchError(this.handleError)
      )
  }

  getBoard(boardUrl: string): Observable<Board> {
      return this.http.get<Board>(this.boardApiUrl+boardUrl+'/').pipe(
      catchError(this.handleError)
    )
  }

  checkNameNotTaken(boardName: string) {
    return this.http
      .get<[]>(this.boardApiUrl+'?name='+boardName).pipe(
        map(boardAray => !!boardAray.length),
        catchError(this.handleError)
      )
  }
}
