import { Component, Input, OnInit } from '@angular/core';
import {Transferencias} from "../services/transferencia.service";
import {transformSync} from "@angular/compiler-cli/linker/babel/src/babel_core";


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: any [];

  constructor(private service: Transferencias) { }

  ngOnInit(): void {
  // //  quando for inicializado o valor do service transferencias vai ser atribuido ao array
  //   this.transferencias = this.service.transferencias;
    this.service.todas().subscribe((transferencias: Transferencias[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    })
  }
}
