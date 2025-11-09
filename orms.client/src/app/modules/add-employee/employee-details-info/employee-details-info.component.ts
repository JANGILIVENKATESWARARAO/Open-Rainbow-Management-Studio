import { Component, Input, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { InnerInfoComponent } from '../employee-preview/inner-info/inner-info.component';
import { InnerEducationComponent } from '../employee-preview/inner-education/inner-education.component';
import { InnerWorkComponent } from '../employee-preview/inner-work/inner-work.component';
import { InnerOtherComponent } from '../employee-preview/inner-other/inner-other.component';
import { InnerSalaryComponent } from '../employee-preview/inner-salary/inner-salary.component';
import { InnerInsuranceComponent } from '../employee-preview/inner-insurance/inner-insurance.component';
import { InnerContactComponent } from '../employee-preview/inner-contact/inner-contact.component';
import { InnerJobComponent } from '../employee-preview/inner-job/inner-job.component';


@Component({
    selector: 'app-employee-details-info',
    templateUrl: './employee-details-info.component.html',
    styleUrl: './employee-details-info.component.css',
    imports: [InnerInfoComponent, InnerContactComponent, InnerJobComponent, InnerEducationComponent, InnerWorkComponent, InnerOtherComponent, InnerSalaryComponent, InnerInsuranceComponent]
})

export class EmployeeDetailsInfoComponent {


@Input() autoCloseExpansion: boolean = true; 
openDivIdList: Set<string> = new Set(); 
openDivId: string | null = null; 

openExpansion(divId: string): void {
  if (this.autoCloseExpansion) {
    this.openDivId = this.openDivId === divId ? null : divId;
  } else {
    if (this.openDivIdList.has(divId)) {
      this.openDivIdList.delete(divId);
    } else {
      this.openDivIdList.add(divId);
    }
  }
}




}