import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EFlatBtnComponent } from './e-flat-btn/e-flat-btn.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EFlatBtnComponent],
  exports: [EFlatBtnComponent],
})
export class SharedUiModule {}
