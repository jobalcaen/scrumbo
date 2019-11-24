import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveColumnComponent } from './remove-column.component';

describe('RemoveColumnComponent', () => {
  let component: RemoveColumnComponent;
  let fixture: ComponentFixture<RemoveColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
