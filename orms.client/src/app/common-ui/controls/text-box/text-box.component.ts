import {
  Component,
  Input,
  forwardRef,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor
} from '@angular/forms';

@Component({
  selector: 'orms-text-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextBoxComponent),
      multi: true
    }
  ]
})
export class TextBoxComponent implements ControlValueAccessor, OnInit, OnChanges {
  @Input() label: string = 'Full Name';
  @Input() placeHolder: string = 'Enter full name';
  @Input() isRequired: boolean = false;
  @Input() isSave: boolean = false; // ✅ Added for consistency with TextArea
  @Input() showBorder: boolean = true;
  @Input() maxChars: number = 50;
  @Input() showCharCount: boolean = false;

  value: string = '';
  currentCharCount: number = 0;
  disabled = false;

  // ControlValueAccessor callbacks
  onChange = (_: any) => {};
  onTouched = () => {};

  ngOnInit() {
    this.updateCharCount();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['maxChars']) this.updateCharCount();
  }

  onInputChange(newValue: string) {
    if (this.maxChars && newValue.length > this.maxChars) {
      newValue = newValue.slice(0, this.maxChars);
    }
    this.value = newValue;
    this.updateCharCount();
    this.onChange(this.value);
    this.onTouched();
  }

  updateCharCount() {
    this.currentCharCount = this.maxChars - (this.value?.length || 0);
  }

  // ✅ Angular form control interface
  writeValue(value: string): void {
    this.value = value || '';
    this.updateCharCount();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // ✅ showError logic (for red border)
  get showError(): boolean {
    return this.isRequired && this.isSave && !this.value;
  }
}
