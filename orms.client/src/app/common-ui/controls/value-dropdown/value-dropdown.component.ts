import { Component, HostListener, Input, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-value-dropdown',
  templateUrl: './value-dropdown.component.html',
  styleUrls: ['./value-dropdown.component.css']
})
export class ValueDropdownComponent implements OnInit {
  @Input() dropdownValues: (string | number)[] = [2024, 2023, 2022, 2021];
  @Input() defaultSelected: string | number | null = null;
  @Input() placeholderText: string = '2024';
  @Input() textColor: string = '#111';
  @Input() backgroundColor: string = 'white';
  @Input() activeBackgroundColor: string = '#ecf2fd';
  @Input() borderColor: string = 'lightgray';
  @Input() activeTextColor: string = '#4076ff';

  @ViewChild('selectedYearRef', { static: true }) selectedYearRef!: ElementRef<HTMLButtonElement>;
  @ViewChild('ripple', { static: true }) rippleRef!: ElementRef<HTMLSpanElement>;

  selectedYear: string | number | null = null;
  isOpen = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.selectedYear = this.defaultSelected ?? this.placeholderText;
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
    event.preventDefault();
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


