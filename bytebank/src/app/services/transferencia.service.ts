import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Transferencia} from "../models/transferencia.model";


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


  //REQUISIÇÃO!!
  //metodo que vai me retornar um observable que é do tipo array de transferencias
  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }
  //POST
  //  os dados da requisição do tipo post vai no corpo da requisição
  adicionar(transferencia: Transferencia):Observable<Transferencia>{
    this.hidratar(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia)
  }
  //editar
  editar(transferencia: Transferencia, idTransferencia: number):Observable<Transferencia>{
    this.hidratar(transferencia);
    return  this.httpClient.put<Transferencia>(`${this.url}/${idTransferencia}`, transferencia)
  }
  //deletar
  deletar(transferencia: Transferencia):Observable<Transferencia>{
    return this.httpClient.delete<Transferencia>(`${this.url}/${transferencia.id}`)
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }

}
