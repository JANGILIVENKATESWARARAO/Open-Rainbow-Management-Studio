import { Component } from '@angular/core';
import { LabelValueComponent } from '../label-value/label-value.component';

@Component({
  selector: 'app-inner-education',
  templateUrl: './inner-education.component.html',
  styleUrl: './inner-education.component.css',
  standalone: true,
  imports:[LabelValueComponent]
})
export class InnerEducationComponent {

}
