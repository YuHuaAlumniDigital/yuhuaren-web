import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  date: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Facebook Live', date: new Date()},
];
@Component({
  selector: 'app-notification-list',
  template: `
    <table mat-table [dataSource]="dataSource">

      <ng-container matColumnDef="position">
        <th mat-header-cell *matHeaderCellDef> No. </th>
        <td mat-cell *matCellDef="let element"> {{element.position}} </td>
      </ng-container>

      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef> Name </th>
        <td mat-cell *matCellDef="let element"> {{element.name}} </td>
      </ng-container>

      <ng-container matColumnDef="date">
        <th mat-header-cell *matHeaderCellDef> Date </th>
        <td mat-cell *matCellDef="let element"> {{element.date | date}} </td>
      </ng-container>

      <ng-container matColumnDef="actions">
        <th mat-header-cell *matHeaderCellDef></th>
        <td mat-cell *matCellDef="let element">
          <button mat-icon-button matTooltip="delete" (click)="onDelete(element)">
            <mat-icon>delete</mat-icon>
          </button>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  `,
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {

  displayedColumns: string[] = ['position', 'name', 'date', 'actions'];
  dataSource = ELEMENT_DATA;

  onDelete(element: PeriodicElement) {

  }
}
