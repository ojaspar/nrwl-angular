import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERoundButtonComponent } from './e-round-button.component';

describe('ERoundButtonComponent', () => {
  let component: ERoundButtonComponent;
  let fixture: ComponentFixture<ERoundButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ERoundButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ERoundButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
