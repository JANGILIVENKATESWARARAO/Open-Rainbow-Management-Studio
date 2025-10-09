import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-text-box',
  standalone: true,
  templateUrl: './text-box.component.html',
  styleUrl: './text-box.component.css',
  imports: [CommonModule]
})
export class TextBoxComponent {
  @Input() label: string = 'Full Name';
    @Input() placeHolder: string = 'Enter full name';
    @Input() isRequired: boolean = true;

}
