import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { ModuloRoteamento } from './app-routing.module';
import { CmailFormGroupComponent } from './components/cmail-form-group/cmail-form-group.component';
import { CmailFormFieldDirective } from './components/cmail-form-group/cmail-form-field.directive';
import { HttpClientModule } from '@angular/common/http';

import { CadastroModule } from './modules/cadastro/cadastro.module';

import { SharedComponentsModule } from './components/shared-components.module';
import { LoginModule } from './modules/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    CaixaDeEntradaComponent,
    // LoginComponent,
    // CadastroComponent,
    // CmailFormGroupComponent,
    // CmailFormFieldDirective,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoteamento,
    HttpClientModule,
    // CadastroModule,
    SharedComponentsModule,
    // ReactiveFormsModule,
    LoginModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
