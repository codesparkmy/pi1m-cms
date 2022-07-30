import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TrainingManagementComponent } from './training-management/training-management.component';
import { Routes, RouterModule } from '@angular/router';
import { CreatTrainingComponent } from './creat-training/creat-training.component';
import { CreatMemberComponent } from './creat-member/creat-member.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
// import { LoaderComponent } from '../loader/loader/loader.component';
// import { LoaderModule } from '../loader/loader.module';


const routes: Routes = [
  { path: '', component: TrainingManagementComponent },
  { path: 'create', component: CreatTrainingComponent },
  { path: 'createMember', component: CreatMemberComponent },
  { path: 'detail', component: TrainingDetailsComponent },
];
@NgModule({
  declarations: [TrainingManagementComponent, CreatTrainingComponent,CreatMemberComponent, TrainingDetailsComponent],
  imports: [
    SharedModule,
    // LoaderModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
]
})
export class TrainingManagementModule { }
