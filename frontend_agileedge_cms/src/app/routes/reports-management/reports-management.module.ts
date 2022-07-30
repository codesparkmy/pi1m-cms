import { NgModule } from '@angular/core';
import { ReportsManagementComponent } from './reports-management/reports-management.component';
// import { LeaveCreatComponent } from './leave-creat/leave-creat.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
const routes: Routes = [
  { path: '', component: ReportsManagementComponent },
  // { path: 'creat', component: LeaveCreatComponent },

];
@NgModule({
  declarations: [ReportsManagementComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
]
})
export class ReportsManagementModule { }

