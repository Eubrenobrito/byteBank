import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NovaTransferenciaComponent} from "./nova-transferencia/nova-transferencia.component";
import {FormsModule} from "@angular/forms";
import { ExtratoComponent } from './extrato/extrato.component';
import {registerLocaleData} from "@angular/common";
import localePt from '@angular/common/locales/pt';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app.routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon"

registerLocaleData(localePt, 'pt');

@NgModule({
    declarations: [
        AppComponent,
        NovaTransferenciaComponent,
        ExtratoComponent
    //  o angular separada os componentes por modulos.
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    {
      //formatação data
      provide: LOCALE_ID, useValue: 'pt'},
    {
      //formatação de moeda real
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
