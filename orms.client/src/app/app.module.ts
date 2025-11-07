import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [AppComponent],
    imports: [
    CommonModule, HttpClientModule,
    AppRoutingModule
        
],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
