import { Component, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class OtpComponent implements AfterViewInit {
  otpArray = Array(6).fill('');
  
  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef<HTMLInputElement>>;

  ngAfterViewInit(): void {
    // Optional: focus first input on load
    this.otpInputs.first.nativeElement.focus();
  }

  handlePaste(event: ClipboardEvent): void {
    const pasteData = event.clipboardData?.getData('text') || '';
    if (/^\d{6}$/.test(pasteData)) {
      event.preventDefault();
      pasteData.split('').forEach((char, i) => {
        const input = this.otpInputs.get(i);
        if (input) {
          input.nativeElement.value = char;
        }
      });
      this.otpInputs.last.nativeElement.focus();
    }
  }

  handleInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    if (input.value.length === 1 && index < this.otpArray.length - 1) {
      this.otpInputs.get(index + 1)?.nativeElement.focus();
    }
  }
}
