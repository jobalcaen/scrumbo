import { Component, OnInit } from '@angular/core';
import { BoardService } from '../service/board.service';
import { NewBoard } from '../models/new-board.model';

@Component({
  selector: 'app-new-board',
  templateUrl: './new-board.component.html',
  styleUrls: ['./new-board.component.scss']
})
export class NewBoardComponent {

  title = 'Scrumbo';
  boardName = '';
  newBoard: NewBoard;

  constructor(private boardService: BoardService) {}  
  createBoard(newBoard): void {

    newBoard = { name: this.boardName  }
    this.boardService.addBoard(newBoard)
      .subscribe(board => console.log(board), error => console.log(error) )
    this.boardName = ''
  }

}
