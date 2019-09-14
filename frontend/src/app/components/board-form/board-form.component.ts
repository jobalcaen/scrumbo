import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, Validators, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';
import { BoardService } from '../../services/board.service';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.scss']
})
export class BoardFormComponent implements OnInit, OnChanges {
  
  boardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.pattern('[a-zA-Z0-9 ]+'),
    ],[(value) => this.checkBoardNameTaken(value)])
  })
  
  isValidBoardName = false
  constructor( private bs: BoardService, private router: Router) { 
  }
  ngOnInit() {
  }

  onSubmit() {

    console.log(this.boardForm)
    this.bs.addBoard({'name': this.boardForm.value.name}).subscribe(
      board => {
        this.router.navigate([board.url_friendly_name])
      })
  }

  checkBoardNameTaken(control: AbstractControl) {
    return this.bs.checkNameNotTaken(control.value).pipe(
      map(boardTaken => boardTaken ? { boardNameTaken: true } : null),
      catchError(() => null)
    )}

    ngOnChanges() {
      console.log(    this.boardForm.errors)
        
    }
}
