import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlumniComponent} from "./alumni/alumni.component";
import {AlumniApplicationComponent} from "./alumni-application/alumni-application.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {AlumniListComponent} from "./alumni-list/alumni-list.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import { AlumniUploadFileDialogComponent } from './alumni-upload-file-dialog/alumni-upload-file-dialog.component';

export const ROUTES: Routes = [
  {path: '', component: AlumniComponent},
  {path: 'application', component: AlumniApplicationComponent},
]

@NgModule({
  declarations: [
    AlumniComponent,
    AlumniApplicationComponent,
    AlumniListComponent,
    AlumniUploadFileDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class AlumniModule { }
