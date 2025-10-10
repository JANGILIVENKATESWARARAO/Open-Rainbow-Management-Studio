import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  standalone: true,
  imports: [CommonModule]
})
export class ButtonComponent {
  @Input() text: string = 'text';
  @Input() bgColor: string = 'white';
  @Input() color: string = 'red';
  @Input() hoverBGColor: string = 'red';
  @Input() hoverColor: string = 'black';
  @Input() borderRadius: number = 5;
  @Input() borderColor: string = 'blue';
  @Input() showBorder: boolean = true;

  isHovered: boolean = false;
}
