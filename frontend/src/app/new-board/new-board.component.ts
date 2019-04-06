import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';

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
    console.log("board name: "+this.boardName)
    this.boardService.addBoard(this.boardName)
      .subscribe(board => console.log(board), error => console.log(error) )
    this.boardName = ''
  }

}
