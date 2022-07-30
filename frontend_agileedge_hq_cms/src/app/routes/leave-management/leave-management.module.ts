import { NgModule } from '@angular/core';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
const routes: Routes = [
  { path: '', component: LeaveManagementComponent },
  
];
@NgModule({
  declarations: [LeaveManagementComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
]
})
export class LeaveManagementModule { }

