import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../core/services/menu/menu.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: Array<any>;
  constructor(public menu: MenuService) { 
    this.menuItems = menu.getMenu();
    console.log(this.menuItems,"MENUITEMS")
  }

  ngOnInit() {
    // 18604195555
  }

}
