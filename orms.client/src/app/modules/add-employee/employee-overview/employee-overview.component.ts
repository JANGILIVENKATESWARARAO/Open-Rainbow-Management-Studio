import { Component } from '@angular/core';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { EmployeeDetailsInfoComponent } from '../employee-details-info/employee-details-info.component';

@Component({
  selector: 'app-employee-overview',
  templateUrl: './employee-overview.component.html',
  styleUrl: './employee-overview.component.css',
  imports: [EmployeeDetailsComponent,EmployeeDetailsInfoComponent],
  standalone: true,
})
export class EmployeeOverviewComponent {



}
