import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing'

import { BoardComponent } from './board.component'
import { DebugElement, Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NewNoteButton, websocketEvent, Note } from 'src/app/models/models';
import { ActivatedRouteSnapshot } from '@angular/router';
import { NotesService, event_type } from 'src/app/services/board-actions.service';
import { of } from 'rxjs';

fdescribe('BoardComponent', () => {
  let component: BoardComponent
  let fixture: ComponentFixture<BoardComponent>
  let debugElement: DebugElement
  let activatedRouteSnapshotStub
  let notesServiceSubscribeSpy: jasmine.SpyObj<any>
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
    notesServiceSubscribeSpy = spyOn(notesService, 'subscribe')
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should create a list of note buttons and notes', fakeAsync(() => {
    const connectEvent: websocketEvent = {
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
    notesServiceSubscribeSpy.and.returnValue(of(connectEvent))
    tick()

    fixture.detectChanges()


    const noteButtons = debugElement.queryAll(By.css('app-new-note'))
    const notes = debugElement.queryAll(By.css('app-note'))
    expect(noteButtons.length).toBe(5)
    expect(notes.length).toBe(2)

  }))
});
