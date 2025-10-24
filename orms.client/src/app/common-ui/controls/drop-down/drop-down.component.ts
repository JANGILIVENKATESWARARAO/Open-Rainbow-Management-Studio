import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
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
  isOpenUp: boolean = false;

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

  @HostListener('change', ['$event'])
  onToggle(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.decideDropdownDirection();
    }
  }

  private decideDropdownDirection() {
    const dropdown = this.eRef.nativeElement.querySelector(
      '.custom-dropdown'
    ) as HTMLElement;
    const list = this.eRef.nativeElement.querySelector(
      '.custom-dropdown-list'
    ) as HTMLElement;

    if (!dropdown || !list) return;

    list.style.visibility = 'hidden';
    list.style.display = 'block';
    const listHeight = list.offsetHeight || 150;
    list.style.display = '';
    list.style.visibility = '';

    const rect = dropdown.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    this.isOpenUp = spaceBelow < listHeight && spaceAbove > spaceBelow;

    if (this.isOpenUp) {
      list.classList.add('open-up');
    } else {
      list.classList.remove('open-up');
    }
  }

  private closeDropdown() {
    const checkbox: HTMLInputElement | null =
      this.eRef.nativeElement.querySelector('.dropdown-toggle');
    if (checkbox) checkbox.checked = false;
  }
}
