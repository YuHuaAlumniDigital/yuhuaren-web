import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from './activities/activities.component';
import {RouterModule, Routes} from "@angular/router";
import {MatPaginatorModule} from "@angular/material/paginator";
import { ActivityListComponent } from './activity-list/activity-list.component';
import {MatTableModule} from "@angular/material/table";
import {SharedModule} from "../shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";

export const ROUTES: Routes = [
  {path: '', component: ActivitiesComponent}
]

@NgModule({
  declarations: [
    ActivitiesComponent,
    ActivityListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MatPaginatorModule,
    MatTableModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class ActivityModule { }
