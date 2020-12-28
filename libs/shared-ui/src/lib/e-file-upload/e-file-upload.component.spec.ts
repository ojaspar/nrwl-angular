import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EFileUploadComponent } from './e-file-upload.component';

describe('EFileUploadComponent', () => {
  let component: EFileUploadComponent;
  let fixture: ComponentFixture<EFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EFileUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
