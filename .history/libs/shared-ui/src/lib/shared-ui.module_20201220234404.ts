import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EFlatBtnComponent } from './e-flat-btn/e-flat-btn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ECheckboxComponent } from './e-checkbox/e-checkbox.component';
import { EInputComponent } from './e-input/e-input.component';
import { EInputDisabledComponent } from './e-input-disabled/e-input-disabled.component';
import { ECheckInputComponent } from './e-check-input/e-check-input.component';
import { EDismissibleFlatButtonComponent } from './e-dismissible-flat-button/e-dismissible-flat-button.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    EFlatBtnComponent,
    ECheckboxComponent,
    EInputComponent,
    EInputDisabledComponent,
    ECheckInputComponent,
    EDismissibleFlatButtonComponent,
  ],
  exports: [
    EFlatBtnComponent,
    ECheckboxComponent,
    EInputComponent,
    EInputDisabledComponent,
    ECheckInputComponent,
    EDismissibleFlatButtonComponent,
  ],
})
export class SharedUiModule {}
