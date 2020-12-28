import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESelectComponent } from './e-select.component';

describe('ESelectComponent', () => {
  let component: ESelectComponent;
  let fixture: ComponentFixture<ESelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ESelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ESelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
