import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout.component';

import { SharedModule } from '../shared/shared.module';
import { stickyAlertComponent } from './alert/sticky-alert/stickyAlert.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [
    SharedModule
],
declarations: [
  LayoutComponent,
  SidebarComponent,
   HeaderComponent,AlertComponent,
  FooterComponent,stickyAlertComponent
],
exports: [
  LayoutComponent,
  SidebarComponent,
  HeaderComponent,AlertComponent,
   FooterComponent,stickyAlertComponent
]

})
export class LayoutModule { }
