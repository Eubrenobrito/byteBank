declare module Transferencia {

  export interface Transferencia {
    //adicionar 2 propriedades como opcional
    id?: number;
    valor: number;
    destino: string;
    data?: Date;
  }

  export interface RootObject {
    transferencias: Transferencia[];
  }

}

