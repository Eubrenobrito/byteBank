declare module Transferencia {

  export interface Transferencia {
    //adicionar 2 propriedades como opcional
    id?: number | string;
    valor: number ;
    destino: string| number;
    data?: Date;
  }

  export interface RootObject {
    transferencias: Transferencia[];
  }

}

