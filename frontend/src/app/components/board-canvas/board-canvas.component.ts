import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BoardService } from 'src/app/services/board.service';
import { Observable } from 'rxjs';
import { Note } from 'src/app/models/models';



@Component({
  selector: 'app-board-canvas',
  templateUrl: './board-canvas.component.html',
  styleUrls: ['./board-canvas.component.scss']
})
export class BoardCanvasComponent implements OnInit {

  notes$: Observable<Note[]>
  constructor(
    private route: ActivatedRoute,
    private bs: BoardService
  ) { }

  ngOnInit() {
    this.notes$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.bs.getNotes(params.get('boardUrl'))
    
      )
    )
  }

}
