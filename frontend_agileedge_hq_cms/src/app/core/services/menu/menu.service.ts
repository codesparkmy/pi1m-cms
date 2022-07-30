import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems: Array<any>;
 
  constructor() {
    this.menuItems = [];
}

addMenu(items: Array<{
  text: string,
   link?: string,     // internal route links
   icon?: string,
   submenu?: Array<any>
}>) {
  items.forEach((item) => {
      this.menuItems.push(item);
  });
}




getMenu() {
  return this.menuItems;
}

}
