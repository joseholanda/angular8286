import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

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

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  handleLogin(formLogin: NgForm) {
    if (formLogin.valid) {
      
      this.httpClient
        .post('http://localhost:3200/login', this.login)
        .subscribe(
            (response: any) => {
              localStorage.setItem('TOKEN', response.token);
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
