import { Component, OnInit } from '@angular/core';
import { coordinates } from 'src/app/models/models';
import { CompilePipeMetadata } from '@angular/compiler';


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
  selector: 'app-board-palette',
  templateUrl: './board-palette.component.html',
  styleUrls: ['./board-palette.component.scss']
})
export class BoardPaletteComponent implements OnInit {

  noteCoordinates: coordinates[] = []
  constructor() { }

  ngOnInit() {
    this.noteCoordinates = coordinates
  }

}
