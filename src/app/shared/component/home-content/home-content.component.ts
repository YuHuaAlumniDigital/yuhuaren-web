import {Component, Input} from '@angular/core';

@Component({
  selector: 'home-content',
  template: `
    <div homeContent>
      <toolbar>
        <p title>{{title}}</p>
        <ng-content select="[action]"></ng-content>
      </toolbar>
      <ng-content select="[content]"></ng-content>
    </div>
  `,
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent {
  @Input()
  title: string = '';

}
