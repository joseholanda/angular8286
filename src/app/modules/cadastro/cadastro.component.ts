import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { log } from 'util';
import { HttpClient, HttpResponseBase, HttpErrorResponse } from "@angular/common/http";
import { map, catchError } from  "rxjs/operators";
import { User } from "../../models/user";
import { Router } from "@angular/router";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    avatar: new FormControl('', [Validators.required], this.validaImagem.bind(this)),
  });

  mensagensErro = '';

  validaImagem(campoDoFormulario: FormControl) {
    return this.httpClient
      .head( campoDoFormulario.value, {observe: 'response'})
      .pipe( 
        map( (response:HttpResponseBase) => {
          return response.ok ? null : {urlInvalida: true }
        }),catchError((error)=>{
          return [{urlInvalida: true}]
        })
      );
  }

  validatTodosOsCamposDoFormulario(form:FormGroup) {
    Object.values(form.controls).forEach(control => {
      // const control = form.get(field);
      control.markAsTouched({onlySelf: true});
    })
  }

  handleCadastrarUsuario() {
    if (this.formCadastro.valid) {

      const userData = new User(this.formCadastro.value);

      this.httpClient
        .post('http://localhost:3200/users',userData)
        .subscribe( () => {
            alert('Cadastrado com sucesso');
            this.formCadastro.reset();

            this.roteador.navigate(['']);
          },(error: HttpErrorResponse) => {
            this.mensagensErro = error.error.body;
          }
        );
    }else {
      this.validatTodosOsCamposDoFormulario(this.formCadastro);
    }
  }

  constructor(private httpClient: HttpClient, private roteador: Router) { }

  ngOnInit() {
  }

}
