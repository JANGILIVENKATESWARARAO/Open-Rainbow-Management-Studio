import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
  standalone: true,
})
export class EmployeeDetailsComponent {
  employee = {
    name: 'Arjuna Sivam Chandhran',
    designation: 'Desig1',
    id: 9203,
    email: 'arjunasivam@gmail.com',
    gender: 'Male',
    department: 'Dept1',
    doj: '14/06/1997',
    location: 'Head Office',
  };
}
