import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatIconModule, MatFormFieldModule } from '@angular/material';


import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
	MatFormFieldModule,
	FormsModule,
	ReactiveFormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
