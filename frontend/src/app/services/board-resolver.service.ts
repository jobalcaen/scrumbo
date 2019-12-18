import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Board } from '../models/models';
import { BoardService } from './board-creation.service';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BoardResolverService implements Resolve<Board> {

  constructor(
    private bs: BoardService,
    private router: Router,
    ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Board> | Observable<never> {
    let boardUrl = route.paramMap.get('boardUrl')

    return this.bs.getBoard(boardUrl).pipe(
      take(1),
      mergeMap(board => {
        if (board) {
          return of(board)
        } else {
          this.router.navigate(['board-not-found'])
          return EMPTY
        }
      })
    )
  } 
}
