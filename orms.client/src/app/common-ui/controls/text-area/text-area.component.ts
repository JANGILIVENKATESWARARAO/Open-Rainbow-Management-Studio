import {
  Component,
  Input,
  forwardRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'orms-text-area',
  standalone: true,
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaComponent),
      multi: true,
    },
  ],
})
export class TextAreaComponent implements ControlValueAccessor, OnChanges {
  @Input() label: string = 'Address';
  @Input() Placeholder: string = 'Enter your address';
  @Input() isRequired: boolean = false;
  @Input() showBorder: boolean = true;
  @Input() maxChars: number = 200;
  @Input() showCharCount: boolean = false;
  @Input() isSave: boolean = false;

  textValue: string = '';
  currentCharCount: number = 0;

  // ---- ControlValueAccessor Callbacks ----
  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.textValue = value || '';
    this.currentCharCount = this.textValue.length;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Optionally handle disabled state
  }

  // ---- Local Logic ----
  ngOnChanges(changes: SimpleChanges) {
    if (changes['textValue'] || changes['maxChars']) {
      this.currentCharCount = this.textValue?.length || 0;
    }
  }

  updateCharCount() {
    if (this.textValue.length > this.maxChars) {
      this.textValue = this.textValue.slice(0, this.maxChars);
    }
    this.currentCharCount = this.textValue.length;
    this.onChange(this.textValue); // <-- notify parent form
    this.onTouched();
  }

  get remainingChars(): number {
    return this.maxChars - this.currentCharCount;
  }

  get showError(): boolean {
    return this.isRequired && this.isSave && !this.textValue;
  }
}
