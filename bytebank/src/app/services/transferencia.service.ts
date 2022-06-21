import { Injectable } from '@angular/core';


//decorator injectablo me diz que eu posso invocar uma instancia dessa class atravez do construtor
//vai me permitir injetar uma instancia valida desse service
@Injectable({
  //
  providedIn: 'root'
})
export class TransferenciaService {

    private listaTransferencia: any [];

  constructor() {
    this.listaTransferencia = [];
  }

  get transferencias(){
    return this.listaTransferencia
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
