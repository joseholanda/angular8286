import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./modules/login/login.component";
import { CaixaDeEntradaComponent } from "./modules/caixa-de-entrada/caixa-de-entrada.component";
import { CadastroComponent } from "./modules/cadastro/cadastro.component";
import { NgModule } from '@angular/core';

const rotas: Routes = [
    {path: '', component: LoginComponent},
    {path: 'inbox', component: CaixaDeEntradaComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: '**', redirectTo: 'inbox'},//LoginComponent},
];

export const ModuloRoteamento = RouterModule.forRoot(rotas);
// @NgModule({
//     imports: [
//         RouterModule.forRoot(rotas)
//     ],
//     exports: [ RouterModule ]
// })
// export class ModuloRoteamento {

// }