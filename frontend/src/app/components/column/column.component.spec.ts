import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnComponent } from './column.component';
import { Component, ChangeDetectionStrategy, DebugElement } from '@angular/core';
import { Note, Column } from 'src/app/models/models';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

fdescribe('ColumnComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let debugElement: DebugElement

  const mockColumnTitle = 'Reports'
  @Component({
    template: `
      <app-column
        [column]="column"
        (updateColumn)="updateColumn($event)">
      </app-column>`,
  })
  class TestHostComponent {
    column: Column  = {id: 42, title: mockColumnTitle, created_at: 'sometimeinthepast'}
    constructor() {}

    updateColumn(column: Column) {

    }
  }

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ TestHostComponent, ColumnComponent ],
  //     imports: [ReactiveFormsModule]
  //   })
  //   .compileComponents()
  // }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHostComponent, ColumnComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents()

    fixture = TestBed.createComponent(TestHostComponent)
    component = fixture.componentInstance
    debugElement = fixture.debugElement
    fixture.detectChanges()
  });

  it('creates a column with a title', () => {
    expect(component).toBeTruthy()
    const title = debugElement.queryAll(By.css('span.title'))
    expect(title.length).toEqual(1)
    expect(title[0].nativeElement.textContent).toEqual(mockColumnTitle)
  })

  it('changes the title to a form once double clicked', () => {
    expect(debugElement.queryAll(By.css('form')).length).toEqual(0)

    debugElement.query(By.css('div.title-container')).nativeElement.dispatchEvent(new Event('dblclick'))

    fixture.detectChanges()
    expect(debugElement.queryAll(By.css('form')).length).toEqual(1)
  })

  it('edits the title form and emits an emit an event when clicked outside', () => {
    expect(debugElement.queryAll(By.css('form')).length).toEqual(0)
    debugElement.query(By.css('div.title-container')).nativeElement.dispatchEvent(new Event('dblclick'))
   
    fixture.detectChanges()
    
    expect(debugElement.queryAll(By.css('form')).length).toEqual(1)

    let formInput: HTMLInputElement = debugElement.query(By.css('input')).nativeElement
    const newTitle = 'wOW'
    formInput.value = newTitle
    formInput.dispatchEvent(new Event('input'))

    document.dispatchEvent(new Event('click'))
    fixture.detectChanges()

    expect(debugElement.query(By.css('span.title')).nativeElement.textContent).toEqual(newTitle)

  })

})
