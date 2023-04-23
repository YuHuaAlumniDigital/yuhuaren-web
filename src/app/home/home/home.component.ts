import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectUrl} from "../../shared/store/selector/router.selector";
import {tap} from "rxjs";
import {routerNavigationAction, routerRequestAction} from "@ngrx/router-store";
import {Router} from "@angular/router";

@Component({
  selector: 'home',
  template: `
      <mat-sidenav-container class="home-container">
          <mat-sidenav mode="side" opened class="home-navbar primary-background">
              <home-navbar [activeRoute]="page$ | async" (selectRoute)="onRouteSelect($event)"/>
          </mat-sidenav>
          <mat-sidenav-content>
              <home-header class="home-header"/>
              <div class="mat-elevation-z3 content">
                  <router-outlet/>
              </div>
          </mat-sidenav-content>
      </mat-sidenav-container>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  page$ = this.store.select(selectUrl).pipe(
    tap(console.log)
  );

  constructor(private store:Store, private router: Router) {
  }

  onRouteSelect(route: String) {
    this.router.navigate([route]);
  }
}
