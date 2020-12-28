import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EFlatBtnComponent } from './e-flat-btn.component';

describe('EFlatBtnComponent', () => {
  let component: EFlatBtnComponent;
  let fixture: ComponentFixture<EFlatBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EFlatBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EFlatBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
