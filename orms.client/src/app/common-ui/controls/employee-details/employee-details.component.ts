import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { InnerInfoComponent } from '../inner-info/inner-info.component';
import { InnerContactComponent } from '../inner-contact/inner-contact.component';
import { InnerEducationComponent } from '../inner-education/inner-education.component';
import { InnerJobComponent } from '../inner-job/inner-job.component';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
  standalone: true,
  imports: [ButtonComponent,InnerInfoComponent,InnerContactComponent,InnerJobComponent,InnerEducationComponent]
})
export class EmployeeDetailsComponent {
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
