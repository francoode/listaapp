import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../redux/app.reducer';
import {Lista} from '../../models/lista.model';
import {AgregarItemLista} from '../../redux/lista.actions';
import {Item} from '../../models/item.model';

@Component({
  selector: 'app-lista-lista-compras',
  templateUrl: './lista-lista-compras.component.html',
  styleUrls: ['./lista-lista-compras.component.css']
})
export class ListaListaComprasComponent implements OnInit {

  lista: Lista[] = [];

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.store.select('lista').subscribe(lista => this.lista = lista);
  }

  seleccionarLista(id) {
    const item = new Item();
    item.description = 'PAN';

    const accion = new AgregarItemLista(id, item);

    this.store.dispatch(accion);
  }

}
