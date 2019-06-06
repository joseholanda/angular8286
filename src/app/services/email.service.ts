import { Injectable, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Email } from '../models/email';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  api = 'http://localhost:3200/emails';
  // cabecalho = new HttpHeaders({ 'Authorization': localStorage.getItem('TOKEN')});

  constructor(private http: HttpClient) { }

  getCabecalho() {
    return new HttpHeaders({ 'Authorization': localStorage.getItem('TOKEN')});
  }

  listar() {
    
    return this.http
            .get(this.api, {headers: this.getCabecalho()})
            .pipe<Email[]>(
              map(
                (response: any[]) => {
                  return response
                            .map(
                              emailApi => new Email({
                                destinatario: emailApi.to,
                                assunto: emailApi.subject,
                                conteudo: emailApi.content,
                                dataDeEnvio: emailApi.created_at
                              })
                            )
                }
              )
            )

  }

  enviar({destinatario, assunto, conteudo}) {
    const emailParaApi = { 
      to: destinatario,
      subject: assunto,
      content: conteudo
    };
    
    return this.http
        .post(this.api, emailParaApi, {headers: this.getCabecalho()})
        .pipe<Email>(
          map(
            (emailApi:any) => {
              return new Email({
                destinatario: emailApi.to,
                assunto: emailApi.subject,
                conteudo: emailApi.content,
                dataDeEnvio: emailApi.created_at
              })
            }
          )
        )
  }
}
