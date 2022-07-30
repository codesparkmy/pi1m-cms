import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { APP_INITIALIZER } from '@angular/core';
import { AlertService } from './services/alert/alert.service';
// import { RemoteApiService } from './services/remote-api/remote-api.service';
import {LoadServiceService} from './services/load-service/load-service.service';
import { RemoteApiService } from './services/remote-service/remote-api.service';
import { Request } from './services/remote-service/reqResObj/Request';
export function initConfig(config: LoadServiceService) {
  return () => config.loadProperties();
}
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    RemoteApiService,
    AlertService,
    // AuthserviceService,
    // DashboardService,
    LoadServiceService,
    Request,
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [LoadServiceService],
      multi: true
    }
  ],
  exports: [
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {

      throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
