import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnotetoggleComponent } from './addnotetoggle.component';

describe('AddnotetoggleComponent', () => {
  let component: AddnotetoggleComponent;
  let fixture: ComponentFixture<AddnotetoggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnotetoggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnotetoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
