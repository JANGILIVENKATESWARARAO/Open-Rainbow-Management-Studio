import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PasswordBoxComponent } from './common-ui/controls/password-box/password-box.component';
import { JobDetailsComponent } from './modules/add-employee/job-details/job-details.component';
import { ButtonNavigationComponent } from './common-ui/controls/button-navigation/button-navigation.component';


@NgModule({
    declarations: [AppComponent, JobDetailsComponent, ButtonNavigationComponent],
    imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
        
],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
