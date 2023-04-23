import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberComponent } from './member/member.component';
import {RouterModule, Routes} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { MembersComponent } from './members/members.component';
import {SharedModule} from "../shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";

export const ROUTES: Routes = [
  {path: '', component: MembersComponent},
];

@NgModule({
  declarations: [
    MemberListComponent,
    MemberComponent,
    MembersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MatTableModule,
    MatPaginatorModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class MemberModule { }
