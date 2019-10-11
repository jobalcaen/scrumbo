import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteComponent } from './note.component';
import { Component, DebugElement } from '@angular/core';
import { Note } from 'src/app/models/models';
import { MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser'

fdescribe('NoteComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let debugElement: DebugElement
 
  @Component({
    template: `
      <app-note
        [note]="note"
        (deleteNote)="deleteNote($event)"
        (cdkDragEnded)="dragEnd($event)"
        (updateNote)="updateNote($event)">
      </app-note>`
  })
  class TestHostComponent {
    note: Note  = {id: 42, body: 'the bees!', top:22, left: 22, color: 'FFFFFF'};

    deleteNote(noteId: number){
      return
    }
    dragEnd(note: Note){
      return
    }
    updateNote(note: Note){
      return
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
    const note = debugElement.query(By.css('.note-background'))
    const closButton = debugElement.query(By.css('mat-icon.close-button'))

    expect(note).toBeTruthy()
    expect(closButton).toBeTruthy()

    expect(note.nativeElement.textContent).toContain(component.note.body)

    expect(closButton.nativeElement.textContent).toBeTruthy('close')
  })


  it('should emit the deleteNove event when the close button is clicked', () => {
    const closButton = debugElement.query(By.css('mat-icon.close-button'))
    const deleteNoteSpy = spyOn(component, 'deleteNote')
    expect(deleteNoteSpy).toHaveBeenCalledTimes(0)
console.log('this.component.note', component.note)
    closButton.nativeElement.dispatchEvent(new Event('click'))
    expect(deleteNoteSpy).toHaveBeenCalledTimes(1)
    expect(deleteNoteSpy).toHaveBeenCalledWith(component.note.id)
  })
});
