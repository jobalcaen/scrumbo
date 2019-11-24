import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-remove-column',
  templateUrl: './remove-column.component.html',
  styleUrls: ['./remove-column.component.scss']
})
export class RemoveColumnComponent implements OnInit {

  constructor(private notesService: NotesService) { }

  ngOnInit() {
  }

  removeColumn() {
    this.notesService.removeColumn()
  }
}
