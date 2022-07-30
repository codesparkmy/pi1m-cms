import { NgModule } from '@angular/core';
import { VisitorManagementComponent } from './visitor-management/visitor-management.component';
import { Routes, RouterModule } from '@angular/router';
import { VisitorCreateComponent } from './visitor-create/visitor-create.component';
import { VisitorDetailComponent } from './visitor-detail/visitor-detail.component';
import { SharedModule } from '../../shared/shared.module';
// import { PaginationComponent } from '../Pagination/pagination/pagination.component';
// import { LoaderModule } from '../loader/loader.module';

const routes: Routes = [
  { path: '', component: VisitorManagementComponent },
  { path: 'visitor', component: VisitorCreateComponent },
  { path: 'visitorDetail', component: VisitorDetailComponent }

];
@NgModule({
  declarations: [VisitorManagementComponent, VisitorCreateComponent,VisitorDetailComponent],
  imports: [
    SharedModule,
    // LoaderModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
]
})
export class VisitorManagementModule { }
