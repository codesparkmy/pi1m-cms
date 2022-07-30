import { NgModule } from '@angular/core';
import { ControlBot } from './control-bot/control-bot.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
const routes: Routes = [
  { path: '', component: ControlBot },
  
];
@NgModule({
  declarations: [ControlBot],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
]
})
export class ControlBotModule { }

