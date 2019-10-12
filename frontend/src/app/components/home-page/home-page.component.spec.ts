import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { BoardService } from 'src/app/services/board.service';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatIconModule, MatError, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let debugElement: DebugElement
  let boardHttpServiceSpy: jasmine.SpyObj<BoardService>
  let routerSpy: jasmine.SpyObj<Router>

  beforeEach(async(() => {
    boardHttpServiceSpy = jasmine.createSpyObj('BoardService', ['getBoard']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [ HomePageComponent ],
      providers: [
        { provide: BoardService, useValue: boardHttpServiceSpy },
        { provide: Router, useValue: routerSpy }
      ],
      imports: [
        // BrowserAnimationsModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement
    fixture.detectChanges();
  });

  it('should contain a couple of headers', () => {
    expect(component).toBeTruthy();

    expect(debugElement.queryAll(By.css('h1')).length).toEqual(1)
    expect(debugElement.queryAll(By.css('h2')).length).toEqual(1)
    expect(debugElement.queryAll(By.css('form')).length).toEqual(1)
    expect(debugElement.queryAll(By.css('button')).length).toEqual(1)


    
  });
});
