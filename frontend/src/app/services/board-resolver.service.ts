import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Board } from '../models/models';
import { BoardService } from './board.service';

@Injectable({
  providedIn: 'root'
})
export class BoardResolverService implements Resolve<Board> {

  constructor(private bs: BoardService, private router: Router) { }
}
