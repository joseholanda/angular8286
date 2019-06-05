import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensagemErro: any;
  login = {
    email: '',
    password: ''
  }

  constructor(private loginService: LoginService, private roteador: Router) { }

  ngOnInit() {
  }

  handleLogin(formLogin: NgForm) {
    if (formLogin.valid) {
      
      this.loginService
        .logar(this.login)
        .subscribe(
            (response: any) => {
              this.roteador.navigate(['/inbox'])
              // localStorage.setItem('TOKEN', response.token);
              console.log(response);
              console.log('deu certo');
            },
            (error: HttpErrorResponse) => {
              this.mensagemErro = error.error.body; 
              console.log(error);
              console.log('deu pau');
            }
        );

    }
  }

}
