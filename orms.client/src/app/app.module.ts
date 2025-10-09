import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicInfoComponent } from "./modules/add-employee/basic-info/basic-info.component";


@NgModule({
    declarations: [AppComponent],
    imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    BasicInfoComponent
],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
