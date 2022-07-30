import { NgModule } from '@angular/core';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { SharedModule } from '../../shared/shared.module';
const routes: Routes = [
  { path: '', component: EmployeeManagementComponent },
  { path: 'employee', component: EmployeeCreateComponent }
];
@NgModule({
  declarations: [EmployeeManagementComponent, EmployeeCreateComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
]
})
export class EmployeeManagementModule { }

