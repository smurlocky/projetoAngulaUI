import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menuItems: Array<PoMenuItem> = [
    { label: 'Home', shortLabel:'Home',link:"/", icon:'po-icon-home'},
    { label: 'Vendas', shortLabel:'Vendas', link:"vendas", icon: 'po-icon-cart'},
    { label: 'Cadastro de produtos', shortLabel:'CdP', link:"novaVenda", icon: 'po-icon-home'},
  ];

}
