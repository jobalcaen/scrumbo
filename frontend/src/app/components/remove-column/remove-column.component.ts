import { Component, OnInit } from '@angular/core';
import { BoardActionsService } from 'src/app/services/board-actions.service';

@Component({
  selector: 'app-remove-column',
  templateUrl: './remove-column.component.html',
  styleUrls: ['./remove-column.component.scss']
})
export class RemoveColumnComponent implements OnInit {

  constructor(private boardActionsService: BoardActionsService) { }

  ngOnInit() {
  }

  removeColumn() {
    this.boardActionsService.removeColumn()
  }
}
