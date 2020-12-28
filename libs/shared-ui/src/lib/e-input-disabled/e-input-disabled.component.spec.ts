import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EInputDisabledComponent } from './e-input-disabled.component';

describe('EInputDisabledComponent', () => {
  let component: EInputDisabledComponent;
  let fixture: ComponentFixture<EInputDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EInputDisabledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EInputDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
