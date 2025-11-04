import { Component, Input } from '@angular/core';
import { ChipComponent } from '../../../../common-ui/controls/chip/chip.component';
import { CommonModule, NgIf, NgClass } from '@angular/common';
import { JobDetailsComponent } from '../../job-details/job-details.component';
import { BasicInfoComponent } from '../../basic-info/basic-info.component';
import { InnerContactComponent } from '../../employee-preview/inner-contact/inner-contact.component';
import { InnerContentComponent } from '../../inner-content/inner-content.component';

@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrl: './employeeslist.component.css',
  standalone: true,
  imports: [
    ChipComponent,
    BasicInfoComponent,
    NgIf,
    InnerContactComponent,
    InnerContentComponent,
    NgClass,
  ],
})
export class EmployeeslistComponent {
  @Input() EmployeeName: string = 'Ganesh';
  @Input() Employeerole: string = 'Intern';
  @Input() EmployeeDesig: string = 'Engineering';
  @Input() EmployeePhoto: string =
    'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735';
  @Input() status: 'Active' | 'Inactive' = 'Inactive';
  @Input() Date: string = '22 Aug 2025';

  showBasicInfo: boolean = false;

  basicinfo() {
    this.showBasicInfo = !this.showBasicInfo;
  }
}
