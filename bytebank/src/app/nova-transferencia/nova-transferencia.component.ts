import {Component, EventEmitter, Output} from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {TransferenciaService} from "../services/transferencia.service";
import {error} from "@angular/compiler-cli/src/transformers/util";


//decorator
@Component({
  selector: 'app-nova-transferencia',
  templateUrl:'nova-transferencia.component.html',
  styleUrls:['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  //METADADO
  @Output() aoTransferir = new EventEmitter<any>();

   valor: number;
   destino: number;

   constructor(private Service:TransferenciaService) {

   }

  // @ts-ignore
  transferir(){
    const valorEmitir= {
                          valor: this.valor,
                          destino: this.destino
    };
    this.Service.adicionar(this.Service).subscribe((resultado) => {
      console.log(resultado);
      this.limparCampos();
      },
      (error) => console.error(error)
      );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
    };
  }

//Os bindings em angular são as formas de como a View interage com Model/(Compoment). Interpolation ou interpolação em
// português é o tipo mais comum de binding, ele é utilizado para transportar o valor de propriedades e retorno de
// métodos do componente para o template HTML.
