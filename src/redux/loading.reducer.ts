import * as loadingActions from './loading.actions';

export interface State {
  isLoading: boolean;
}

const initState: State = {
  isLoading: false
};

export function LoadingReducer(state = initState, action: loadingActions.Acciones) {
  switch (action.type) {
    case loadingActions.ACTIVAR_LOADING:
      return {
        isLoading: true
      };
    case loadingActions.DESACTIVAR_LOADING:
      return {
        isLoading: false
      };
    default:
      return state;
  }
}
