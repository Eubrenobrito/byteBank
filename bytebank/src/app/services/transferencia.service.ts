import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


//decorator injectablo me diz que eu posso invocar uma instancia dessa class atravez do construtor
//vai me permitir injetar uma instancia valida desse service
@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

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
  //metodo que vai me retornar um observable que é do tipo array de transferencias
  todas(): Observable<TransferenciaService[]>{
    return this.httpClient.get<TransferenciaService[]>(this.url);
  }

  adicionar(transferencia: TransferenciaService):Observable<TransferenciaService>{
    this.hidratar(transferencia);
  //  Requisição do tipo POST
  //  os dados da requisição do tipo post vai no corpo da requisição
    return this.httpClient.post<TransferenciaService>(this.url, transferencia)
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }

}
