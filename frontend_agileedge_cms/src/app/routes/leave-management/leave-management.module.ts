import { NgModule } from '@angular/core';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { LeaveCreatComponent } from './leave-creat/leave-creat.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
// import { LoaderComponent } from '../loader/loader/loader.component';
// import { LoaderModule } from '../loader/loader.module';

const routes: Routes = [
  { path: '', component: LeaveManagementComponent },
  { path: 'creat', component: LeaveCreatComponent },

];
@NgModule({
  declarations: [LeaveManagementComponent,LeaveCreatComponent],
  imports: [
    SharedModule,
    // LoaderModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
]
})
export class LeaveManagementModule {

}

