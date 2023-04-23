import {Component, Input} from '@angular/core';

@Component({
  selector: 'dialog-header',
  template: `
    <mat-toolbar color="primary">
      <p>{{title}}</p>
      <span class="spacer"></span>
      <button mat-icon-button mat-dialog-close>
        <mat-icon>close</mat-icon>
      </button>
    </mat-toolbar>`
  ,
  styleUrls: ['./dialog-header.component.scss']
})
export class DialogHeaderComponent {
  @Input()
  title: string = '';


}
