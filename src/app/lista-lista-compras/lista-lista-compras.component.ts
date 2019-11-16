import {Component, OnDestroy, OnInit} from '@angular/core';
import { Lista } from '../../models/lista.model';
import { ListaService } from '../services/lista-service.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-lista-lista-compras',
  templateUrl: './lista-lista-compras.component.html',
  styleUrls: ['./lista-lista-compras.component.css']
})
export class ListaListaComprasComponent implements OnInit, OnDestroy {

  lista: Lista[] = [];

  listaSubscription: Subscription = new Subscription();

  constructor(
    private listaService: ListaService
  ) {
  }

  ngOnInit() {
    this.listaSubscription = this.listaService.getListas().subscribe(
      data => this.lista = data
    );
  }

  ngOnDestroy(): void {
    this.listaSubscription.unsubscribe();
  }


}
