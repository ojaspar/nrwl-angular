import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedUiModule } from '@sbsc/shared-ui';
import { RouterModule } from '@angular/router';
import { DirectivesDirective } from './core/directives/directives.directive';
import { AuthGuard, AuthModule } from '@sbsc/auth';
import { LayoutModule } from '@sbsc/layout';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, DirectivesDirective],
  imports: [
    BrowserModule,
    SharedUiModule,
    AuthModule,
    LayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  exports: [DirectivesDirective],
})
export class AppModule {}
