import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StepperComponent } from './Application/stepper/stepper.component';
import { BasicInfoComponent } from './modules/add-employee/basic-info/basic-info.component';
import { ContactInfoComponent } from './modules/add-employee/contact-info/contact-info.component';
import { DocumentsUploadComponent } from './modules/add-employee/documents-upload/documents-upload.component';
import { EducationDetailsComponent } from './modules/add-employee/education-details/education-details.component';
import { InsuranceDetailsComponent } from './modules/add-employee/insurance-details/insurance-details.component';
import { JobDetailsComponent } from './modules/add-employee/job-details/job-details.component';
import { BasicCardComponent } from './modules/basic-card/basic-card.component';
import { AdminHeaderComponent } from './modules/common-modules/admin-header/admin-header.component';
import { ButtonNavigationComponent } from './modules/common-modules/button-navigation/button-navigation.component';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true,
    imports: [CommonModule, HttpClientModule, BasicInfoComponent, ContactInfoComponent, DocumentsUploadComponent, InsuranceDetailsComponent, JobDetailsComponent, EducationDetailsComponent, ButtonNavigationComponent, BasicCardComponent, AdminHeaderComponent, BasicCardComponent, RouterModule, StepperComponent],
})
export class AppComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.getForecasts();
  }

  getForecasts() {
    this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'orms.client';
}
