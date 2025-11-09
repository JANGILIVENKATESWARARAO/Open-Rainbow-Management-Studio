import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { DropdownValues } from '../../assests/view-models/common-view-models';

@Component({
    selector: 'orms-value-dropdown',
    templateUrl: './value-dropdown.component.html',
    styleUrls: ['./value-dropdown.component.css'],
    imports: [CommonModule]
})
export class ValueDropdownComponent implements OnInit {
  @Input() dropdownValues: DropdownValues[] = [];
  @Input() defaultSelected: string | number | null = null;
  @Input() placeholderText: string = '2024';                      
  @Input() textColor: string = '#111';
  @Input() backgroundColor: string = 'white';
  @Input() activeBackgroundColor: string = '#eaf0ff';
  @Input() borderColor: string = 'lightgray';
  @Input() activeTextColor: string = '#316aff';

  @ViewChild('selectedYearRef', { static: true }) selectedYearRef!: ElementRef<HTMLButtonElement>;
  @ViewChild('ripple', { static: true }) rippleRef!: ElementRef<HTMLSpanElement>;

  selectedYear: string | number | null = null;
  isOpen = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.selectedYear = this.dropdownValues.filter(x=>x.isDefault)[0].value
  }

  toggleDropdown(event: MouseEvent) {
    this.isOpen = !this.isOpen;

    const btn = this.selectedYearRef.nativeElement;
    const ripple = this.rippleRef.nativeElement;

    const rect = btn.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.renderer.setStyle(ripple, 'top', `${y}px`);
    this.renderer.setStyle(ripple, 'left', `${x}px`);
    this.renderer.removeClass(ripple, 'ripple-active');
    void ripple.offsetWidth;
    this.renderer.addClass(ripple, 'ripple-active');
  }

  selectYear(value: string | number, event: Event) {
    // event.preventDefault();
    this.selectedYear = value;
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.isOpen = false;
    }
  }
}


