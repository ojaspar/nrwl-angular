import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECheckInputComponent } from './e-check-input.component';

describe('ECheckInputComponent', () => {
  let component: ECheckInputComponent;
  let fixture: ComponentFixture<ECheckInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECheckInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ECheckInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
