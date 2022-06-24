


//molde dos tipos do json que vou manipular
export interface Transferencia {
    //adicionar 2 propriedades como opcional
    id?: number | string;
    valor: number ;
    destino: string| number;
    data?: Date;
  }

