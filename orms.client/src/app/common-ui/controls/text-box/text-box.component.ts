import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-text-box',
  standalone: true,
  templateUrl: './text-box.component.html',
  styleUrl: './text-box.component.css',
  imports: [CommonModule, FormsModule]
})
export class TextBoxComponent {
  @Input() label: string = 'Full Name';
  @Input() placeHolder: string = 'Enter full name';
  @Input() isRequired: boolean = true;
  @Input() showBorder: boolean = true;
  @Input() maxChars: number = 50;
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
