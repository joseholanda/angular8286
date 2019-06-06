import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CmailFormGroupComponent } from './cmail-form-group/cmail-form-group.component';
import { CmailFormFieldDirective } from './cmail-form-group/cmail-form-field.directive';
import { RouterModule } from '@angular/router';
import { CmailListItemComponent } from './cmail-list-item/cmail-list-item.component';
// import { CmailFormGroupComponent } from './cmail-form-group/cmail-form-group.component';
// import { CmailFormFieldDirective } from './cmail-form-group/cmail-form-field.directive';

@NgModule({
  declarations: [HeaderComponent, CmailFormGroupComponent, CmailFormFieldDirective, CmailListItemComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [HeaderComponent, CmailFormGroupComponent, CmailFormFieldDirective, CmailListItemComponent]
})
export class SharedComponentsModule { }
