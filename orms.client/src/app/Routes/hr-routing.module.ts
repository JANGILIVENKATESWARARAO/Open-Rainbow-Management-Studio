import { Routes } from '@angular/router';
import { ContactInfoComponent } from '../modules/add-employee/contact-info/contact-info.component';
import { BasicInfoComponent } from '../modules/add-employee/basic-info/basic-info.component';
import { JobDetailsComponent } from '../modules/add-employee/job-details/job-details.component';
import { EducationDetailsComponent } from '../modules/add-employee/education-details/education-details.component';
import { InnerSalaryComponent } from '../modules/add-employee/employee-preview/inner-salary/inner-salary.component';
import { InnerWorkComponent } from '../modules/add-employee/employee-preview/inner-work/inner-work.component';
import { DocumentsUploadComponent } from '../modules/add-employee/documents-upload/documents-upload.component';
import { InnerOtherComponent } from '../modules/add-employee/employee-preview/inner-other/inner-other.component';
import { HomeComponent } from '../modules/application-layer/layout/home/home.component';

export const hr_routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'basic-info', component: BasicInfoComponent },
      { path: 'contact-info', component: ContactInfoComponent },
      { path: 'job-info', component: JobDetailsComponent },
      { path: 'education-info', component: EducationDetailsComponent },
      { path: 'salary-info', component: InnerSalaryComponent },
      { path: 'work-info', component: InnerWorkComponent },
      { path: 'doc-info', component: DocumentsUploadComponent },
      { path: 'other-info', component: InnerOtherComponent },
      //  { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'education-info', pathMatch: 'full' },
    ],
  },
];
export class HrRoutingModule {}
