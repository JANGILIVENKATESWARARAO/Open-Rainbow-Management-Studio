import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-number-box',
  templateUrl: './number-box.component.html',
  styleUrl: './number-box.component.css',
  imports: [CommonModule],
  standalone: true
})
export class NumberBoxComponent {
 @Input() label: string = 'Casual';
 @Input() isRequired: boolean = true;
}
