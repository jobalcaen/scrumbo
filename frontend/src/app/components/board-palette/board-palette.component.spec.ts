import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardPaletteComponent } from './board-palette.component';

describe('BoardPaletteComponent', () => {
  let component: BoardPaletteComponent;
  let fixture: ComponentFixture<BoardPaletteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardPaletteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
