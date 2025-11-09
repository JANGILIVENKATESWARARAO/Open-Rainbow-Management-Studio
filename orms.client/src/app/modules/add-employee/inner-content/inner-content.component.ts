import { Component, Input } from '@angular/core';
import { InnerInfoComponent } from '../employee-preview/inner-info/inner-info.component';
import { InnerContactComponent } from '../employee-preview/inner-contact/inner-contact.component';
import { InnerDocumentComponent } from '../employee-preview/inner-document/inner-document.component';
import { InnerEducationComponent } from '../employee-preview/inner-education/inner-education.component';
import { InnerInsuranceComponent } from '../employee-preview/inner-insurance/inner-insurance.component';
import { InnerJobComponent } from '../employee-preview/inner-job/inner-job.component';
import { InnerOtherComponent } from '../employee-preview/inner-other/inner-other.component';
import { InnerSalaryComponent } from '../employee-preview/inner-salary/inner-salary.component';
import { InnerWorkComponent } from '../employee-preview/inner-work/inner-work.component';
import { EmployeeDetails } from '../../../common-ui/assests/view-models/common-view-models';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-inner-content',
    templateUrl: './inner-content.component.html',
    styleUrl: './inner-content.component.css',
    imports: [InnerInfoComponent, InnerContactComponent, InnerJobComponent, InnerEducationComponent, InnerWorkComponent, InnerOtherComponent, InnerSalaryComponent, InnerDocumentComponent, InnerInsuranceComponent]
})
export class InnerContentComponent {
  @Input() employeeDetails?: EmployeeDetails
}
