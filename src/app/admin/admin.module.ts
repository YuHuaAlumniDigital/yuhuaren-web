import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminsComponent} from './admins/admins.component';
import {AdminListComponent} from './admin-list/admin-list.component';
import {RouterModule, Routes} from "@angular/router";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {SharedModule} from "../shared/shared.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {AdminFormComponent} from './admin-form/admin-form.component';
import {AdminDialogComponent} from './admin-dialog/admin-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";


export const ROUTES: Routes = [
  {path: '', component: AdminsComponent},
];

@NgModule({
  declarations: [
    AdminsComponent,
    AdminListComponent,
    AdminFormComponent,
    AdminDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MatPaginatorModule,
    MatTableModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule {
}
