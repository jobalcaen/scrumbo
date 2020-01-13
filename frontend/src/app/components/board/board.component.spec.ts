import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing'

import { BoardComponent } from './board.component'
import { DebugElement, Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NewNoteButton, websocketEvent, Note } from 'src/app/models/models';
import { ActivatedRouteSnapshot, RouterModule, ActivatedRoute, convertToParamMap } from '@angular/router';
import { BoardActionsService, note_event_type } from 'src/app/services/board-actions.service';
import { of, from } from 'rxjs';
import { CustomMaterialModule } from 'src/app/common/material.module';

fdescribe('BoardComponent', () => {
  let component: BoardComponent
  let fixture: ComponentFixture<BoardComponent>
  let debugElement: DebugElement
  let activatedRouteSnapshotStub
  let notesServiceSubscribeSpy: jasmine.SpyObj<any>
  let boardActionsService: jasmine.SpyObj<any>
  const mockBoardName = 'yoyo'
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

  @Component({selector: 'app-new-column', template: ''})
  class NewColumnComponent {}

  @Component({selector: 'app-column', template: ''})
  class ColumnComponent {
    @Input() column: any

  }

  @Component({selector: 'app-remove-column', template: ''})
  class RemoveColumnComponent {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        BoardComponent,
        NewNoteStubComponent,
        NoteStubComponent,
        NewColumnComponent,
        RemoveColumnComponent,
        ColumnComponent,
      ],
      imports: [
        CustomMaterialModule,
        RouterModule.forRoot([]),
       ],
       providers: [
        { provide: BoardActionsService, useValue: jasmine.createSpyObj('BoardActionsService', ['connect', 'subscribe']) },
        { provide: ActivatedRoute, useValue: { paramMap: of(convertToParamMap({boardUrl: mockBoardName})) } }

      ]
    })
    .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent)
    component = fixture.componentInstance
    debugElement = fixture.debugElement
    boardActionsService = TestBed.get(BoardActionsService);

    fixture.detectChanges();
  });

  it('creates the component and calls connect on the board action service when the cmp mounts', () => {
    expect(component).toBeTruthy()
    expect(boardActionsService.connect).toHaveBeenCalledTimes(1)
    expect(boardActionsService.connect).toHaveBeenCalledWith(mockBoardName)
  });


  fit('creates a list of note buttons and notes', fakeAsync(() => {
    const connectEvent: websocketEvent = {
      type: note_event_type.CONNECT,
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
        ],
        columns: [],
        columns_container_width: 1000,
      }
    }
    expect(boardActionsService.subscribe).toHaveBeenCalledTimes(1)
    // spyOn(TestBed.get(boardActionsService), 'subscribe').and.callFake((parm1: string, param2: string, param3: any, param4: any, callback: (data) => {}) => {
    //   callback('DATA_RESULT');
    // })


    boardActionsService.subscribe.and.returnValue(connectEvent)
    fixture.detectChanges()

    // notesServiceSubscribeSpy.and.returnValue(connectEvent)
    tick()

    fixture.detectChanges()


    const noteButtons = debugElement.queryAll(By.css('app-new-note'))
    const notes = debugElement.queryAll(By.css('app-note'))
    expect(noteButtons.length).toBe(5)
    expect(notes.length).toBe(2)

  }))
});
