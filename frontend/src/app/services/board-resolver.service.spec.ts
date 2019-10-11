import { TestBed, inject } from '@angular/core/testing';

import { BoardResolverService } from './board-resolver.service';
import { ActivatedRouteSnapshot, convertToParamMap, ParamMap, Params, Router } from '@angular/router';
import { ReplaySubject, of, EMPTY } from 'rxjs';
import { BoardService } from './board.service';
import { Board } from '../models/models';

fdescribe('BoardResolverService', () => {
  let boardResolverService: BoardResolverService;
  let boardHttpServiceSpy: jasmine.SpyObj<BoardService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let activatedRouteSnapshotStub
  let sampleBoard: Board


  
  beforeEach(() => {
    boardHttpServiceSpy = jasmine.createSpyObj('BoardService', ['getBoard']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        BoardResolverService,
        { provide: BoardService, useValue: boardHttpServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();


    boardResolverService = TestBed.get(BoardResolverService);
    sampleBoard = {
      id: 222,
      name: 'the great one',
      url_friendly_name: 'the_great_one'
    }

    activatedRouteSnapshotStub = {
      paramMap: {
        get: function() {
          return 'yoyo'
          }
        }
      };

  });


  it('should be created', () => {
    expect(boardResolverService).toBeTruthy();
  });

  it('should return a Board object is BoardService says it exists', () => {
    boardHttpServiceSpy.getBoard.and.returnValue(of(sampleBoard))

    boardResolverService.resolve(activatedRouteSnapshotStub).subscribe(
      (board: Board) => {
        expect(board).toEqual(sampleBoard)
      }
    ).unsubscribe()
  })

  it('should return an empty observable and the router should navigate', () => {
    boardHttpServiceSpy.getBoard.and.returnValue(of(false))

    boardResolverService.resolve(activatedRouteSnapshotStub).subscribe(
      (board: never) => {
        expect(routerSpy).toHaveBeenCalledWith(['board-not-found'])
        expect(board).toEqual(EMPTY)
      }
    ).unsubscribe()
  })
})
