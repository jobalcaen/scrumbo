import { Component, OnInit } from '@angular/core';
import { BoardService } from '../service/board.service';
import { NewBoard } from '../models/new-board.model';
import { Observable} from 'rxjs'; 
import { HttpResponse } from '@angular/common/http';

enum httpStatuses {
  OK = 201,
  BAD_REQUEST = 400,
  BOARD_NAME_EXISTS = 409,
}
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
  createBoard(newBoard) {

    newBoard = { name: this.boardName  }
    this.boardService.addBoard(newBoard)
      .subscribe(resp => this.evaluateCreateBoardResponse(resp), error => console.log(error) )
  }

  evaluateCreateBoardResponse(response: HttpResponse<NewBoard>) {
    console.log("Evaluating board")
    console.log(response.body)
    switch(response.status) {
      case httpStatuses.OK:
        console.log("OK!")
        break
      case httpStatuses.BAD_REQUEST:
        console.log("BAD REQUEST")
        break
      case httpStatuses.BOARD_NAME_EXISTS:
        console.log("board name exists!")
    }

  }

}
