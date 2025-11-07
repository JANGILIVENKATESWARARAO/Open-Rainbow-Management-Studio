import { Component, Input, OnInit, Output, EventEmitter,OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-box',
  standalone: true,
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
 
 @Output() charCountChange = new EventEmitter<number>();
   @Output() inputTextChange = new EventEmitter<string>(); 

  @Input() inputText: string = '';
  currentCharCount: number = 0;

  // Initialize with correct value
  ngOnInit() {
    this.resetCharCount();
  }

  // Triggered whenever @Input() maxChars changes
  ngOnChanges(changes: SimpleChanges) {
    if (changes['maxChars']) {
      this.resetCharCount();
    }
  }

  // Called every time user types
  updateCharCount() {
    console.log(this.inputText.length);
    
    if (this.inputText.length > this.maxChars) {
      this.inputText = this.inputText.slice(0, this.maxChars);
    }
    this.currentCharCount = this.maxChars - this.inputText.length;
      this.inputTextChange.emit(this.inputText);
    this.charCountChange.emit(this.inputText.length);
  }

  // Helper to reset count correctly when maxChars changes
  private resetCharCount() {
    this.inputText = ''; // reset text
    this.currentCharCount = this.maxChars; // reset count to new max

    
  }
}
