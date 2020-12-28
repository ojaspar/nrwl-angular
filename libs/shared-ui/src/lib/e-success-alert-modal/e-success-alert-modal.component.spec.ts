import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESuccessAlertModalComponent } from './e-success-alert-modal.component';

describe('ESuccessAlertModalComponent', () => {
  let component: ESuccessAlertModalComponent;
  let fixture: ComponentFixture<ESuccessAlertModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ESuccessAlertModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ESuccessAlertModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
