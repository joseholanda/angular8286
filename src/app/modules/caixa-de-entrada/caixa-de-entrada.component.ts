import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: []
})
export class CaixaDeEntradaComponent {

  private _isNewEmailFormOpen = false;
  
  mensagemErro: any;
  emailList = [];
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  constructor(private emailService: EmailService) {

  }

  ngOnInit() {
    this.emailService
      .listar()
      .subscribe( 
        lista => {
          this.emailList = lista
        }
      )
  }

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen
  }

  handleNewEmail(formEmail: NgForm) {

    if (formEmail.invalid) {
      alert('E os campos obrigatorios??');
      return;
    }

    //this.emailList.push(this.email)
    this.emailService
      .enviar(this.email)
      .subscribe(
        (response: any) => {
          this.emailList.push(response);
          this.limparFormulario();
          formEmail.reset();
          this.toggleNewEmailForm();
        },
        (error: HttpErrorResponse) => {
          this.mensagemErro = error.error.body; 
          console.log(error);
          console.log('deu pau');
        }
      );
  }

  limparFormulario() {
    this.email = { 
      destinatario: "jose.holanda@holanda.com.br",
      assunto: "assunto",
      conteudo: "conteudo"
    };
  }

}
