import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECardsFlatsComponent } from './e-cards-flats.component';

describe('ECardsFlatsComponent', () => {
  let component: ECardsFlatsComponent;
  let fixture: ComponentFixture<ECardsFlatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECardsFlatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ECardsFlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
