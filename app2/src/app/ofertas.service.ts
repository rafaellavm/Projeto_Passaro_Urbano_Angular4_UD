import { Oferta } from './shared/oferta.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

//conversão de observable para promise
//import 'rxjs/add/operator/toPromise';

@Injectable()
export class OfertasService {

    constructor(private http: Http) {

    }

    public getOfertas(): Promise<Oferta[]> {

        //efetuar uma requisição http
        //retornar uma promise Ofertas[]
         return this.http.get('http://localhost:3000/ofertas')
            .toPromise()
            .then((resposta: any) => resposta.json())
    }

}