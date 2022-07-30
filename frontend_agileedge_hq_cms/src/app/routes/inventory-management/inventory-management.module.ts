import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { InventoryCreatComponent } from './inventory-creat/inventory-creat.component';

const routes: Routes = [
  { path: '', component: InventoryManagementComponent },
  { path: 'creat', component: InventoryCreatComponent }
];

@NgModule({
  declarations: [InventoryManagementComponent, InventoryCreatComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class InventoryManagementModule { }
