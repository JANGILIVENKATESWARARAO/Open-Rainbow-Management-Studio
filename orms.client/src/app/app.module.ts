import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropDownComponent } from './common-ui/controls/drop-down/drop-down.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule, HttpClientModule,
        AppRoutingModule,
        DropDownComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
