import { Component, Input, OnInit } from '@angular/core';
import {TransferenciaService} from "../services/transferencia.service";
import {transformSync} from "@angular/compiler-cli/linker/babel/src/babel_core";
import {Transferencia} from "../models/transferencia.model";
import {error} from "@angular/compiler-cli/src/transformers/util";


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: any [];
  mostrarForm: boolean = false;

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    this.consultar();
  }
  onMostrarForm(){
    this.mostrarForm = !this.mostrarForm;
  }
  editar(item:Transferencia){
  this.service.onEditar(item).subscribe(
    {
      next:() => {
        console.log("sucesso editar")
      },
      error: (error) => console.error("msg err", error)
    })

  }

  delete(item:Transferencia) {
    this.service.deletar(item).subscribe({
            next:() => {
              console.log("sucesso deletar")
            },
            error: (error) => console.error("msg err", error)
    });
    this.consultar();
  }

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
}
