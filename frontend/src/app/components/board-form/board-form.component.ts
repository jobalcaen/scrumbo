import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { BoardService } from '../../service/board.service';
import { NewBoard } from '../../models/new-board.model'
import { map, catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.scss']
})
export class BoardFormComponent implements OnInit {
  name = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    Validators.pattern('^[a-z\sA-Z\s]+$'),
  ],[(value) => this.checkBoardNameTaken(value) ])

  isValidBoardName = false
  constructor( private bs: BoardService) { 
  }

  ngOnInit() {
  }

  onSubmit() {
    this.bs.addBoard(new NewBoard(this.name.value)).subscribe(
      board => {console.log(board)}
      )
    this.name.setValue('')
  }

  checkBoardNameTaken(control: AbstractControl) {
    return this.bs.checkEmailNotTaken(control.value).pipe(
      tap((val) => console.log(val)),
      map(boardTaken => boardTaken ? { boardNameTaken: true } : null),
      catchError(() => null)
    )}
}
