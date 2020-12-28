import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ETableFilterComponent } from './e-table-filter.component';

describe('ETableFilterComponent', () => {
  let component: ETableFilterComponent;
  let fixture: ComponentFixture<ETableFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ETableFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ETableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
