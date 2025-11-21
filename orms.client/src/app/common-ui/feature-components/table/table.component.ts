import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../feature-components/icon/icon.component';

interface Employee {
  id: number;
  name: string;
  attendance: string[];
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent]
})
export class TableComponent {

  searchText: string = '';
  currentPage = 1;
  itemsPerPage = 9;

  isAscending: boolean = true;

  showPopup: boolean = false;
  popupTop: number = 0;
  popupLeft: number = 0;
  popupTimer: any;

  popupIcon: 'home' | 'save' = 'home';

  daySortDirection: { [key: number]: boolean } = {};

  leaveSortAscending: boolean = true;

  employees: Employee[] = [
    {
      id: 1,
      name: 'Anthony Thomas',
      attendance: ['P','P','P','P','P','A','P','P','P','A','P','P','P','A','P','P','P','P','A','P','P','A','P','P','P','P','A','P','P','P','P']
    },
    {
      id: 2,
      name: 'Cnthony Thomas',
      attendance: ['P','P','P','P','P','A','P','P','P','A','P','P','P','A','P','P','P','P','A','P','P','A','P','P','P','P','A','P','P','P','P']
    },
    {
      id: 3,
      name: 'Bnthony Thomas',
      attendance: ['P','P','P','P','P','A','P','P','P','A','P','P','P','A','P','P','P','P','A','P','P','A','P','P','P','P','A','P','P','P','P']
    },
    {
      id: 4,
      name: 'Denjamin Martinez',
      attendance: ['P','P','P','P','A','A','P','P','P','P','A','P','P','A','P','P','P','A','P','P','A','P','P','P','P','P','P','A','P','P','P']
    },
    {
      id: 5,
      name: 'Fenjamin Martinez',
      attendance: ['P','P','P','P','A','A','P','P','P','P','A','P','P','A','P','P','P','A','P','P','A','P','P','P','P','P','P','A','P','P','P']
    },
    {
      id: 6,
      name: 'Eenjamin Martinez',
      attendance: ['P','P','P','P','A','A','P','P','P','P','A','P','P','A','P','P','P','A','P','P','A','P','P','P','P','P','P','A','P','P','P']
    },
    {
      id: 7,
      name: 'Ghristopher Moore',
      attendance: ['P','P','P','A','A','A','P','P','A','P','A','P','P','A','P','P','P','P','A','P','P','A','P','A','P','P','A','P','P','P','P']
    },
    {
      id: 8,
      name: 'Hhristopher Moore',
      attendance: ['P','P','P','A','A','A','P','P','A','P','A','P','P','A','P','P','P','P','A','P','P','A','P','A','P','P','A','P','P','P','P']
    },
    {
      id: 9,
      name: 'Ihristopher Moore',
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

  sortByName() {
    if (this.isAscending) {
      this.employees.sort((a, b) => a.name.localeCompare(b.name));
      this.isAscending = false;
    } else {
      this.employees.sort((a, b) => b.name.localeCompare(a.name));
      this.isAscending = true;
    }
  }

  sortByDayColumn(dayIndex: number, event: MouseEvent) {
    if (this.daySortDirection[dayIndex] === undefined) {
      this.daySortDirection[dayIndex] = true;
    }

    const ascOrder: any = { P: 1, L: 2, A: 3 };
    const descOrder: any = { A: 1, L: 2, P: 3 };

    if (this.daySortDirection[dayIndex]) {
      this.employees.sort((a, b) =>
        ascOrder[a.attendance[dayIndex]] - ascOrder[b.attendance[dayIndex]]
      );
      this.showHomePopup(event, 'home');
    } else {
      this.employees.sort((a, b) =>
        descOrder[a.attendance[dayIndex]] - descOrder[b.attendance[dayIndex]]
      );
      this.showHomePopup(event, 'save');
    }

    this.daySortDirection[dayIndex] = !this.daySortDirection[dayIndex];
  }

  showHomePopup(event: MouseEvent, icon: 'home' | 'save' = 'home') {
    const th = event.target as HTMLElement;
    const rect = th.getBoundingClientRect();

    this.popupLeft = rect.left + rect.width / 2 - 13;
    this.popupTop = -2;

    this.popupIcon = icon;
    this.showPopup = true;

    clearTimeout(this.popupTimer);

    this.popupTimer = setTimeout(() => {
      this.showPopup = false;
    }, 900);
  }

  sortByLeave(event: MouseEvent) {

    if (this.leaveSortAscending) {
      this.employees.sort((a, b) =>
        this.calculateLeave(a.attendance) - this.calculateLeave(b.attendance)
      );
      this.showHomePopup(event, 'home');
    } else {
      this.employees.sort((a, b) =>
        this.calculateLeave(b.attendance) - this.calculateLeave(a.attendance)
      );
      this.showHomePopup(event, 'save');
    }

    this.leaveSortAscending = !this.leaveSortAscending;
  }
}
