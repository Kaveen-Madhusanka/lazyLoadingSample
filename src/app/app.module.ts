import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { LoginFormComponent } from './public/login/login-form/login-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import { MainMenuComponent } from './private/main-menu/main-menu.component';
import { MainMenuItemsComponent } from './private/main-menu/main-menu-items/main-menu-items.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    MainMenuComponent,
    MainMenuItemsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
