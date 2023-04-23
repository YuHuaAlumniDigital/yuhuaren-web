import {Component, ComponentRef, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AdminDialogComponent} from "../admin-dialog/admin-dialog.component";

@Component({
  selector: 'app-admins',
  template: `
    <home-content [title]="'Admins'">
      <button action mat-icon-button matTooltip="Add new admin" (click)="openAddDialog()">
        <mat-icon> add </mat-icon>
      </button>
      <button action mat-icon-button matTooltip="Reload">
        <mat-icon> refresh</mat-icon>
      </button>
            <admin-list content table>

            </admin-list>

            <mat-paginator content [length]="100"
                           [pageSize]="10"
                           [pageSizeOptions]="[5, 10, 25, 100]"
                           aria-label="Select page">
            </mat-paginator>
    </home-content>
  `,
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent {

  constructor(private dialog: MatDialog) {}

  openAddDialog() {
    this.dialog.open(AdminDialogComponent, {disableClose: true, height: '600px', width: '600px'});
  }
}
