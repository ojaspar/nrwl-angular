import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EIconDeleteButtonComponent } from './e-icon-delete-button.component';

describe('EIconDeleteButtonComponent', () => {
  let component: EIconDeleteButtonComponent;
  let fixture: ComponentFixture<EIconDeleteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EIconDeleteButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EIconDeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
