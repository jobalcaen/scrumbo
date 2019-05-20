import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { BoardService } from '../../services/board.service';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.scss']
})
export class BoardFormComponent implements OnInit {
  name = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
    Validators.pattern('[a-zA-Z0-9 ]+'),
  ],[(value) => this.checkBoardNameTaken(value) ])

  isValidBoardName = false
  constructor( private bs: BoardService, private router: Router) { 
  }

  ngOnInit() {
  }

  onSubmit() {
    this.bs.addBoard({'name': this.name.value}).subscribe(
      board => {
        this.router.navigate([board.url_friendly_name])
      })
    this.name.setValue('')
  }

  checkBoardNameTaken(control: AbstractControl) {
    return this.bs.checkNameNotTaken(control.value).pipe(
      map(boardTaken => boardTaken ? { boardNameTaken: true } : null),
      catchError(() => null)
    )}
}
