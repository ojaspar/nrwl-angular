import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EFlatBtnComponent } from './e-flat-btn/e-flat-btn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ECheckboxComponent } from './e-checkbox/e-checkbox.component';
import { EInputComponent } from './e-input/e-input.component';
import { EInputDisabledComponent } from './e-input-disabled/e-input-disabled.component';
import { ECheckInputComponent } from './e-check-input/e-check-input.component';
import { EDismissibleFlatButtonComponent } from './e-dismissible-flat-button/e-dismissible-flat-button.component';
import { ESelectComponent } from './e-select/e-select.component';
import { EFileUploadComponent } from './e-file-upload/e-file-upload.component';
import { EModalNotificationComponent } from './e-modal-notification/e-modal-notification.component';
import { EModalPromptComponent } from './e-modal-prompt/e-modal-prompt.component';
import { EModalComponent } from './e-modal/e-modal.component';
import { ECardsComponent } from './e-cards/e-cards.component';
import { CardsComponent } from './cards/cards.component';
import { ECardsFlatsComponent } from './e-cards-flats/e-cards-flats.component';
import { ETableFilterComponent } from './e-table-filter/e-table-filter.component';
import { ETableComponent } from './e-table/e-table.component';
import { EDownloadButtonComponent } from './e-download-button/e-download-button.component';
import { ERoundToggleButtonComponent } from './e-round-toggle-button/e-round-toggle-button.component';
import { EEditButtonComponent } from './e-edit-button/e-edit-button.component';
import { EIconDeleteButtonComponent } from './e-icon-delete-button/e-icon-delete-button.component';
import { ESearchInputComponent } from './e-search-input/e-search-input.component';
import { EDashedButtonComponent } from './e-dashed-button/e-dashed-button.component';
import { EPasswordInputComponent } from './e-password-input/e-password-input.component';
import { ESuccessAlertModalComponent } from './e-success-alert-modal/e-success-alert-modal.component';
import { ETokenInputComponent } from './e-token-input/e-token-input.component';
import { ERoundButtonComponent } from './e-round-button/e-round-button.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    EFlatBtnComponent,
    ECheckboxComponent,
    EInputComponent,
    EInputDisabledComponent,
    ECheckInputComponent,
    EDismissibleFlatButtonComponent,
    ESelectComponent,
    EFileUploadComponent,
    EModalNotificationComponent,
    EModalPromptComponent,
    EModalComponent,
    ECardsComponent,
    CardsComponent,
    ECardsFlatsComponent,
    ETableFilterComponent,
    ETableComponent,
    EDownloadButtonComponent,
    ERoundToggleButtonComponent,
    EEditButtonComponent,
    EIconDeleteButtonComponent,
    ESearchInputComponent,
    EDashedButtonComponent,
    EPasswordInputComponent,
    ESuccessAlertModalComponent,
    ETokenInputComponent,
    ERoundButtonComponent,
  ],
  exports: [
    EFlatBtnComponent,
    ECheckboxComponent,
    EInputComponent,
    EInputDisabledComponent,
    ECheckInputComponent,
    EDismissibleFlatButtonComponent,
    ESelectComponent,
    EFileUploadComponent,
    EModalNotificationComponent,
    EModalPromptComponent,
    EModalComponent,
    ECardsComponent,
    CardsComponent,
    ECardsFlatsComponent,
    ETableFilterComponent,
    ETableComponent,
    EDownloadButtonComponent,
    ERoundToggleButtonComponent,
    EEditButtonComponent,
    EIconDeleteButtonComponent,
    ESearchInputComponent,
    EDashedButtonComponent,
    EPasswordInputComponent,
    ESuccessAlertModalComponent,
    ETokenInputComponent,
    ERoundButtonComponent,
  ],
})
export class SharedUiModule {}
