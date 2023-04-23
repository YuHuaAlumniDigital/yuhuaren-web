import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  template: `
    <home-content [title]="'Notifications'">
      <button action mat-icon-button matTooltip="Add New Notification">
        <mat-icon> add</mat-icon>
      </button>
      <button action mat-icon-button matTooltip="Reload">
        <mat-icon> refresh</mat-icon>
      </button>
      <app-notification-list content table></app-notification-list>
      <mat-paginator content [length]="100"
                     [pageSize]="10"
                     [pageSizeOptions]="[5, 10, 25, 100]"
                     aria-label="Select page">
      </mat-paginator>
    </home-content>
  `,
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {

}
