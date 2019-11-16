import * as listaActions from './lista.actions';
import {Lista} from '../models/lista.model';

export type State = Lista[];

const INIT_STATE: State = [];

export function ListaReducer(state = INIT_STATE, action: listaActions.Acciones): State {
  switch (action.type) {
    case listaActions.LISTA_AGREGAR:
      return [
        ...state,
        action.lista
      ];

    case listaActions.LISTA_AGREGAR_ITEM:
      return state.map((estado: Lista) => {
        if (estado.id === action.id) {
          return {
            ...estado,
            items: [...estado.items, action.item]
          };
        } else {
          return  estado;
        }
      });

    default:
      return state;
  }

}


