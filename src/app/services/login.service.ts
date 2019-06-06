import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {

  api = 'http://localhost:3200/login';

  constructor(private http: HttpClient) { }

  logar(dadosLogin) {
    
    console.log('TOKEN ATUAL: ' + localStorage.getItem('TOKEN'));
    
    
    return  this.http
                .post(this.api, dadosLogin)
                .pipe(
                  map( (response:any ) => {
                    console.log('NOVO TOKEN: ' + response.token);
                    localStorage.setItem('TOKEN', response.token);
                    localStorage.setItem('email', response.email);
                    localStorage.setItem('avatar', response.avatarUrl);
                    localStorage.setItem('nome', response.name);
                    return response;
                  })
                )

  }
}
