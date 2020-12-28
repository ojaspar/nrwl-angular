import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECheckboxComponent } from './e-checkbox.component';

describe('ECheckboxComponent', () => {
  let component: ECheckboxComponent;
  let fixture: ComponentFixture<ECheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ECheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
