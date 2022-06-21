import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {


  @Input() transferencias: any [];
  //usar o ngFor para exibir a lista

  constructor() { }

  ngOnInit(): void {
  }
}
