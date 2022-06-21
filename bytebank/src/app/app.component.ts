import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transferencia: any[] = [];

  transferir($event: any) {
    //propriedade "transferencia, vai receber o valor do $event
    //spread operator:descontruindo o evento:pegando apenas as propriedades e passando
    //para dentro do objeto transferencia
    //pegando apenas as propriedades do objeto transferencia que o $event tras
    const transferencia = {...$event, data: new Date()};
    //ao transferir, vou passar tudo que veio do $event e a data para a propriedade trasnferencia
    this.transferencia.push(transferencia)
  //  transferencia vai adicionar o valor que vai vir do $event
  }
}

