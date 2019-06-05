import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';

const rotasLogin: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rotasLogin)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }
