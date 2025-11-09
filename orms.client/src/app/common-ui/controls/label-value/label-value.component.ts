
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-label-value',
    imports: [],
    templateUrl: './label-value.component.html',
    styleUrls: ['./label-value.component.css']
})
export class LabelValueComponent {
  @Input() label?: string = 'Employee ID';
  @Input() value: string = 'EMP7185';
  @Input() isRequired: boolean = true;
}