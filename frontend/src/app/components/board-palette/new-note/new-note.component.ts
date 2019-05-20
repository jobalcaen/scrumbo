import { Component, OnInit } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BoardService } from 'src/app/services/board.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private bs: BoardService) { }

  ngOnInit() {
  }

  createNote() {
    console.log('note created')
    this.route.paramMap.pipe(
          switchMap((params: ParamMap) => 
            this.bs.createNote(params.get('boardUrl'),'bullshiittt'))
          ).subscribe()
  }

  // ngOnInit() {
  //   this.notes$ = this.route.paramMap.pipe(
  //     switchMap((params: ParamMap) => 
  //       this.bs.getNotes(params.get('boardUrl'))
    
  //     )
  //   )
  // }

}
