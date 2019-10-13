import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { BoardService } from 'src/app/services/board.service';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { Board } from 'src/app/models/models';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let debugElement: DebugElement
  let boardHttpServiceSpy: jasmine.SpyObj<BoardService>
  let routerSpy: jasmine.SpyObj<Router>

  beforeEach(async(() => {
    boardHttpServiceSpy = jasmine.createSpyObj('BoardService', ['checkNameNotTaken','addBoard']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [ HomePageComponent ],
      providers: [
        { provide: BoardService, useValue: boardHttpServiceSpy },
        { provide: Router, useValue: routerSpy }
      ],
      imports: [
        BrowserAnimationsModule,
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

  it('should start with a disabled button', () => {
    const button = debugElement.query(By.css('button'))
    expect(button.nativeElement.disabled).toBeTruthy()
  })

  it('checks each input value against the board service', () => {
    const button = debugElement.query(By.css('button'))
    boardHttpServiceSpy.checkNameNotTaken.and.returnValue(of(false))

    expect(button.nativeElement.disabled).toBeTruthy()
    expect(component.boardForm.valid).toBeFalsy();

    component.boardForm.controls['name'].setValue('a')
    fixture.detectChanges()

    expect(boardHttpServiceSpy.checkNameNotTaken).toHaveBeenCalledWith('a')

    expect(button.nativeElement.disabled).toBeFalsy()
    expect(component.boardForm.valid).toBeTruthy()

    component.boardForm.controls['name'].setValue('aA')
    expect(boardHttpServiceSpy.checkNameNotTaken).toHaveBeenCalledWith('aA')
    expect(boardHttpServiceSpy.checkNameNotTaken).toHaveBeenCalledTimes(2)
  })

  it('displays an error if a board name is taken',() => {
    const nameInput = component.boardForm.controls['name']

    boardHttpServiceSpy.checkNameNotTaken.and.returnValue(of(true))

    expect(nameInput.errors['boardNameTaken']).toBeFalsy()

    nameInput.setValue('a')
    expect(nameInput.valid).toBeFalsy()

    expect(nameInput.errors['boardNameTaken']).toBeTruthy()

    
    // TODO: assert the error messages are in the DOM
    // fixture.detectChanges()
    // expect(debugElement.query(By.css('button')).nativeElement.disabled).toBeTruthy()
    // expect(debugElement.query(By.css('mat-error')).nativeElement.text).toEqual('This board name has already been taken')

  })

  it('displays an error if a non alpha-numeric character is entered',() => {
    const nameInput = component.boardForm.controls['name']

    boardHttpServiceSpy.checkNameNotTaken.and.returnValue(of(false))

    expect(nameInput.errors['boardNameTaken']).toBeFalsy()
    expect(nameInput.errors['pattern']).toBeFalsy()

    nameInput.setValue('a')
    expect(nameInput.valid).toBeTruthy()

    nameInput.setValue('a%')
    expect(nameInput.errors['boardNameTaken']).toBeFalsy()
    expect(nameInput.errors['pattern']).toBeTruthy()


    expect(nameInput.valid).toBeFalsy()

    
    // TODO: assert the error messages are in the DOM
    // fixture.detectChanges()
    // expect(debugElement.query(By.css('button')).nativeElement.disabled).toBeTruthy()
    // expect(debugElement.query(By.css('mat-error')).nativeElement.text).toEqual('This board name has already been taken')

  })

  it('send the board name to the board service and navigate to the newly created board when the submit button is clicked',() => {
    const sampleBoard: Board = {
      id: 222,
      name: 'the hello',
      url_friendly_name: 'the-hello'

    }
    const nameInput = component.boardForm.controls['name']

    boardHttpServiceSpy.checkNameNotTaken.and.returnValue(of(false))
    boardHttpServiceSpy.addBoard.and.returnValue(of(sampleBoard))

    nameInput.setValue(sampleBoard.name)
    component.onSubmit()

    expect(boardHttpServiceSpy.addBoard).toHaveBeenCalledTimes(1)
    expect(boardHttpServiceSpy.addBoard).toHaveBeenCalledWith('hello')
    expect(routerSpy.navigate).toHaveBeenCalledTimes(1)
    expect(routerSpy.navigate).toHaveBeenCalledWith(sampleBoard.url_friendly_name)
    
    // TODO: convert this to an async test and use the button in the DOM

  })


  
})
