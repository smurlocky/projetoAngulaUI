import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VendasComponent } from './vendas/vendas.component';
import { AppComponent } from './app.component';
import { NovaVendaComponent } from './nova-venda/nova-venda.component';

const routes: Routes = [
  {
    path:'',
    component: AppComponent,
    title: 'pagina principal'
  },
  {
    path:'vendas',
    component: VendasComponent,
    title:'Pagina de Vendas'
  },
  {
    path:'novaVenda',
    component: NovaVendaComponent,
    title:'Cadastro de produtos'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
