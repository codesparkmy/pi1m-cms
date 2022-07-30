import { NgModule } from '@angular/core';
import { RolesComponent } from './roles/roles.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CreateRoleComponent } from './create-role/create-role.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

const routes: Routes = [
  { path: '', component: RolesComponent },
  { path: 'createRole', component: CreateRoleComponent }
];
@NgModule({
  declarations: [RolesComponent, CreateRoleComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule
  ],
  exports: [
    RouterModule
  ]
})
export class RolesModule { }

