import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedUiModule } from '@sbsc/shared-ui';
// import { DirectivesDirective } from '../directives.directive';
import { RouterModule } from '@angular/router';
// import { NxModule } from '@nrwl/nx';
import { DirectivesDirective } from './core/directives/directives.directive';
import { authRoutes, AuthModule } from '../../../../libs/auth/src';
// import {SharedComponentModule} from '@sbsc/shared-component'
@NgModule({
  declarations: [AppComponent, DirectivesDirective],
  imports: [
    BrowserModule,
    SharedUiModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // NxModule.forRoot(),
    RouterModule.forRoot([{ path: 'auth', children: authRoutes }], {
      initialNavigation: 'enabled',
    }),
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [DirectivesDirective],
})
export class AppModule {}
