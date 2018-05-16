import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  //private ofertasService => outra forma de criar um atributo
  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {

    console.log(this.ofertasService.getOfertas());
    
  }

}
