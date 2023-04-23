import { Component } from '@angular/core';

@Component({
  selector: 'app-alumni-application',
  template: `
    <home-content [title]="'Alumni Applications'">
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
  styleUrls: ['./alumni-application.component.scss']
})
export class AlumniApplicationComponent {

}
