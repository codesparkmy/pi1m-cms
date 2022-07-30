import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout.component';
import { AlertComponent } from './alert/alert.component';
import { SharedModule } from '../shared/shared.module';
import { stickyAlertComponent } from './alert/sticky-alert/stickyAlert.component';
// import { ProfileComponent } from '../../app/routes/Profile/profile/profile.component';
// import { ProfileComponent } from '../routes/Profile/profile/profile.component';

@NgModule({
  imports: [
    SharedModule
],
declarations: [
  LayoutComponent,
  SidebarComponent,
  HeaderComponent,
  FooterComponent,
  AlertComponent,
  stickyAlertComponent,
  // ProfileComponent
],
exports: [
  LayoutComponent,
  SidebarComponent,
  HeaderComponent,
   FooterComponent,
   AlertComponent,
   stickyAlertComponent
]

})
export class LayoutModule { }
