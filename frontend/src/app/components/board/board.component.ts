import { Component, OnInit } from '@angular/core';
import { Board, coordinates } from 'src/app/models/models';
import { ActivatedRoute } from '@angular/router';

const coordinates = [
  {
    top: 50,
    left: 50
  },
  {
    top: 200,
    left: 200
  }
]
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  noteCoordinates: coordinates[] = []
  board: Board
  constructor() { }

  ngOnInit() {
    this.noteCoordinates = coordinates
  }

}
