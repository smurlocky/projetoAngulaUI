import { Component } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';


@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent {
  columns: PoTableColumn[] =[
    { property: 'id', label: 'ID' },
    { property: 'name', label: 'Nome' },
    { property: 'price', label: 'Preço', type: 'currency', format: 'BRL' }
  ];
  items = [
    { id: 1, name: 'Produto 1', price: 10.00 },
    { id: 2, name: 'Produto 2', price: 20.00 },
    { id: 3, name: 'Produto 3', price: 30.00 }
  ];

  newItem = { id: 0, name: '', price: 0 };

  addItem() {
    this.items.push(this.newItem);
      
  }

}
