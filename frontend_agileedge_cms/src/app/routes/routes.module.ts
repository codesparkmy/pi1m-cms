import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoginModule } from './login/login.module';
import { routes } from './routes';
import { MenuService } from '../core/services/menu/menu.service';
import { menu } from './menu';

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    SharedModule,
    LoginModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutesModule {

  constructor(public menuService: MenuService) {
    menuService.addMenu(menu);
}
 }
