import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() note?
  constructor() { }

  ngOnInit() {
  }

}
