import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  Output,
  Renderer2,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, FormsModule, Validator } from '@angular/forms';

export interface DropDown {
  name: string;
  value: any;
}

@Component({
  selector: 'orms-drop-down',
  standalone: true,
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropDownComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DropDownComponent),
      multi: true,
    },
  ],
})
export class DropDownComponent
  implements AfterViewInit, OnDestroy, ControlValueAccessor, Validator
{
  @Input() label: string = 'Gender';
  @Input() placeHolder: string = 'Select Gender';
  @Input() isRequired: boolean = false;
  @Input() showBorder: boolean = true;
  @Input() draggable: boolean = true;
  @Input() isSave: boolean = false;
  @Input() options: DropDown[] = [];

  @Output() selectedChange = new EventEmitter<any>();

  selectedValue: string | null = null;
  isOpenUp: boolean = false;

  private onChange = (_: any) => {};
  private onTouched = () => {};

  constructor(private eRef: ElementRef, private renderer: Renderer2) {}

  selectOption(option: DropDown) {
    this.selectedValue = option.name;
    this.onChange(this.selectedValue);
    this.selectedChange.emit(option);
    setTimeout(() => this.closeDropdown(), 0);
  }

  // -------------------------
  // ✅ ControlValueAccessor logic
  // -------------------------
  writeValue(value: any): void {
    this.selectedValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    const dropdown = this.eRef.nativeElement.querySelector('.custom-dropdown');
    if (dropdown) {
      this.renderer.setProperty(dropdown, 'disabled', isDisabled);
      this.renderer.setStyle(dropdown, 'opacity', isDisabled ? '0.6' : '1');
      this.renderer.setStyle(dropdown, 'pointer-events', isDisabled ? 'none' : 'auto');
    }
  }

  // -------------------------
  // ✅ Validator logic
  // -------------------------
  validate() {
    if (this.isRequired && !this.selectedValue) {
      return { required: true };
    }
    return null;
  }

  // -------------------------
  // ✅ Dropdown behavior
  // -------------------------
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }

  @HostListener('change', ['$event'])
  onToggle(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.decideDropdownDirection();
      this.setInitialHeight();
    }
  }

  private decideDropdownDirection() {
    const dropdown = this.eRef.nativeElement.querySelector('.custom-dropdown') as HTMLElement;
    const list = this.eRef.nativeElement.querySelector('.custom-dropdown-list') as HTMLElement;

    if (!dropdown || !list) return;

    const rect = dropdown.getBoundingClientRect();
    const listHeight = list.offsetHeight || 150;
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    this.isOpenUp = spaceBelow < listHeight && spaceAbove > spaceBelow;
    if (this.isOpenUp) {
      list.classList.add('open-up');
    } else {
      list.classList.remove('open-up');
    }
  }

  private setInitialHeight() {
    const list = this.eRef.nativeElement.querySelector('.custom-dropdown-list') as HTMLElement;
    if (list) {
      const optionHeight = 38;
      const totalHeight = this.options.length * optionHeight;
      const initialHeight = Math.min(244, totalHeight);
      const maxHeight = totalHeight;

      this.renderer.setStyle(list, 'height', `${initialHeight}px`);
      this.renderer.setStyle(list, 'max-height', `${maxHeight}px`);
      this.renderer.setStyle(list, 'overflow-y', 'auto');
    }
  }

  private closeDropdown() {
    const checkbox: HTMLInputElement | null =
      this.eRef.nativeElement.querySelector('.dropdown-toggle');
    if (checkbox) checkbox.checked = false;
  }

  // -------------------------
  // ✅ Error handling
  // -------------------------
  get showError(): boolean {
    return this.isRequired && this.isSave && !this.selectedValue;
  }

  get errorMessage(): string {
    if (this.showError) {
      return 'This field is required';
    }
    return '';
  }

  ngAfterViewInit() {
    if (!this.draggable) return;
    const list = this.eRef.nativeElement.querySelector('.custom-dropdown-list') as HTMLElement;
    const handle = this.eRef.nativeElement.querySelector('.resize-hr') as HTMLElement;

    if (!list || !handle) return;

    handle.addEventListener('mousedown', (event: MouseEvent) => {
      const startY = event.clientY;
      const startHeight = list.offsetHeight;
      const totalHeight = this.options.length * 38;

      const onMouseMove = (moveEvent: MouseEvent) => {
        const diff = moveEvent.clientY - startY;
        let newHeight = startHeight + diff;
        newHeight = Math.min(newHeight, totalHeight + 10);
        newHeight = Math.max(newHeight, 80);
        list.style.height = `${newHeight}px`;
      };

      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        document.body.style.cursor = 'default';
        document.body.style.userSelect = '';
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      document.body.style.cursor = 'ns-resize';
      document.body.style.userSelect = 'none';
    });
  }

  ngOnDestroy() {
    document.body.style.cursor = 'default';
    document.body.style.userSelect = '';
  }
}
