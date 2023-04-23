import { Component } from '@angular/core';

@Component({
  selector: 'user-panel',
  template: `
      <div class="user-panel">
          <mat-icon>person</mat-icon>
          <div class="user-info">
              <span class="name">Sum Yin Chuang</span>
              <span class="role">Super Admin</span>
          </div>
          <button mat-icon-button class="menu-button" [matMenuTriggerFor]="menu">
              <mat-icon>more_vert</mat-icon>
          </button>
          <mat-menu #menu="matMenu">
              <button mat-menu-item>
                  <span>Profile</span>
              </button>
              <button mat-menu-item>
                  <span>Security</span>
              </button>
              <button mat-menu-item>
                  <span>Logout</span>
              </button>
          </mat-menu>
      </div>
  `,
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent {

}
