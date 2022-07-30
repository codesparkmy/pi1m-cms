import { NgModule } from '@angular/core';
import { CafeManagementComponent } from './cafe-management/cafe-management.component';
import { Routes, RouterModule } from '@angular/router';
import { CafeCreateComponent } from './cafe-create/cafe-create.component';
import { SharedModule } from '../../shared/shared.module';
const routes: Routes = [
  { path: '', component: CafeManagementComponent },
  { path: 'cafe', component: CafeCreateComponent }
];
@NgModule({
  declarations: [CafeManagementComponent, CafeCreateComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
]
})
export class CafeManagementModule { }

