import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/models/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  board: Board
  constructor(private ar: ActivatedRoute) { }

  ngOnInit() {

  }

}
