import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(private roteador: Router) {}

  canActivate(): boolean {

    if (localStorage.getItem('TOKEN')) {
      return true;
    }

    this.roteador.navigate(['']);
    return false;
  }
  
}
