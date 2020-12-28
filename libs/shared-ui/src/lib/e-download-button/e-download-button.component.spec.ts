import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDownloadButtonComponent } from './e-download-button.component';

describe('EDownloadButtonComponent', () => {
  let component: EDownloadButtonComponent;
  let fixture: ComponentFixture<EDownloadButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EDownloadButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EDownloadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
