import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../../common-ui/controls/button/button.component';
import { InnerInfoComponent } from '../inner-info/inner-info.component';
import { InnerContactComponent } from '../inner-contact/inner-contact.component';
import { InnerEducationComponent } from '../inner-education/inner-education.component';
import { InnerJobComponent } from '../inner-job/inner-job.component';
import { InnerWorkComponent } from '../inner-work/inner-work.component';
import { InnerOtherComponent } from '../inner-other/inner-other.component';
import { InnerSalaryComponent } from '../inner-salary/inner-salary.component';
import { InnerDocumentComponent } from '../inner-document/inner-document.component';
import { InnerInsuranceComponent } from '../inner-insurance/inner-insurance.component';
import { InnerContentComponent } from "../../inner-content/inner-content.component";
import { EmployeeDetails } from '../../../../common-ui/assests/view-models/common-view-models';
@Component({
  selector: 'app-employee-preview-details',
  templateUrl: './employee-preview-details.component.html',
  styleUrls: ['./employee-preview-details.component.css'],
  standalone: true,
  imports: [ButtonComponent, InnerInfoComponent, InnerContactComponent, InnerJobComponent, InnerEducationComponent, InnerWorkComponent, InnerOtherComponent, InnerSalaryComponent, InnerDocumentComponent, InnerInsuranceComponent, InnerContentComponent]
})
export class EmployeePreviewDetailsComponent {
  @Input() employeeDetails?: EmployeeDetails;
  
  printDetails() {
    window.print();
  }

  exportDetails() {
    console.log('Exporting employee details...');
  }

  closePreview() {
    console.log('Closing preview...');
  }
}
