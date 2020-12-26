import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNoteBodyComponent } from './add-note-body.component';

describe('AddNoteBodyComponent', () => {
  let component: AddNoteBodyComponent;
  let fixture: ComponentFixture<AddNoteBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNoteBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNoteBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
