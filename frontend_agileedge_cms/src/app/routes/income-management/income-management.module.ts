import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { IncomeManagementComponent } from './income-management/income-management.component';


const routes: Routes = [
  { path: '', component: IncomeManagementComponent },
 ];


@NgModule({
  declarations: [IncomeManagementComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class IncomeManagementModule { }
