import { NgModule } from '@angular/core';
import { TrainingManagementComponent } from './training-management/training-management.component';
import { Routes, RouterModule } from '@angular/router';
import { CreatTrainingComponent } from './creat-training/creat-training.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: TrainingManagementComponent },
  { path: 'creat', component: CreatTrainingComponent },
  { path: 'trainingdetail', component: TrainingDetailsComponent },
];
@NgModule({
  declarations: [TrainingManagementComponent, CreatTrainingComponent, TrainingDetailsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
]
})
export class TrainingManagementModule { }
