import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../common-ui/controls/button/button.component';

@Component({
  selector: 'app-my-reportees',
  templateUrl: './my-reportees.component.html',
  styleUrl: './my-reportees.component.css',
  standalone: true,
  imports: [ButtonComponent],
})
export class MyReporteesComponent {

  @Input() EmployeePhoto: string =
      'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735';
  @Input() employeeName: string = 'Arjuna Sivam Chandhran';
  @Input() employeeId: string = '9203';
  @Input() employeeEmail: string = 'arjunasiv@gmail.com';
  @Input() designation: string = 'Desig1';
  @Input() department: string = 'Dept1';
  @Input() workLocation: string = 'Head Office';
}
