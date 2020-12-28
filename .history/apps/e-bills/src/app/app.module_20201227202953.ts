import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedUiModule } from '@sbsc/shared-ui';
// import { DirectivesDirective } from '../directives.directive';
import { DirectivesDirective } from '../directives/directives.directive';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [AppComponent, DirectivesDirective],
  imports: [BrowserModule, SharedUiModule, RouterModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent],
  exports: [DirectivesDirective],
})
export class AppModule {}
