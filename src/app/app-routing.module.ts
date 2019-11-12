import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListaListaComprasComponent} from './lista-lista-compras/lista-lista-compras.component';
import {ItemListaComprasComponent} from './item-lista-compras/item-lista-compras.component';

const routes: Routes = [
  {path: '', component: ListaListaComprasComponent},
  {path: 'lista/:id', component: ItemListaComprasComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
