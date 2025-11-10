import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInfoComponent } from './modules/add-employee/basic-info/basic-info.component';
import { ContactInfoComponent } from './modules/add-employee/contact-info/contact-info.component';
import { DocumentsUploadComponent } from './modules/add-employee/documents-upload/documents-upload.component';
import { EducationDetailsComponent } from './modules/add-employee/education-details/education-details.component';
import { InnerOtherComponent } from './modules/add-employee/employee-preview/inner-other/inner-other.component';
import { InnerSalaryComponent } from './modules/add-employee/employee-preview/inner-salary/inner-salary.component';
import { InnerWorkComponent } from './modules/add-employee/employee-preview/inner-work/inner-work.component';
import { JobDetailsComponent } from './modules/add-employee/job-details/job-details.component';

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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
