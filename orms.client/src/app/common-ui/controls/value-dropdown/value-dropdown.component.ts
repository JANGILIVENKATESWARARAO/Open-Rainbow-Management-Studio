// import { Component, HostListener, Input } from '@angular/core';

// @Component({
//   selector: 'app-value-dropdown',
//   templateUrl: './value-dropdown.component.html',
//   styleUrls: ['./value-dropdown.component.css'] // ✅ must be plural
// })
// export class ValueDropdownComponent {
//   // 🔹 Dynamic inputs
//   @Input() dropdownValues: (string | number)[] = [2024, 2023, 2022, 2021];
//   @Input() defaultSelected: string | number = '';
//   @Input() textColor: string = '#111';
//   @Input() backgroundColor: string = 'white';
//   @Input() activeBackgroundColor: string = '#ecf2fd';
//   @Input() borderColor: string = 'lightgray';
//   @Input() activeTextColor: string = '#4076ff';
//   @Input() dropdownWidth: string = '140px';
//   @Input() placeholderText: string = '2024';

//   selectedYear!: string | number;
//   isOpen = false;

//   ngOnInit() {
//     this.selectedYear = this.defaultSelected || this.placeholderText;
//   }

//   toggleDropdown() {
//     this.isOpen = !this.isOpen;
//   }

//   selectYear(value: string | number, event: Event) {
//     event.preventDefault();
//     this.selectedYear = value;
//     this.isOpen = false;
//   }

//   @HostListener('document:click', ['$event'])
//   handleClickOutside(event: MouseEvent) {
//     const target = event.target as HTMLElement;
//     if (!target.closest('.dropdown')) {
//       this.isOpen = false;
//     }
//   }
// }


import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-value-dropdown',
  templateUrl: './value-dropdown.component.html',
  styleUrls: ['./value-dropdown.component.css']
})
export class ValueDropdownComponent implements OnInit {
  @Input() dropdownValues: (string | number)[] = [2024, 2023, 2022, 2021];
  @Input() defaultSelected: string | number | null = null;
  @Input() placeholderText: string = 'Select Year';
  @Input() textColor: string = '#111';
  @Input() backgroundColor: string = 'white';
  @Input() activeBackgroundColor: string = '#ecf2fd';
  @Input() borderColor: string = 'lightgray';
  @Input() activeTextColor: string = '#4076ff';
  @Input() dropdownWidth: string = '140px';

  selectedYear: string | number | null = null;
  isOpen = false;

  ngOnInit() {
    // ✅ If defaultSelected is not provided, use placeholderText
    this.selectedYear = this.defaultSelected ?? this.placeholderText;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
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
