import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperComponent } from './Application/stepper/stepper.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BasicInfoComponent } from './modules/add-employee/basic-info/basic-info.component';
import { ContactInfoComponent } from './modules/add-employee/contact-info/contact-info.component';
import { DocumentsUploadComponent } from './modules/add-employee/documents-upload/documents-upload.component';
import { EducationDetailsComponent } from './modules/add-employee/education-details/education-details.component';
import { InsuranceDetailsComponent } from './modules/add-employee/insurance-details/insurance-details.component';
import { JobDetailsComponent } from './modules/add-employee/job-details/job-details.component';
import { BasicCardComponent } from './modules/basic-card/basic-card.component';
import { AdminHeaderComponent } from './modules/common-modules/admin-header/admin-header.component';
import { ButtonNavigationComponent } from './modules/common-modules/button-navigation/button-navigation.component';


@NgModule({
    declarations: [AppComponent],
  imports: [CommonModule, HttpClientModule, BasicInfoComponent, ContactInfoComponent, DocumentsUploadComponent, InsuranceDetailsComponent, JobDetailsComponent, EducationDetailsComponent, ButtonNavigationComponent, BasicCardComponent, AdminHeaderComponent, BasicCardComponent, RouterModule, StepperComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
