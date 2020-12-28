import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDismissibleFlatButtonComponent } from './e-dismissible-flat-button.component';

describe('EDismissibleFlatButtonComponent', () => {
  let component: EDismissibleFlatButtonComponent;
  let fixture: ComponentFixture<EDismissibleFlatButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EDismissibleFlatButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EDismissibleFlatButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
