import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {AppReducer} from '../redux/app.reducer';
import {StoreDevtools, StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment.prod';
import { ListaListaComprasComponent } from './lista-lista-compras/lista-lista-compras.component';
import { FormListaComprasComponent } from './form-lista-compras/form-lista-compras.component';
import { ReactiveFormsModule} from '@angular/forms';
import { ItemListaComprasComponent } from './item-lista-compras/item-lista-compras.component';
import { AppRoutingModule } from './app-routing.module';
import { FormItemComponent } from './item-lista-compras/form-item/form-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaListaComprasComponent,
    FormListaComprasComponent,
    ItemListaComprasComponent,
    FormItemComponent
  ],
  imports: [
    StoreModule.forRoot(AppReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
