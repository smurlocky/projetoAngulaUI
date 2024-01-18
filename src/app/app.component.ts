import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menuItems: Array<PoMenuItem> = [
    { label: 'Home', link:"/", icon:'po-icon-home'},
    { label: 'Vendas', link:"vendas",icon: 'po-icon-product'},
  ];

}
