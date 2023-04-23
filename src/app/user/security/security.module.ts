import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { SecurityComponent } from './security/security.component';
import {SharedModule} from "../../shared/shared.module";
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


export const ROUTES: Routes = [
  { path: '', component: SecurityComponent}
];

@NgModule({
  declarations: [
    SecurityComponent,
    ChangePasswordFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class SecurityModule { }
