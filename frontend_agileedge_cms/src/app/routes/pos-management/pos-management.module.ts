import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { PosManagementComponent } from './pos-management/pos-management.component';
import { AssignPcComponent } from './assign-pc/assign-pc.component';
import { PosDetailsComponent } from './pos-details/pos-details.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TopUpComponent } from './top-up/top-up.component';
import { ChangePcComponent } from './change-pc/change-pc.component';
import { TimerComponent } from './timer/timer.component';

// import {LoaderComponent} from '../loader/loader/loader.component'
const routes: Routes = [
  { path: '', component: PosManagementComponent },
  { path: 'assignpc', component: AssignPcComponent },
  { path: 'topup', component: TopUpComponent }
];

@NgModule({
  declarations: [PosManagementComponent, AssignPcComponent, PosDetailsComponent, TopUpComponent, ChangePcComponent, TimerComponent],
  imports: [
    SharedModule,
    NgMultiSelectDropDownModule.forRoot(),
    // LoaderModule,
    RouterModule.forChild(routes)
  ]
})
export class PosManagementModule { }
