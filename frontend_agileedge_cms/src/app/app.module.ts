import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgxPaginationModule} from 'ngx-pagination';

import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';
import{ AuthenticateService } from './routes/services/authenticate.service';
import {UserserviceService} from './routes/services/userservice.service';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './routes/interceptor/token.interceptor';
import {AuthGuard} from './routes/auth/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, // required for ng2-tag-input
    CoreModule,
    LayoutModule,
    SharedModule.forRoot(),
    RoutesModule,NgxPaginationModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
