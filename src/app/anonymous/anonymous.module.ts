import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnonymousRoutingModule } from './anonymous-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AnonymousRoutingModule
  ]
})
export class AnonymousModule { }
