import { Action } from '@ngrx/store';

export const ACTIVAR_LOADING = '[LOADING] Activar';
export const DESACTIVAR_LOADING = '[LOADING] Desactivar';

export class ActivarLoading implements Action {
  readonly type = ACTIVAR_LOADING;
}

export class DesactivarLoading implements Action {
  readonly type = DESACTIVAR_LOADING;
}

export type Acciones = ActivarLoading | DesactivarLoading;



