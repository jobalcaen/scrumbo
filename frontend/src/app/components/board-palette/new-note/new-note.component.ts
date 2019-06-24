import { Component, OnInit } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BoardService } from 'src/app/services/board.service';
import { switchMap } from 'rxjs/operators';
import { NotesService } from 'src/app/services/notes.service';


@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  ns = this.notesService.connect(window.location.pathname)
  constructor(
    private route: ActivatedRoute,
    private bs: BoardService,
    private notesService: NotesService
    ) { 
      
    }

  ngOnInit() {
    this.ns.subscribe()
  }

  createNote() {
    console.log(
      'msg'
    )
    this.ns.next(JSON.stringify({message: 'some bullshit'}))
  }

  // ngOnInit() {
  //   this.notes$ = this.route.paramMap.pipe(
  //     switchMap((params: ParamMap) => 
  //       this.bs.getNotes(params.get('boardUrl'))
    
  //     )
  //   )
  // }

}
