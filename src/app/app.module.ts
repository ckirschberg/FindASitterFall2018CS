import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Simon2Component } from './home/simon2/simon2.component';
import { HenrikComponent } from './home/henrik/henrik.component';
import { PortalComponent } from './portal/portal.component';
import { SittersListComponent } from './sitters-list/sitters-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { DisplaySitterComponent } from './portal/display-sitter/display-sitter.component';
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { IAppState } from './store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';

import { rootReducer } from './store'; // Added this to get the root reducer

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    RegisterComponent,
    PageNotFoundComponent,
    Simon2Component,
    HenrikComponent,
    PortalComponent,
    SittersListComponent,
    DisplaySitterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatCardModule, MatButtonModule,
    NgReduxModule, NgReduxRouterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  // Sets up redux in our application.
  constructor(private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter,) {
   
    this.ngRedux.configureStore(
      rootReducer, {});
 
      ngReduxRouter.initialize(/* args */);   
  }
 
 }
