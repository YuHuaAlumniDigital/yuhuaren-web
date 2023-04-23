import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";

export const ROUTES: Routes = [
  {path: '', component: NotificationsComponent}
]

@NgModule({
  declarations: [
    NotificationsComponent,
    NotificationListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class NotificationModule { }
