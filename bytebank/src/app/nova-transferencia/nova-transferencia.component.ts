import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core'
import {TransferenciaService} from "../services/transferencia.service";
import {Transferencia} from "../models/transferencia.model";
import {Router} from "@angular/router";

//decorator
@Component({
  selector: 'app-nova-transferencia',
  templateUrl:'nova-transferencia.component.html',
  styleUrls:['./nova-transferencia.component.scss'],
  // vai chamar o onChange
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class NovaTransferenciaComponent {

  //find no array
  //

  //METADADO
  @Output() aoTransferir = new EventEmitter<any>();
  @Output() valor: number ;
  @Output() destino: number;
  public idTransferencia:number;

  //set ta levando valor para dentro da funcao(transforma em object acess)(
  @Input() set editData(transferenciaClicada:Transferencia) {
    if ( transferenciaClicada != null){
      this.valor=transferenciaClicada.valor
      this.destino=transferenciaClicada.destino
      //cast
      this.idTransferencia = Number(transferenciaClicada.id);
    }
  };

   //engrenagem: me dar o objto
   //

   constructor(private service:TransferenciaService, private router: Router) {
   }

   transferir(){
    const valorEmitir : Transferencia = {valor: this.valor, destino:this.destino};
    if (this.idTransferencia){
      this.service.editar(valorEmitir, this.idTransferencia)
        .subscribe(
          () => this.aoTransferir.emit()
        )
    }else {
      this.service.adicionar(valorEmitir).subscribe({
        next: (resultado) => {
          console.log(resultado);

          this.limparCampos();
          this.router.navigateByUrl('extrato',)
        },
        error: (error) => console.error("Erro no adicionar(get)", error),
        complete: () => {
          console.log("o observable acabou seu trabalho")
        }
      });
    }
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
    };
  }

//Os bindings em angular são as formas de como a View interage com Model/(Compoment). Interpolation ou interpolação em
// português é o tipo mais comum de binding, ele é utilizado para transportar o valor de propriedades e retorno de
// métodos do componente para o template HTML.
