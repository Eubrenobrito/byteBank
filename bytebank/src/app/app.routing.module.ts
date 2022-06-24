import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ExtratoComponent} from "./extrato/extrato.component";
import {NovaTransferenciaComponent} from "./nova-transferencia/nova-transferencia.component";


export const routes: Routes = [
//  cada objeto aqui é uma rota que estou configurando
  {path: 'extrato', component: ExtratoComponent},
  {path: 'nova-transferencia', component: NovaTransferenciaComponent},
//  path: 'nome do path', vai corresponder ao "nome do componente"

  //se eu acessar um caminho vazio, eu redireciono: redirectTo :
  {path: '', redirectTo: 'extrato', pathMatch: 'full'}
]

@NgModule({
  //preciso chamar o metodo forRoot():
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
