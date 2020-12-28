import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
// import {MaterialModule} from '@sbsc/material'
// import {MaterialModule} from '../../../'

export const authRoutes: Route[] = [
  { path: '', component: LoginComponent, data: { animation: 'One' } },
];

@NgModule({
  imports: [CommonModule,HttpClientModule, RouterModule],
  declarations: [LoginComponent, LoginFormComponent],
})
export class AuthModule {}
