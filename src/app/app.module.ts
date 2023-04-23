import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {AuthModule} from "./auth/auth.module";
import {HomeModule} from "./home/home.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const ROUTES: Routes = []

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule,
    HomeModule,
    BrowserAnimationsModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({
      router: routerReducer,
    }, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
