import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDashedButtonComponent } from './e-dashed-button.component';

describe('EDashedButtonComponent', () => {
  let component: EDashedButtonComponent;
  let fixture: ComponentFixture<EDashedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EDashedButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EDashedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
