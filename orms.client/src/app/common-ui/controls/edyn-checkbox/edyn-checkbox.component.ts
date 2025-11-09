import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
    selector: 'app-edyn-checkbox',
    templateUrl: './edyn-checkbox.component.html',
    styleUrl: './edyn-checkbox.component.css',
    imports: [CommonModule]
})
export class EdynCheckboxComponent {
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;
  @Input() labelPosition: 'left' | 'right' = 'right';
  @Input() required: boolean = false;
  @Input() label: string = '';
}
