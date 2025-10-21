import { Component } from '@angular/core';
import { LabelValueComponent } from '../label-value/label-value.component';

@Component({
  selector: 'app-inner-info',
  templateUrl: './inner-info.component.html',
  styleUrl: './inner-info.component.css',
  standalone: true,
  imports:[LabelValueComponent]
})
export class InnerInfoComponent {

}
