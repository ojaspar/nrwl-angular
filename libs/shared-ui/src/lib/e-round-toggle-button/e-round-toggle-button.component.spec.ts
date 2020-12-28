import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERoundToggleButtonComponent } from './e-round-toggle-button.component';

describe('ERoundToggleButtonComponent', () => {
  let component: ERoundToggleButtonComponent;
  let fixture: ComponentFixture<ERoundToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ERoundToggleButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ERoundToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
