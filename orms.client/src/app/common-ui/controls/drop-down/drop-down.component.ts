import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

export interface DropDown {
  name: string;
  value: any;
}
@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class DropDownComponent {
  @Input() label: string = 'Gender';
  @Input() placeHolder: string = 'Select Gender';
  @Input() isRequired: boolean = false;
  @Output() selectedChange = new EventEmitter<any>();
  @Input() options: DropDown[] = [];

  selectedValue: string | null = null;

  constructor(private eRef: ElementRef) {}
  selectOption(option: DropDown) {
    this.selectedValue = option.name;
    this.selectedChange.emit(option.value);

    setTimeout(() => {
      this.closeDropdown();
    }, 0);
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }

  private closeDropdown() {
    const checkbox: HTMLInputElement | null =
      this.eRef.nativeElement.querySelector('.dropdown-toggle');
    if (checkbox) checkbox.checked = false;
  }
}
