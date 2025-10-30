import {
  Component,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit
} from '@angular/core';
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
    this.otpInputs.first.nativeElement.focus();
  }

  handlePaste(event: ClipboardEvent): void {
    const pasteData = event.clipboardData?.getData('text/plain') || '';
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
    const value = input.value;

    // Allow only digits
    if (!/^\d$/.test(value) && value !== '') {
      input.value = '';
      return;
    }

    // Move to next input if valid
    if (value && index < this.otpArray.length - 1) {
      this.otpInputs.get(index + 1)?.nativeElement.focus();
    }
  }

  handleKeyDown(event: KeyboardEvent, index: number): void {
    const input = event.target as HTMLInputElement;

    if (event.key === 'Backspace') {
      if (input.value === '' && index > 0) {
        this.otpInputs.get(index - 1)?.nativeElement.focus();
      }
    }

    // Optional: prevent non-digit keys (except navigation)
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];
    if (!/^\d$/.test(event.key) && !allowedKeys.includes(event.key) && event.key !== 'v' && !event.ctrlKey) {
      event.preventDefault();
    }
  }
}