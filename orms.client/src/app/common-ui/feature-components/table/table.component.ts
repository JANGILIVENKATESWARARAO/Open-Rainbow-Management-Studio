import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Employee {
  id: number;
  name: string;
  attendance: string[];
}




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TableComponent {

searchText: string = '';
  currentPage = 1;
  itemsPerPage = 9;



   employees: Employee[] = [
    {
      id: 1,
      name: 'Anthony Thomas',
      attendance: ['P','P','P','P','P','A','P','P','P','A','P','P','P','A','P','P','P','P','A','P','P','A','P','P','P','P','A','P','P','P','P']
    },
    {
      id: 2,
      name: 'Anthony Thomas',
      attendance: ['P','P','P','P','P','A','P','P','P','A','P','P','P','A','P','P','P','P','A','P','P','A','P','P','P','P','A','P','P','P','P']
    },
    {
      id: 3,
      name: 'Anthony Thomas',
      attendance: ['P','P','P','P','P','A','P','P','P','A','P','P','P','A','P','P','P','P','A','P','P','A','P','P','P','P','A','P','P','P','P']
    },
    {
      id: 4,
      name: 'Benjamin Martinez',
      attendance: ['P','P','P','P','A','A','P','P','P','P','A','P','P','A','P','P','P','A','P','P','A','P','P','P','P','P','P','A','P','P','P']
    },
    {
      id: 5,
      name: 'Benjamin Martinez',
      attendance: ['P','P','P','P','A','A','P','P','P','P','A','P','P','A','P','P','P','A','P','P','A','P','P','P','P','P','P','A','P','P','P']
    },
    {
      id: 6,
      name: 'Benjamin Martinez',
      attendance: ['P','P','P','P','A','A','P','P','P','P','A','P','P','A','P','P','P','A','P','P','A','P','P','P','P','P','P','A','P','P','P']
    },
    {
      id: 7,
      name: 'Christopher Moore',
      attendance: ['P','P','P','A','A','A','P','P','A','P','A','P','P','A','P','P','P','P','A','P','P','A','P','A','P','P','A','P','P','P','P']
    },
    {
      id: 8,
      name: 'Christopher Moore',
      attendance: ['P','P','P','A','A','A','P','P','A','P','A','P','P','A','P','P','P','P','A','P','P','A','P','A','P','P','A','P','P','P','P']
    },
    {
      id: 9,
      name: 'Christopher Moore',
      attendance: ['P','P','P','A','A','A','P','P','A','P','A','P','P','A','P','P','P','P','A','P','P','A','P','A','P','P','A','P','P','P','P']
    }
  ];

  get filteredEmployees() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const filtered = this.employees.filter(e =>
      e.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
    return filtered.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(
      this.employees.filter(e =>
        e.name.toLowerCase().includes(this.searchText.toLowerCase())
      ).length / this.itemsPerPage
    );
  }

  calculateLeave(attendance: string[]): number {
    return attendance.filter(day => day === 'A' || day === 'L').length;
  }

  changePage(page: number) {
    if (page > 0 && page <= this.totalPages) this.currentPage = page;
  }

}

