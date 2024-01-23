import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoTableModule } from '@po-ui/ng-components';
import { AppComponent } from './app.component';
import { VendasComponent } from './vendas/vendas.component';
import { PoBreadcrumbModule } from '@po-ui/ng-components';
import { NovaVendaComponent } from './nova-venda/nova-venda.component';

@NgModule({
  declarations: [
    AppComponent,
    VendasComponent,
    NovaVendaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    PoTableModule,
    FormsModule,
    PoBreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
