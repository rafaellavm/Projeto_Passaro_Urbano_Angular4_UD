import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  private route: ActivatedRoute;

  constructor(route:ActivatedRoute) { 
    this.route = route;
  }

  ngOnInit() {

    //recupera o id da rota
    //estamos recebendo um snapshot da rota que está ativa no momento
    console.log("id recuperado na rota: " + this.route.snapshot.params['id']);
  }

}
