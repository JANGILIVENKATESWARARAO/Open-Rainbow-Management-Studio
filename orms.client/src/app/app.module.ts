import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaveManagementComponent } from './modules/leavemanagement/leave-management/leave-management.component';


@NgModule({
    declarations: [AppComponent, LeaveManagementComponent],
    imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
        
],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
