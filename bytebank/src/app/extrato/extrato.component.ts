import { Component, Input, OnInit } from '@angular/core';
import {TransferenciaService} from "../services/transferencia.service";
import {transformSync} from "@angular/compiler-cli/linker/babel/src/babel_core";


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: any [];
  private transferencia: TransferenciaService;

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
  // //  quando for inicializado o valor do service transferencias vai ser atribuido ao array
  //   this.transferencias = this.service.transferencias;
    this.service.todas().subscribe({
        next: (transferencias: TransferenciaService[]) => {
          console.log("fase next")
          this.transferencias = transferencias;
          },

      error: (error) => console.error("msg err", error),

      //se terminou a notificação dispara o complete
      complete: () => {
          console.log("o observable acabou seu trabalho")
      }
    });
  }

}
