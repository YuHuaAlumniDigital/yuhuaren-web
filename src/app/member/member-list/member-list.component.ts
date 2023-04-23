import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  email: string;
  phoneNumber: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Sum Yin Chuang', email: "yinchuang96@gmail.com", phoneNumber: '014-3600282'},
];

@Component({
  selector: 'member-list',
  template: `
    <table mat-table [dataSource]="dataSource" >

      <ng-container matColumnDef="position">
        <th mat-header-cell *matHeaderCellDef> No. </th>
        <td mat-cell *matCellDef="let element"> {{element.position}} </td>
      </ng-container>

      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef> Name </th>
        <td mat-cell *matCellDef="let element"> {{element.name}} </td>
      </ng-container>

      <ng-container matColumnDef="email">
        <th mat-header-cell *matHeaderCellDef> Email </th>
        <td mat-cell *matCellDef="let element"> {{element.email}} </td>
      </ng-container>

      <ng-container matColumnDef="phoneNumber">
        <th mat-header-cell *matHeaderCellDef> Mobile. No </th>
        <td mat-cell *matCellDef="let element"> {{element.phoneNumber}} </td>
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
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent {
  displayedColumns: string[] = ['position', 'name', 'email', 'phoneNumber', 'actions'];
  dataSource = ELEMENT_DATA;

  onDelete(element: PeriodicElement) {

  }
}
