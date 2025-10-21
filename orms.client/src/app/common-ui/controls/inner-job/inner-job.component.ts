import { Component } from '@angular/core';
import { LabelValueComponent } from '../label-value/label-value.component';
import { CountWidgetComponent } from '../../feature-components/count-widget/count-widget.component';

@Component({
  selector: 'app-inner-job',
  templateUrl: './inner-job.component.html',
  styleUrl: './inner-job.component.css',
  standalone: true,
  imports:[LabelValueComponent, CountWidgetComponent]
})
export class InnerJobComponent {

}
