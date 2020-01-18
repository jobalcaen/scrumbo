import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ColumnComponent } from './column.component';
import { Component, DebugElement } from '@angular/core';
import { Column } from 'src/app/models/models';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

fdescribe('ColumnComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let debugElement: DebugElement

  const mockColumnTitle = 'Reports'
  const mockColum = {id: 42, title: mockColumnTitle, created_at: 'sometimeinthepast'}


  @Component({
    template: `
      <app-column
        [column]="column"
        (updateColumn)="updateColumn($event)">
      </app-column>`,
  })
  class TestHostComponent {
    column: Column  = mockColum
    constructor() {}

    updateColumn(column: Column) {

    }
  }

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
  })

  afterEach(() => {
    fixture.destroy()
    component = null
  })


  it('creates a column with a title', () => {
    expect(component).toBeTruthy()
    const title = debugElement.queryAll(By.css('span.title'))
    expect(title.length).toEqual(1)
    expect(title[0].nativeElement.textContent).toEqual(mockColumnTitle)
  })

  it('changes the title to a form once double clicked and back to a span when clicked outside of the element', () => {
    expect(debugElement.queryAll(By.css('form')).length).toEqual(0)

    debugElement.query(By.css('div.title-container')).nativeElement.dispatchEvent(new Event('dblclick'))

    fixture.detectChanges()
    expect(debugElement.queryAll(By.css('form')).length).toEqual(1)
  })

  it('edits the title form and emits an update column object event when clicked outside of the element', () => {
    spyOn(component, 'updateColumn')
    expect(debugElement.queryAll(By.css('form')).length).toEqual(0)
    debugElement.query(By.css('div.title-container')).nativeElement.dispatchEvent(new MouseEvent('dblclick'))
    fixture.detectChanges()
    
    const inputRef: HTMLInputElement = debugElement.query(By.css('form input')).nativeElement
    expect(inputRef).toBeTruthy()

    const newTitle = 'yowza'
    inputRef.value = newTitle

    debugElement.query(By.css('input')).nativeElement.dispatchEvent(new Event('input'))

    document.dispatchEvent(new MouseEvent('click'))
    fixture.detectChanges()

    expect(debugElement.query(By.css('span.title')).nativeElement.textContent).toEqual(newTitle)
    expect(component.updateColumn).toHaveBeenCalledTimes(1)
    expect(component.updateColumn).toHaveBeenCalledWith({
      ...mockColum,
      title: newTitle
    })
  })

  it('does not emit an update column if the title has not changed', () => {
    const title = debugElement.queryAll(By.css('span.title'))
    expect(title.length).toEqual(1)
    expect(title[0].nativeElement.textContent).toEqual(mockColumnTitle)

    spyOn(component, 'updateColumn')
    debugElement.query(By.css('div.title-container')).nativeElement.dispatchEvent(new MouseEvent('dblclick'))
    fixture.detectChanges()

    expect(debugElement.query(By.css('form input'))).toBeTruthy()

    document.dispatchEvent(new MouseEvent('click'))
    fixture.detectChanges()

    expect(component.updateColumn).toHaveBeenCalledTimes(0)
    expect(debugElement.query(By.css('span.title')).nativeElement.textContent).toEqual(mockColumnTitle)
  })

})
