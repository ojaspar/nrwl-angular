import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECardsComponent } from './e-cards.component';

describe('ECardsComponent', () => {
  let component: ECardsComponent;
  let fixture: ComponentFixture<ECardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ECardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
