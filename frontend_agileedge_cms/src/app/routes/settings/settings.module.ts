import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings/settings.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MemberLandingComponent } from './settings/MemberSettings/member-landing/member-landing.component';
import { MemberEditComponent } from './settings/MemberSettings/member-edit/member-edit.component';
import { NonmemberLandingComponent } from './settings/NonMemberSettings/nonmember-landing/nonmember-landing.component';
import { NonmemberEditComponent } from './settings/NonMemberSettings/nonmember-edit/nonmember-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import { RegistrationLandingComponent } from './settings/MemberRegistration/registration-landing/registration-landing.component';
import { RegistrationEditComponent } from './settings/MemberRegistration/registration-edit/registration-edit.component';

const routes: Routes = [
  { path: '', component: SettingsComponent },
  { path: 'editMember', component: MemberEditComponent },
  { path: 'editNonmember', component: NonmemberEditComponent },
  { path: 'editGst', component: GstEditComponent },
  { path: 'manageReg', component: RegistrationEditComponent }
];

@NgModule({
  declarations: [SettingsComponent, MemberLandingComponent, MemberEditComponent, NonmemberLandingComponent, NonmemberEditComponent, GstEditComponent, RegistrationLandingComponent, RegistrationEditComponent],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SettingsModule { }
