import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BoardService } from '../../service/board.service';
import { NewBoard } from '../../models/new-board.model'



@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.scss']
})
export class BoardFormComponent implements OnInit {
  name = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    Validators.pattern('^[a-zA-Z\s]+$'),
  ]);

  isValidBoardName = false
  constructor( private bs: BoardService ) { 
  }

  ngOnInit() {
  }

  onSubmit() {
    this.bs.addBoard(new NewBoard(this.name.value)).subscribe()
  }

  validate() {
    console.log('validating!')
  }
}
