import { Component } from '@angular/core';
import {Transferencias} from "./services/transferencia.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor( private service: Transferencias) {
  }

  transferir($event: any) {
    console.log($event);
    this.service.adicionar($event);
  }
}

