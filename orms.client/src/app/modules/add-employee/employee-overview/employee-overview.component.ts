import { Component } from '@angular/core';
import { CommonModule,NgIf, NgClass } from '@angular/common';
import { BasicInfoComponent } from '../basic-info/basic-info.component';
import { InnerInfoComponent } from '../employee-preview/inner-info/inner-info.component';
import { InnerContactComponent } from '../employee-preview/inner-contact/inner-contact.component';
import { InnerJobComponent } from '../employee-preview/inner-job/inner-job.component';
import { InnerEducationComponent } from '../employee-preview/inner-education/inner-education.component';
import { InnerWorkComponent } from '../employee-preview/inner-work/inner-work.component';
import { InnerOtherComponent } from '../employee-preview/inner-other/inner-other.component';
import { InnerSalaryComponent } from '../employee-preview/inner-salary/inner-salary.component';
import { InnerInsuranceComponent } from '../employee-preview/inner-insurance/inner-insurance.component';
import { EmployeePreviewDetailsComponent } from '../employee-preview/employee-preview-details/employee-preview-details.component';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { EmployeeDetailsInfoComponent } from '../employee-details-info/employee-details-info.component';

@Component({
  selector: 'app-employee-overview',
  templateUrl: './employee-overview.component.html',
  styleUrl: './employee-overview.component.css',
  imports: [CommonModule,BasicInfoComponent,InnerInfoComponent,NgIf,NgClass,InnerContactComponent,InnerJobComponent,InnerEducationComponent,InnerWorkComponent,InnerOtherComponent,InnerSalaryComponent,InnerInsuranceComponent,EmployeeDetailsComponent,EmployeeDetailsInfoComponent],
  standalone: true,
})
export class EmployeeOverviewComponent {
showInnerinfo: boolean = false;
showContactInfo: boolean = false;
showJobInfo: boolean = false;
showEducationInfo: boolean = false;
showWorkInfo: boolean = false;
showOtherInfo: boolean = false;
showSalaryInfo: boolean = false;
showInsuranceInfo: boolean = false;

innerinfo() {
  this.showInnerinfo = !this.showInnerinfo;
}



contactInfo() {
  this.showContactInfo = !this.showContactInfo;
}



jobInfo() {
  this.showJobInfo = !this.showJobInfo;
}



educationInfo() {
  this.showEducationInfo = !this.showEducationInfo;
}



workInfo() {
  this.showWorkInfo = !this.showWorkInfo;
}



otherInfo() {
  this.showOtherInfo = !this.showOtherInfo;
}



salaryInfo() {
  this.showSalaryInfo = !this.showSalaryInfo;
}



insuranceInfo() {
  this.showInsuranceInfo = !this.showInsuranceInfo;
}




}
