import {Component, HostBinding, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../redux/app.reducer';
import {AgregarLista} from '../../redux/lista.actions';
import {Lista} from '../../models/lista.model';

@Component({
  selector: 'app-form-lista-compras',
  templateUrl: './form-lista-compras.component.html',
  styleUrls: ['./form-lista-compras.component.css'],

})
export class FormListaComprasComponent implements OnInit {

  form: FormGroup;

  constructor(private store: Store<AppState>,
              private fb: FormBuilder) {
  }


  ngOnInit() {
    this.form = this.fb.group({
      titulo: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const lista = new Lista();
    lista.titulo = this.form.get('titulo').value;
    lista.id = (Math.random() * 100).toString();
    lista.items = [];

    const action = new AgregarLista(lista);
    this.store.dispatch(action);

    this.form.reset();

  }

}
