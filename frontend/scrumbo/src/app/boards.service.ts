import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  private boardsUrl = 'http://127.0.0.1:8000/get_boards/'

  constructor(
    private http: HttpClient
  ) { }

  getBoards() {
    return this.http.get(this.boardsUrl)
  }
}
