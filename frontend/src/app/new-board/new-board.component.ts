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

  boards: string[] =[]
  constructor(private boardService: BoardService) {}

   
  createBoard(): void {

    let newBoard: NewBoard = { name: this.boardName  }

    console.log("board name: "+newBoard.name)
    this.boardService.addBoard(newBoard)
      .subscribe(board => console.log(board), error => console.log(error) )
    this.boardName = ''
  }

}
