import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { BoardService } from 'src/app/services/board.service';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
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
  this.bs.addBoard(this.boardForm.value.name).subscribe(
    board => {
      console.log('board', board)
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
