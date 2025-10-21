import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordBoxComponent } from './common-ui/controls/password-box/password-box.component';
import { TempLoginCredentialsComponent } from './modules/temp-login-credentials/temp-login-credentials.component';


@NgModule({
    declarations: [AppComponent, PasswordBoxComponent, TempLoginCredentialsComponent],
    imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
        
],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
