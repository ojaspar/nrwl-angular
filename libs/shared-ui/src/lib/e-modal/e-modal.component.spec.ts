import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EModalComponent } from './e-modal.component';

describe('EModalComponent', () => {
  let component: EModalComponent;
  let fixture: ComponentFixture<EModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
