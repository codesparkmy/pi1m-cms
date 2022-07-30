import { NgModule } from '@angular/core';
import { VisitorManagementComponent } from './visitor-management/visitor-management.component';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
const routes: Routes = [
  { path: '', component: VisitorManagementComponent },
];
@NgModule({
  declarations: [VisitorManagementComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
]
})
export class VisitorManagementModule { }
