import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelItemsComponent } from './label-items.component';

describe('LabelItemsComponent', () => {
  let component: LabelItemsComponent;
  let fixture: ComponentFixture<LabelItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
