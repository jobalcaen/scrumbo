import { TestBed } from '@angular/core/testing';
import { BoardService } from './board.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { NewBoard } from '../models/models';
const testUrl = '/api/boards';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

describe('BoardService testing', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule
      ],
      providers: [
        BoardService,
      ],
    })
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);

  });

  it('should be created', () => {
    const service: BoardService = TestBed.get(BoardService);
    expect(service).toBeTruthy();
  });

  it('can POST a Board', () => {
    const testData: NewBoard = {name: "testBoard"}
    const boardJson = JSON.stringify(testData)

    httpClient.post<NewBoard>(testUrl, boardJson, httpOptions)
      .subscribe(data =>
        expect(data).toEqual(testData)  
      )

  });
});
