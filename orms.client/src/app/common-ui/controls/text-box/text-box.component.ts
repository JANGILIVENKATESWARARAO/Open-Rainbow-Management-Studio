// import { Component, Input } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// @Component({
//   selector: 'orms-text-box',
//   standalone: true,
//   templateUrl: './text-box.component.html',
//   styleUrl: './text-box.component.css',
//   imports: [CommonModule, FormsModule]
// })
// export class TextBoxComponent {
//   @Input() label: string = 'Full Name';
//   @Input() placeHolder: string = 'Enter full name';
//   @Input() isRequired: boolean = true;
//   @Input() showBorder: boolean = true;
//   @Input() maxChars: number = 5;
//   @Input() showCharCount: boolean = true;
//   inputText: string = '';
//   currentCharCount: number = this.maxChars;

//   updateCharCount() {
//     if (!this.inputText) {
//       this.currentCharCount = this.maxChars;
//       return;
//     }
//     this.currentCharCount = this.inputText.length;
//     if (this.currentCharCount > this.maxChars) {
//       this.inputText = this.inputText.slice(0, this.maxChars);
//       this.currentCharCount = this.maxChars;
//     }
//   }
// }



import { Component, Input, Output,OnInit,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'orms-text-box',
    templateUrl: './text-box.component.html',
    styleUrls: ['./text-box.component.css'],
    imports: [CommonModule, FormsModule]
})
export class TextBoxComponent implements OnInit, OnChanges {
  @Input() label: string = 'Full Name';
  @Input() placeHolder: string = 'Enter full name';
  @Input() isRequired: boolean = true;
  @Input() showBorder: boolean = true;
  @Input() maxChars: number = 20; // ✅ Change this value — it will reflect automatically
  @Input() showCharCount: boolean = true;
   @Input() isSave: boolean = false;
 @Output() valueChange = new EventEmitter<string>();
 @Input() value: string = '';
 
  inputText: string = '';
 
  currentCharCount: number = 0;

  // Initialize with correct value
  ngOnInit() {
    this.resetCharCount();
  }
 onInputChange(newValue: string) {
    this.value = newValue;
    this.valueChange.emit(this.value);
    this.updateCharCount();
  }
  // Triggered whenever @Input() maxChars changes
  ngOnChanges(changes: SimpleChanges) {
    if (changes['maxChars']) {
      this.resetCharCount();
    }
  }

  // Called every time user types
  updateCharCount() {
    if (this.inputText.length > this.maxChars) {
      this.inputText = this.inputText.slice(0, this.maxChars);
    }
    this.currentCharCount = this.maxChars - this.inputText.length;
  }

  // Helper to reset count correctly when maxChars changes
  private resetCharCount() {
    this.inputText = ''; // reset text
    this.currentCharCount = this.maxChars; // reset count to new max
  }
}
