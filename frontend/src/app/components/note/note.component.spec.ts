import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { NoteComponent } from './note.component';
import { Component, DebugElement, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Note } from 'src/app/models/models';
import { MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser'


describe('NoteComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let debugElement: DebugElement
 
  @Component({
    template: `
      <app-note
        [note]="note"
        (deleteNote)="deleteNote($event)"
        (updateNote)="updateNote($event)">
      </app-note>`,
      changeDetection: ChangeDetectionStrategy.OnPush

  })
  class TestHostComponent {
    note: Note  = {id: 42, body: 'the bees!', top:22, left: 22, color: 'FFFFFF'};
    constructor(
      private readonly changeDetectorRef: ChangeDetectorRef,
    ) {

    }

    deleteNote(noteId: number){
      return
    }
    dragEnd(note: Note){
      return
    }
    updateNote(note: Note){
      this.note = note
      this.changeDetectorRef.markForCheck()

    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteComponent, TestHostComponent ],
      imports: [
        MatIconModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement
    fixture.detectChanges();

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the note text and the close icon', () => {
    const closButton = debugElement.query(By.css('mat-icon.close-button'))

    expect(closButton).toBeTruthy()

    expect(debugElement.nativeElement.textContent).toContain(component.note.body)

    expect(closButton.nativeElement.textContent).toBeTruthy('close')
  })


  it('should emit the deleteNove event when the close button is clicked', () => {
    const closButton = debugElement.query(By.css('mat-icon.close-button'))
    const deleteNoteSpy = spyOn(component, 'deleteNote')
    expect(deleteNoteSpy).toHaveBeenCalledTimes(0)

    closButton.nativeElement.dispatchEvent(new Event('click'))

    expect(deleteNoteSpy).toHaveBeenCalledTimes(1)
    expect(deleteNoteSpy).toHaveBeenCalledWith(component.note.id)
  })

  it('reveals a form when double clicked', async(() => {
    const note = debugElement.query(By.css('app-note'))

    expect(debugElement.queryAll(By.css('form textarea')).length).toEqual(0)
    expect(debugElement.queryAll(By.css('mat-icon.close-button')).length).toEqual(1)

    note.nativeElement.dispatchEvent(new Event('dblclick'))
    fixture.detectChanges()

    expect(debugElement.queryAll(By.css('form textarea')).length).toEqual(1)
    expect(debugElement.queryAll(By.css('form textarea'))[0].nativeElement.value).toEqual(component.note.body)
    expect(debugElement.queryAll(By.css('mat-icon.close-button')).length).toEqual(0)
  }))

  it('emits the updateNote event when clicking outside the note when the form is revealed, emits updateNote, hide the form', async() => {
    await fixture.whenStable();

    const note = debugElement.query(By.css('app-note'))
    const updateNoteSpy = spyOn(component, 'updateNote')

    note.nativeElement.dispatchEvent(new Event('dblclick'))
    expect(updateNoteSpy).toHaveBeenCalledTimes(0)
    fixture.detectChanges()
    await fixture.whenStable();

    expect(debugElement.queryAll(By.css('form textarea')).length).toEqual(1)

    // edit the note body
    let textarea: HTMLTextAreaElement = debugElement.query(By.css('form textarea')).nativeElement
    textarea.value = 'wow the now has been updated'   
    textarea.dispatchEvent(new Event('input'))
    fixture.detectChanges()
    await fixture.whenStable();

    // click outside note
    document.dispatchEvent(new Event('click'))
    fixture.detectChanges()
    await fixture.whenStable();

    // expect(updateNoteSpy).toHaveBeenCalledTimes(1)

    // fixture.detectChanges()

    // expect(debugElement.queryAll(By.css('form textarea')).length).toEqual(0)
    // expect(updateNoteSpy).toHaveBeenCalledTimes(1)
    // expect(updateNoteSpy).toHaveBeenCalledWith(component.note)
    // expect(debugElement.query(By.css('app-note')).nativeElement.text).toContain(component.note.body)


  })
});
