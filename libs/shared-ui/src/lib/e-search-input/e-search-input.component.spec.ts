import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESearchInputComponent } from './e-search-input.component';

describe('ESearchInputComponent', () => {
  let component: ESearchInputComponent;
  let fixture: ComponentFixture<ESearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ESearchInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ESearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
