import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.css'],
  standalone:true,
  imports: [CommonModule]
})
export class DotComponent {
  @Input() label = 'Text';
  @Input() labelColor: string = 'lightgreen';
  @Input() labelPosition: 'left' | 'right' = 'left';
  @Input() dotColor: string = 'red';
}
