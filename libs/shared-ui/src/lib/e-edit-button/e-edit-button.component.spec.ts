import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EEditButtonComponent } from './e-edit-button.component';

describe('EEditButtonComponent', () => {
  let component: EEditButtonComponent;
  let fixture: ComponentFixture<EEditButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EEditButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EEditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
