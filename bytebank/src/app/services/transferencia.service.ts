import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


//decorator injectablo me diz que eu posso invocar uma instancia dessa class atravez do construtor
//vai me permitir injetar uma instancia valida desse service
@Injectable({
  providedIn: 'root'
})
export class Transferencias {

    private listaTransferencia: any [];
    private url = 'http://localhost:3000/transferencias';

  //  injetando class HTTPCLIENT
  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias(){
    return this.listaTransferencia
  }

  //REQUISIÇÃO!!
  //metodo que vai me retornar todas as transferencias
  todas(): Observable<Transferencias[]>{
    return this.httpClient.get<Transferencias[]>(this.url)
  }

  adicionar(transferencia: any){
    this.hidratar(transferencia);
    //ao transferir, vou passar tudo que veio do $event e a data para a propriedade trasnferencia
    this.transferencias.push(transferencia)
    //  transferencia vai adicionar o valor que vai vir do $event
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }

}
