import { Component, Input } from '@angular/core';
import { IconComponent } from '../../feature-components/icon/icon.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropDownComponent } from '../drop-down/drop-down.component';

interface list {
  name: string;
  email: string;
  position: string;
  department: string;
}

@Component({
  selector: 'orms-search-drop-down',
  imports: [IconComponent, CommonModule, FormsModule, DropDownComponent],
  templateUrl: './search-drop-down.component.html',
  styleUrl: './search-drop-down.component.css',
})
export class SearchDropDownComponent {
  @Input() placeholderText: string =
    'Search employees by name, email, position, or department...';
  @Input() showBorder: boolean = true;
  @Input() borderColor: string = '#2563eb';
  @Input() iconPosition: 'left' | 'right' = 'right';
  @Input() showIcon: boolean = true;

  searchText: string = '';
  filteredList: list[] = [];

  empList: list[] = [
    {
      name: 'Sandeep',
      email: 'Laptop@gmail.com',
      position: 'seniordev',
      department: 'developer',
    },
    {
      name: 'Srikant',
      email: 'Srikant@gmail.com',
      position: 'junniordev',
      department: 'fullstackdeveloper',
    },
    {
      name: 'Auro',
      email: 'Auro@gmail.com',
      position: 'intern',
      department: 'developer',
    },
    {
      name: 'Arobinda',
      email: 'Arobinda@gmail.com',
      position: 'trainee',
      department: 'HR',
    },
    {
      name: 'Bikram',
      email: 'Bikram@gmail.com',
      position: 'seniordev',
      department: 'developer',
    },
    {
      name: 'Rajesh',
      email: 'Rajesh@gmail.com',
      position: 'intern',
      department: 'database',
    },
    {
      name: 'Rakesh',
      email: 'Rakesh@gmail.com',
      position: 'trainee',
      department: 'HR',
    },
    {
      name: 'Badal',
      email: 'Badal@gmail.com',
      position: 'seniordev',
      department: 'fullstackdeveloper',
    },
    {
      name: 'Keshab',
      email: 'Keshab@gmail.com',
      position: 'junniordev',
      department: 'database',
    },
  ];

  filterList() {
    const query = this.searchText.toLowerCase();

    if (!query) {
      this.filteredList = [];
      return;
    }

    this.filteredList = this.empList.filter(
      (emp) =>
        emp.name.toLowerCase().includes(query) ||
        emp.email.toLowerCase().includes(query)
    );
  }
}
