import {Action} from '@ngrx/store';
import {Lista} from '../models/lista.model';
import {Item} from '../models/item.model';

export const LISTA_AGREGAR = '[LISTA] AGREGAR';
export const LISTA_ELIMINAR = '[LISTA] ELIMINAR';
export const LISTA_AGREGAR_ITEM = '[LISTA] AGREGAR ITEM';
export const LISTA_ELIMINAR_ITEM = '[LISTA] ELIMINAR ITEM';

export class AgregarLista implements Action {
  readonly type = LISTA_AGREGAR;

  constructor(public lista: Lista) {
  }
}

export class EliminarLista implements Action {
  readonly type = LISTA_ELIMINAR;

  constructor(public id) {
  }
}

export class AgregarItemLista implements Action {
  readonly type = LISTA_AGREGAR_ITEM;

  constructor(public id, public item: Item) {
  }
}

export class EliminarItemLista implements Action {
  readonly type = LISTA_ELIMINAR_ITEM;

  constructor(public id) {
  }
}



export type Acciones = AgregarLista | EliminarLista | AgregarItemLista | EliminarItemLista;
