import { BoardService } from './board-creation.service';
import { Board } from '../models/models';
import { of } from 'rxjs';

describe('BoardService testing', () => {
  let httpClientSpy: { 
    get: jasmine.Spy,
    post: jasmine.Spy,
  
  };
  let boardService: BoardService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get']);
    boardService = new BoardService(<any> httpClientSpy);

  });

  it('returns a board object when addBoard is called', () => {
    const expectedBoard: Board = {
      id: 121,
      name: 'the best board eva',
      url_friendly_name: 'the-best-board-eva'
    }

    httpClientSpy.post.and.returnValue(of(expectedBoard))

    boardService.addBoard('the best board eva').subscribe(
      (board) => expect(board).toEqual(expectedBoard)
    )
  });

  it('returns a board object when getBoard is called', () => {
    const expectedBoard: Board = {
      id: 121,
      name: 'the best board eva',
      url_friendly_name: 'the-best-board-eva'
    }

    httpClientSpy.get.and.returnValue(of(expectedBoard))

    boardService.getBoard('the best board eva').subscribe(
      (board) => expect(board).toEqual(expectedBoard)
    )
  });

  it('returns a boolean when checkNameNotTaken is called', () => {
    httpClientSpy.get.and.returnValue(of(false))

    boardService.checkNameNotTaken('the best board eva').subscribe(
      (doesBoardExist) => expect(doesBoardExist).toBeFalsy()
    )
  })
});
