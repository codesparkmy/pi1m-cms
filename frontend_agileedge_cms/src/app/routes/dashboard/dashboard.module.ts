import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
// import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },

];
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule

]
})
export class DashboardModule { }
