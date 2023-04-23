import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  template: `
    <home-content [title]="'Activities'">
      <button action mat-icon-button matTooltip="Add New Activity">
        <mat-icon> add</mat-icon>
      </button>
      <button action mat-icon-button matTooltip="Reload">
        <mat-icon> refresh</mat-icon>
      </button>
      <activity-list content table></activity-list>

      <mat-paginator content [length]="100"
                     [pageSize]="10"
                     [pageSizeOptions]="[5, 10, 25, 100]"
                     aria-label="Select page">
      </mat-paginator>
    </home-content>
  `,
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {

}
