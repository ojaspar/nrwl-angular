import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EModalNotificationComponent } from './e-modal-notification.component';

describe('EModalNotificationComponent', () => {
  let component: EModalNotificationComponent;
  let fixture: ComponentFixture<EModalNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EModalNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EModalNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
