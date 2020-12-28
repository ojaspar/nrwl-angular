import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitScreenLayoutComponent } from './split-screen-layout.component';

describe('SplitScreenLayoutComponent', () => {
  let component: SplitScreenLayoutComponent;
  let fixture: ComponentFixture<SplitScreenLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitScreenLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitScreenLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
