import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";


export const ROUTES: Routes = [
  {path: 'security', loadChildren: () => import('./security/security.module').then(m => m.SecurityModule)},
  {path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class UserModule {
}
