import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-new-column',
  templateUrl: './new-column.component.html',
  styleUrls: ['./new-column.component.scss']
})
export class NewColumnComponent implements OnInit {

  constructor(private notesService: NotesService) { }

  ngOnInit() {
  }

  addColumn() {
    this.notesService.addColumn()
  }
}
