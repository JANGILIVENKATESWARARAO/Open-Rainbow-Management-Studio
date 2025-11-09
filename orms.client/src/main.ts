import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(CommonModule, HttpClientModule, AppRoutingModule)]
})
  .catch(err => console.error(err));
