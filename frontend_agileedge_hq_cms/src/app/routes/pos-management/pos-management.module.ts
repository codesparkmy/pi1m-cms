import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { PosManagementComponent } from './pos-management/pos-management.component';
import { AssignPcComponent } from './assign-pc/assign-pc.component';
import { PosDetailsComponent } from './pos-details/pos-details.component';

const routes: Routes = [
  { path: '', component: PosManagementComponent },

];

@NgModule({
  declarations: [PosManagementComponent, AssignPcComponent, PosDetailsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PosManagementModule { }
