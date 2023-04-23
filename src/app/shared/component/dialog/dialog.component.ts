import {Component, Input} from '@angular/core';

@Component({
  selector: 'dialog-template',
  template: `
    <dialog-header [title]="title"/>
    <div dialog-content>
      <ng-content select="[content]"></ng-content>
    </div>

    <dialog-footer></dialog-footer>

  `,
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Input()
  title: string = '';
}
