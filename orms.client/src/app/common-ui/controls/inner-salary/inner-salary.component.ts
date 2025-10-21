import { Component } from '@angular/core';
import { LabelValueComponent } from '../label-value/label-value.component';

@Component({
  selector: 'app-inner-salary',
  templateUrl: './inner-salary.component.html',
  styleUrl: './inner-salary.component.css',
  standalone: true,
  imports:[LabelValueComponent]
})
export class InnerSalaryComponent {

}
