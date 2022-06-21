import {Component, EventEmitter, Output} from '@angular/core'


//decorator
@Component({
  selector: 'app-nova-transferencia',
  templateUrl:'nova-transferencia.component.html',
  styleUrls:['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  //METADADO
  @Output() vaiEmitir = new EventEmitter<any>();

   valor: number;
   destino: number;

  transferir(){
    const valorEmitir = {
                          valor: this.valor,
                          destino: this.destino
    }
  this.vaiEmitir.emit(valorEmitir);
  //  apos emitir os dados, dispara metodo limparCampos
    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}

//Os bindings em angular são as formas de como a View interage com Model/(Compoment). Interpolation ou interpolação em
// português é o tipo mais comum de binding, ele é utilizado para transportar o valor de propriedades e retorno de
// métodos do componente para o template HTML.
