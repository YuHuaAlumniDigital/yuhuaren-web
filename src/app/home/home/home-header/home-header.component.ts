import {Component, Input} from '@angular/core';

@Component({
  selector: 'home-header',
  template: `
    <mat-toolbar color="primary">
      <span class="spacer"></span>
      <user-panel/>
    </mat-toolbar>
  `,
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent {

}
