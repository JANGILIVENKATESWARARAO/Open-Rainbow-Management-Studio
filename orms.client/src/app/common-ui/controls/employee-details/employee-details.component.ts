import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
  standalone: true,
  imports: [ButtonComponent]
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
