import { Component } from '@angular/core';

@Component({
  selector: 'app-members',
  template: `
    <home-content [title]="'Members'">
      <button action mat-icon-button matTooltip="Reload">
        <mat-icon> refresh</mat-icon>
      </button>
      <member-list content table></member-list>
      <mat-paginator content [length]="100"
                     [pageSize]="10"
                     [pageSizeOptions]="[5, 10, 25, 100]"
                     aria-label="Select page">
      </mat-paginator>
    </home-content>
  `,
  styleUrls: ['./members.component.scss']
})
export class MembersComponent {

}
