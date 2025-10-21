import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-area',
  standalone: true,
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.css',
  imports: [CommonModule]
})
export class TextAreaComponent {
  @Input() label: string = 'Address';
  @Input() Placeholder: string = 'Enter your address';
  @Input() isRequired: boolean = true;
  @Input() showBorder: boolean = true;
}
