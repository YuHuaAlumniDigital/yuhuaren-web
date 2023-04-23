import { Component } from '@angular/core';
import {AdminDialogComponent} from "../../admin/admin-dialog/admin-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {AlumniUploadFileDialogComponent} from "../alumni-upload-file-dialog/alumni-upload-file-dialog.component";

@Component({
  selector: 'alumni',
  template: `
    <home-content [title]="'Alumni'">
      <button action mat-icon-button matTooltip="Upload file" (click)="openAddFileDialog()">
        <mat-icon>upload</mat-icon>
      </button>
      <button action mat-icon-button matTooltip="Add New Alumni">
        <mat-icon> add</mat-icon>
      </button>
      <button action mat-icon-button matTooltip="Reload">
        <mat-icon> refresh</mat-icon>
      </button>
      <alumni-list content table></alumni-list>
      <mat-paginator content [length]="100"
                     [pageSize]="10"
                     [pageSizeOptions]="[5, 10, 25, 100]"
                     aria-label="Select page">
      </mat-paginator>
    </home-content>
  `,
  styleUrls: ['./alumni.component.scss']
})
export class AlumniComponent {

  constructor(private dialog: MatDialog) {}
  openAddFileDialog() {
    this.dialog.open(AlumniUploadFileDialogComponent, {disableClose: true, height: '600px', width: '600px'});
  }
}
