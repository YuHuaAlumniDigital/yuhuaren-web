import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from "@angular/router";
import { LoginFormComponent } from './login-form/login-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";

export const ROUTES: Routes = [
  {
    path: '', component: LoginComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
