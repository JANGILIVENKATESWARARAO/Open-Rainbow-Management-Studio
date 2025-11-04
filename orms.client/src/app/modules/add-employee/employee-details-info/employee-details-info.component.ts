import { Component } from '@angular/core';
import { CommonModule,NgIf, NgClass } from '@angular/common';
import { InnerInfoComponent } from '../employee-preview/inner-info/inner-info.component';
import { ContactInfoComponent } from '../contact-info/contact-info.component';
import { JobDetailsComponent } from '../job-details/job-details.component';
import { InnerEducationComponent } from '../employee-preview/inner-education/inner-education.component';
import { InnerWorkComponent } from '../employee-preview/inner-work/inner-work.component';
import { InnerOtherComponent } from '../employee-preview/inner-other/inner-other.component';
import { InnerSalaryComponent } from '../employee-preview/inner-salary/inner-salary.component';
import { InnerInsuranceComponent } from '../employee-preview/inner-insurance/inner-insurance.component';


@Component({
  selector: 'app-employee-details-info',
  templateUrl: './employee-details-info.component.html',
  styleUrl: './employee-details-info.component.css',
  standalone: true,
  imports: [InnerInfoComponent,ContactInfoComponent,JobDetailsComponent,InnerEducationComponent,InnerWorkComponent,InnerOtherComponent,InnerSalaryComponent,InnerInsuranceComponent,NgIf],
  
})

export class EmployeeDetailsInfoComponent {
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



