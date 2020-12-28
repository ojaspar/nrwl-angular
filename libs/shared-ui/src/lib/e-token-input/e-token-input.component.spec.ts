import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ETokenInputComponent } from './e-token-input.component';

describe('ETokenInputComponent', () => {
  let component: ETokenInputComponent;
  let fixture: ComponentFixture<ETokenInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ETokenInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ETokenInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
