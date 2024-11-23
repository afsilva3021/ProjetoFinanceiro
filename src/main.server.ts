import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { AppRoutingModule } from './app/app.routes';
import { LoginComponent } from './app/login/login.component';
import { RouterModule } from '@angular/router';

NgModule({
    declarations: [
      AppComponent,
      LoginComponent,
      DashboardComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
  })




const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;

export class AppModule { }