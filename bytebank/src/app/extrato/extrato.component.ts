import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TransferenciaService} from "../services/transferencia.service";
import {transformSync} from "@angular/compiler-cli/linker/babel/src/babel_core";
import {Transferencia} from "../models/transferencia.model";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Router} from "@angular/router";


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: any [];
  estaEditando: boolean = false;

  constructor(private service: TransferenciaService, private router: Router) { }

  ngOnInit(): void {
    this.consultar();
  }
  // @Input() valorFilho: any ;
  // @Input() destinoFilho: any;

  public transferenciaClicada: Transferencia;

  aoEditar(item:Transferencia){
    // console.log( dados)
    //vai receber o item/objeto
    this.transferenciaClicada = item;
    this.estaEditando = true;
  }

  //DELETAR
  delete(item:Transferencia) {
    this.service.deletar(item).subscribe({
            next:() => {
              console.log("sucesso deletar")
            },
            error: (error) => console.error("msg err", error)
    });
    this.consultar();
  }
  //GET
  consultar(){
    // //  quando for inicializado o valor do service transferencias vai ser atribuido ao array
    //   this.transferencias = this.service.transferencias;
    this.service.todas().subscribe({
      next: (transferencias: Transferencia[]) => {
        console.log("sucesso get")
        this.transferencias = transferencias;
      },
      error: (error) => console.error("msg err", error),
      //se terminou a notificação dispara o complete
      complete: () => {
        console.log("o observable acabou seu trabalho(GET)")
      }
    });
  }

  transferenciaCompleta() {
    this.consultar();
    this.estaEditando = false;
  }
}
