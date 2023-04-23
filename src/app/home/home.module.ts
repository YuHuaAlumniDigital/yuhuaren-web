import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeHeaderComponent} from './home/home-header/home-header.component';
import {HomeNavbarComponent} from './home/home-navbar/home-navbar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTreeModule} from "@angular/material/tree";
import {MatIconModule} from "@angular/material/icon";
import {MatRippleModule} from "@angular/material/core";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {UserPanelComponent} from './home/home-header/user-panel/user-panel.component';
import {SharedModule} from "../shared/shared.module";
import {CdkConnectedOverlay, CdkOverlayOrigin} from "@angular/cdk/overlay";

export const ROUTES: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'member'},
      {path: 'user', loadChildren: () => import('../user/user.module').then(m => m.UserModule)},
      {path: 'admin', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)},
      {path: 'member', loadChildren: () => import('../member/member.module').then(m => m.MemberModule)},
      {path: 'activity', loadChildren: () => import('../activity/activity.module').then(m => m.ActivityModule)},
      {path: 'notification', loadChildren: () => import('../notification/notification.module').then(m => m.NotificationModule)},
      {path: 'alumni', loadChildren: () => import('../alumni/alumni.module').then(m => m.AlumniModule)},
    ]
  },
]

@NgModule({
    declarations: [
        HomeComponent,
        HomeHeaderComponent,
        HomeNavbarComponent,
        UserPanelComponent
    ],
    exports: [
        HomeNavbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        MatSidenavModule,
        MatToolbarModule,
        MatTreeModule,
        MatIconModule,
        MatRippleModule,
        MatMenuModule,
        MatButtonModule,
        SharedModule,
        CdkConnectedOverlay,
        CdkOverlayOrigin
    ]
})
export class HomeModule {
}
