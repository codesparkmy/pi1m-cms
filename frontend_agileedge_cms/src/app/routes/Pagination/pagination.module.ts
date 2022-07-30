import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { PaginationComponent } from './pagination/pagination.component';


const routes: Routes = [
  { path: '', component: PaginationComponent },
];
@NgModule({
  declarations: [PaginationComponent, PaginationComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    PaginationComponent

]
})
export class PaginationModule { }
