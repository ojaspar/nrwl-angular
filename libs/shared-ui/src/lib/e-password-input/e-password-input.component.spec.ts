import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EPasswordInputComponent } from './e-password-input.component';

describe('EPasswordInputComponent', () => {
  let component: EPasswordInputComponent;
  let fixture: ComponentFixture<EPasswordInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EPasswordInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EPasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
