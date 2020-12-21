import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainderIconComponent } from './remainder-icon.component';

describe('RemainderIconComponent', () => {
  let component: RemainderIconComponent;
  let fixture: ComponentFixture<RemainderIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemainderIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainderIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
