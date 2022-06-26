import {Component, EventEmitter, Output} from '@angular/core'
import {TransferenciaService} from "../services/transferencia.service";
import {Transferencia} from "../models/transferencia.model";
import {Router} from "@angular/router";

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

   constructor(private Service:TransferenciaService, private router: Router) {
   }

  transferir(){
    const valorEmitir : Transferencia = {valor: this.valor, destino:this.destino};

    this.Service.adicionar(valorEmitir).subscribe({
      next: (resultado) => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato', )
      },

      error: (error) => console.error("msg err", error),

      complete: () => {
        console.log("o observable acabou seu trabalho")
      }
    });
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
    };
  }

//Os bindings em angular são as formas de como a View interage com Model/(Compoment). Interpolation ou interpolação em
// português é o tipo mais comum de binding, ele é utilizado para transportar o valor de propriedades e retorno de
// métodos do componente para o template HTML.
