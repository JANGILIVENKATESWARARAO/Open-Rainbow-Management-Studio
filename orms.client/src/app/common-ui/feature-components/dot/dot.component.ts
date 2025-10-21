import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DotComponent {
  @Input() label = "Text"
  @Input() labelColor: string = 'lightgreen'
  @Input() labelPosition: 'left' | 'right' = 'left';
  @Input() dotColor: string = "lightgreen"
  @Input() dotSize: 'small' | 'medium' | 'large' = 'small';

  getDotSize(dotSize: 'small' | 'medium' | 'large') {
    switch (dotSize) {
      case 'small':
        return { width: '8px', height: '8px' };
      case 'medium':
        return { width: '10px', height: '10px' };
      case 'large':
        return { width: '12px', height: '12px' };
      default:
        return { width: '8px', height: '8px' };
    }
  }
}
