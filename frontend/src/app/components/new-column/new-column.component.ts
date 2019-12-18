import { Component, OnInit } from '@angular/core';
import { BoardActionsService } from 'src/app/services/board-actions.service';

@Component({
  selector: 'app-new-column',
  templateUrl: './new-column.component.html',
  styleUrls: ['./new-column.component.scss']
})
export class NewColumnComponent implements OnInit {

  constructor(private boardActionsService: BoardActionsService) { }

  ngOnInit() {
  }

  addColumn() {
    this.boardActionsService.addColumn()
  }
}
