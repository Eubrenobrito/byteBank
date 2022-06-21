import { Component, Input, OnInit } from '@angular/core';
import {TransferenciaService} from "../services/transferencia.service";


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: any [];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
  //  quando for inicializado o valor de service transferencias vai ser atribuido ao array
    this.transferencias = this.service.transferencias;
  }
}
