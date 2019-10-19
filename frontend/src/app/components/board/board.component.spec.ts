import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { BoardComponent } from './board.component'
import { DebugElement, Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NewNoteButton, websocketEvent, Note } from 'src/app/models/models';
import { ActivatedRouteSnapshot } from '@angular/router';
import { NotesService, event_type } from 'src/app/services/notes.service';

fdescribe('BoardComponent', () => {
  let component: BoardComponent
  let fixture: ComponentFixture<BoardComponent>
  let debugElement: DebugElement
  let activatedRouteSnapshotStub
  let notesServiceSubscribeSpy: jasmine.SpyObj<websocketEvent>
  let notesService: NotesService
  @Component({selector: 'app-new-note', template: ''})
  class NewNoteStubComponent {
    @Input() noteButtonInformation: NewNoteButton
  }

  @Component({selector: 'app-note', template: ''})
  class NoteStubComponent {
    @Input() cdkDragFreeDragPosition: any
    @Input() note: any
    @Input() cdkDragData: any
    
  }

  beforeEach(async(() => {

    activatedRouteSnapshotStub = {
      paramMap: {
        get: function() {
          return 'yoyo'
          }
        }
      }

    TestBed.configureTestingModule({
      declarations: [ 
        BoardComponent,
        NewNoteStubComponent,
        NoteStubComponent
       ],
       providers: [
        { provide: ActivatedRouteSnapshot, useValue: activatedRouteSnapshotStub }
      ]
    })
    .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent)
    component = fixture.componentInstance
    debugElement = fixture.debugElement
    notesService = debugElement.injector.get(NotesService);
    notesServiceSubscribeSpy = spyOn(notesService, 'subscribe').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should create a list of note buttons and notes', () => {
    const notesArray: websocketEvent = {
      type: event_type.CONNECT,
      payload: {
        notes: [
          { id: 1,
            body: 'hello you',
            top: 3,
            left: 4,
            color: 'FFFFFF'
          },
          { id: 2,
            body: 'hello youFSED',
            top: 3,
            left: 4,
            color: 'FFFFFF'
          },
        ] as Note[]
      }
    }
    notesServiceSubscribeSpy = spyOn(notesService, 'subscribe').and.returnValue(notesArray);

    const noteButtons = debugElement.queryAll(By.css('app-new-note'))
    expect(noteButtons.length).toBe(5)

  })
});
