import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
],
declarations: [LoginComponent, ForgotPasswordComponent, ResetPasswordComponent],
exports: [
 
]
})
export class LoginModule { }
