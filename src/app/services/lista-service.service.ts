 import {Injectable, OnInit} from '@angular/core';
 import {ActivatedRoute} from '@angular/router';
 import {Store} from '@ngrx/store';
 import {AppState} from '../../redux/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(private store: Store<AppState>) {
  }

  getListas() {
    return this.store.select('lista');
  }

  getLista(id) {

  }


}
