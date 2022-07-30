import { NgModule, ModuleWithProviders } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';


const routes: Routes = [
  { path: '', component: LoaderComponent },
];
@NgModule({
  declarations: [LoaderComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    LoaderComponent

]
})
export class LoaderModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LoaderModule
    };
  }
 }
