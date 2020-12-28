import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EFlatBtnComponent } from './e-flat-btn/e-flat-btn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [EFlatBtnComponent],
  exports: [EFlatBtnComponent],
})
export class SharedUiModule {}
