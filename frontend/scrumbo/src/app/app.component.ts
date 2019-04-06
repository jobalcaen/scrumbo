import { Component } from '@angular/core';
import { BoardService } from './board.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
