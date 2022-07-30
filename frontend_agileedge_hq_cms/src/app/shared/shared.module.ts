import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {
  MatAutocompleteModule,
   MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule

} from '@angular/material';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    MatAutocompleteModule,
    MatCheckboxModule,
   MatChipsModule,
   MatDatepickerModule,
   MatFormFieldModule,
     MatInputModule,
     MatMomentDateModule,
     MatIconModule,
     MatSelectModule,
     ChartsModule,    BsDropdownModule.forRoot(),NgxPaginationModule
    //  ToastrModule.forRoot()

  ],
  providers: [
  ],
  declarations: [

  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ModalModule,
    MatAutocompleteModule,
    MatCheckboxModule,
   MatChipsModule,
   MatDatepickerModule,
   MatFormFieldModule,
     MatInputModule,
     MatMomentDateModule,
     MatSelectModule,
     MatIconModule,
     ChartsModule,BsDropdownModule,NgxPaginationModule
  ]
})

// https://github.com/ocombe/ng2-translate/issues/209
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
