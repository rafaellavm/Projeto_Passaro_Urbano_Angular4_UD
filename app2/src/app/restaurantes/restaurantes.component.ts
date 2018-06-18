import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService} from '../ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService] //servicos que serao utilizados
})

export class RestaurantesComponent implements OnInit {

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {

    this.ofertaService.getOfertasPorCategoria('restaurante')
    .then((ofertas: Oferta[]) =>{
      console.log("Categoria restaurante = " , ofertas);
    })
  }

}
