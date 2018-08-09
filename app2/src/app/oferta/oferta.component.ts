import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from "../ofertas.service";
import {Oferta} from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;
  private route: ActivatedRoute;

  constructor(
    route: ActivatedRoute,
    private ofertaService: OfertasService
  ) {
    this.route = route;
  }

  ngOnInit() {

    this.ofertaService.getOfertaPorId(this.route.snapshot.params['id'])
    .then((oferta: Oferta) => {
      this.oferta = oferta;
    });

    //recupera o id da rota
    //estamos recebendo um snapshot da rota que está ativa no momento
    //console.log("id recuperado na rota: " + this.route.snapshot.params['id']);

    //outra forma de recuperar o id da rota: subscribe
    //subscribe: permite encaminhar uma função de callback
    /*this.route.params.subscribe((parametro: any) => {
      console.log(parametro.id);
    });*/

  }

}
