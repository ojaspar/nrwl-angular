import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedUiModule } from '@sbsc/shared-ui';
// import { DirectivesDirective } from '../directives.directive';
import { DirectivesDirective } from '../directives/directives.directive';
@NgModule({
  declarations: [AppComponent, DirectivesDirective],
  imports: [BrowserModule, SharedUiModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [DirectivesDirective],
})
export class AppModule {}
