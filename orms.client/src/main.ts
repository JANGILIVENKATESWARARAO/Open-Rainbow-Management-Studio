import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { BasicInfoComponent } from './app/modules/add-employee/basic-info/basic-info.component';
import { ContactInfoComponent } from './app/modules/add-employee/contact-info/contact-info.component';
import { JobDetailsComponent } from './app/modules/add-employee/job-details/job-details.component';
import { EducationDetailsComponent } from './app/modules/add-employee/education-details/education-details.component';
import { InnerSalaryComponent } from './app/modules/add-employee/employee-preview/inner-salary/inner-salary.component';
import { InnerWorkComponent } from './app/modules/add-employee/employee-preview/inner-work/inner-work.component';
import { DocumentsUploadComponent } from './app/modules/add-employee/documents-upload/documents-upload.component';
import { InnerOtherComponent } from './app/modules/add-employee/employee-preview/inner-other/inner-other.component';
 
const routes: Routes = [
  { path: 'add-employee/basic-info', component: BasicInfoComponent },
  { path: 'add-employee/contact-info', component: ContactInfoComponent },
  { path: 'add-employee/job-info', component: JobDetailsComponent },
  { path: 'add-employee/education-info', component: EducationDetailsComponent },
  { path: 'add-employee/salary-info', component: InnerSalaryComponent },
  { path: 'add-employee/work-info', component: InnerWorkComponent },
  { path: 'add-employee/doc-info', component: DocumentsUploadComponent },
  { path: 'add-employee/other-info', component: InnerOtherComponent },
  { path: '', redirectTo: 'add-employee/basic-info', pathMatch: 'full' }
];
 
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
 
 