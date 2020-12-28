import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EModalPromptComponent } from './e-modal-prompt.component';

describe('EModalPromptComponent', () => {
  let component: EModalPromptComponent;
  let fixture: ComponentFixture<EModalPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EModalPromptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EModalPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
