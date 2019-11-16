import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../redux/app.reducer';
import {ListaService} from '../services/lista-service.service';
import {Lista} from '../../models/lista.model';

@Component({
  selector: 'app-item-lista-compras',
  templateUrl: './item-lista-compras.component.html',
  styleUrls: ['./item-lista-compras.component.css']
})
export class ItemListaComprasComponent implements OnInit {

  listaCompra: Lista;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private listaService: ListaService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.getById(id);
    });
  }

  private getById(id) {
    this.listaService.getListas().subscribe(
      data => {
        this.listaCompra = data.find((lista: Lista) => {
          return (lista.id === id);
        });

        if (!this.listaCompra) {
          this.router.navigate(['/']);
        }
      }
    );
  }

}
