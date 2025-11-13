
import { Component, Input } from '@angular/core';
import { IconComponent } from '../../feature-components/icon/icon.component';


@Component({
    selector: 'orms-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css'],
    imports: [IconComponent]
})
export class SearchBarComponent {
  @Input() placeholderText: string = 'Search employees by name, email, position, or department...';
  @Input() showBorder: boolean = true;
  @Input() borderColor: string = '#2563eb';
  @Input() iconPosition: 'left' | 'right' = 'right';
  @Input() showIcon: boolean = true; 
}
