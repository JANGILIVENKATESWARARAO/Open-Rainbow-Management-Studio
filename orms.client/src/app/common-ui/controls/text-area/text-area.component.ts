import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  standalone: true,
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
  imports: [CommonModule, FormsModule]
})
export class TextAreaComponent {
  @Input() label: string = 'Address';
  @Input() Placeholder: string = 'Enter your address';
  @Input() isRequired: boolean = true;
  @Input() showBorder: boolean = true;
  @Input() maxChars: number = 2000;
  @Input() showCharCount: boolean = true;
  inputText: string = '';
  currentCharCount: number = this.maxChars;

  updateCharCount() {
    if (!this.inputText) {
      this.currentCharCount = this.maxChars;
      return;
    }
    this.currentCharCount = this.inputText.length;
    if (this.currentCharCount > this.maxChars) {
      this.inputText = this.inputText.slice(0, this.maxChars);
      this.currentCharCount = this.maxChars;
    }
  }
}

