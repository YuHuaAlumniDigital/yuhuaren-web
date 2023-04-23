import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {TableDirective} from './directive/table.directive';
import {HomeContentDirective} from './directive/home-content.directive';
import { DialogHeaderComponent } from './component/dialog-header/dialog-header.component';
import {ToolbarComponent} from "./component/toolbar/toolbar.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import { DialogComponent } from './component/dialog/dialog.component';
import { DialogFooterComponent } from './component/dialog-footer/dialog-footer.component';
import { DialogContentDirective } from './directive/dialog-content.directive';
import { HomeContentComponent } from './component/home-content/home-content.component';


@NgModule({
  declarations: [
    ToolbarComponent,
    TableDirective,
    HomeContentDirective,
    DialogHeaderComponent,
    DialogComponent,
    DialogFooterComponent,
    DialogContentDirective,
    HomeContentComponent
  ],
    exports: [
        ToolbarComponent,
        TableDirective,
        HomeContentDirective,
        DialogHeaderComponent,
        DialogComponent,
        HomeContentComponent,
    ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class SharedModule {
}
