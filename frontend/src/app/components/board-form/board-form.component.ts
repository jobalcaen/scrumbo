import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl } from '@angular/forms';
import { BoardService } from '../../service/board.service';
import { NewBoard } from '../../models/new-board.model'
import { map } from 'rxjs/operators';



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
  ])

  isValidBoardName = false
  constructor( private bs: BoardService ) { 
  }

  ngOnInit() {
  }

  onSubmit() {
    this.bs.addBoard(new NewBoard(this.name.value)).subscribe()
  }

  checkBoardNameTaken(control: AbstractControl) {
    return this.bs.checkEmailNotTaken(control.value).subscribe(
      ( board: any) => {
        console.log('board taken: ', !!board.length)
        return !!board.length
      }
    ) ? { boardNameTaken: true } : null
  }
}
