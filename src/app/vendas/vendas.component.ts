import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PoBreadcrumb, PoDynamicFormComponent, PoDynamicFormField, PoTableColumn } from '@po-ui/ng-components';


@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent {
  @ViewChild(PoDynamicFormComponent, { static: true }) dynamicForm!: PoDynamicFormComponent;

  constructor(public  router: Router){
  }

  public breadcrumb: PoBreadcrumb = {
    items:[
      {label: 'Home', link:'/'},
      {label: 'Pedidos', link:'/vendas'},
    ]
  }

  columns: PoTableColumn[] = [
    { property: 'cod', label: 'Codigo', type: 'number' },
    { property: 'name', label: 'Nome', type: 'string' },
    { property: 'qtd', label: 'Quantidade', type: 'number' },
    { property: 'price', label: 'Preço', type: 'currency', format: 'BRL' },
  ];
  items = [
    { cod: 1, name: 'Produto 1', price: 10.00 },
    { cod: 2, name: 'Produto 2', price: 20.00 },
    { cod: 3, name: 'Produto 3', price: 30.00 }
  ];

  public readonly Formfields: PoDynamicFormField[] = [
    { property: 'cod', label: 'Codigo', type: 'number', placeholder: 'Código do pedido', required: true, gridColumns: 1 },
    { property: 'name', label: 'Nome', type: 'string', placeholder: 'Nome do produto', required: true, gridColumns: 3 },
    { property: 'qtd', label: 'Quantidade', type: 'number', placeholder: 'Quantidade', required: true, gridColumns: 1 },
    { property: 'price', label: 'Preço', type: 'currency', format: 'BRL', required: true, gridColumns: 1 },
  ]

  addItem() {
    this.items.push(this.dynamicForm.form.value);

  }

  onSaveClick() {
    console.log(this.dynamicForm.form.value)
  }

  onCancel() {
    this.router.navigateByUrl('vendas')
  }
}
