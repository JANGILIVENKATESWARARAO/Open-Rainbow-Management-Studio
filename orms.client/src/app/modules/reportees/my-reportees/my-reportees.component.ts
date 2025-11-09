import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../common-ui/controls/button/button.component';


interface MyReportees{
  EmployeePhoto:string;
  employeeName:string;
  employeeId:string;
  employeeEmail:string;
  designation:string;
  department:string;
  workLocation:string;

}
@Component({
    selector: 'orms-my-reportees',
    templateUrl: './my-reportees.component.html',
    styleUrl: './my-reportees.component.css',
    imports: [ButtonComponent]
})
export class MyReporteesComponent {

  @Input() myReportees: MyReportees[] = [];
}
