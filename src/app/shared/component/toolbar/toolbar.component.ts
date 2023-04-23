import { Component } from '@angular/core';

@Component({
  selector: 'toolbar',
  template: `
    <mat-toolbar>
      <ng-content select="[title]"/>
      <span class="spacer"></span>
      <ng-content></ng-content>
    </mat-toolbar>
  `,
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

}
