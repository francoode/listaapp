import * as fromLoading from './loading.reducer';
import * as fromLista from './lista.reducer';

import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  loading: fromLoading.State;
  lista: fromLista.State;
}

export const AppReducer: ActionReducerMap<AppState> = {
  loading: fromLoading.LoadingReducer,
  lista: fromLista.ListaReducer
};


