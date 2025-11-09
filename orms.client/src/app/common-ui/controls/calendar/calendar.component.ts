import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-calendar',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input() label: string = 'Date of Birth';
  @Input() isRequired: boolean = true;
  @Input() defaultDate: Date | null = null;
  @Output() dateSelected = new EventEmitter<Date | null>();
  @Output() calendarClosed = new EventEmitter<void>();
 @Input() isSave: boolean = false;
  clickedInside = false;
  @HostListener('document:click')
  handleOutsideClick() {
  if (this.clickedInside) {
    this.clickedInside = false;
    return;
  }

  this.showCalendar = false;
  this.showMonthDropdown = false;
  this.showYearDropdown = false;
  this.calendarClosed.emit();
}

  showCalendar = false;
  currentDate = new Date();
  calendarDays: any[] = [];
  weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  currentMonth = new Date().getMonth();
  currentYear = new Date().getFullYear();
  years: number[] = [];

  ngOnInit() {
    this.generateYears();

    if (!this.defaultDate) {
      this.defaultDate = new Date();
    }

    this.currentMonth = this.defaultDate.getMonth();
    this.currentYear = this.defaultDate.getFullYear();

    this.generateCalendar();
  }

  get formattedDate(): string {
    if (!this.defaultDate) return '';
    return this.defaultDate
      .toLocaleDateString('en-GB')
      .replace(/\//g, '-'); 
  }

openDatePicker(event: Event) {
  event.preventDefault();
  this.clickedInside = true;

  this.showCalendar = !this.showCalendar;

  if (!this.showCalendar) {
    this.showMonthDropdown = false;
    this.showYearDropdown = false;
    this.calendarClosed.emit();
  }
}

startingYear:number = 1950;
endingYear: number = 2050;
  generateYears() {
 
    this.years = [];
    for (let i = this.startingYear; i <= this.endingYear; i++) {
      this.years.push(i);
    }
  }

  generateCalendar() {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    this.calendarDays = [];
    const totalDays = 42; // 6x7 grid

    for (let i = 0; i < totalDays; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      const isCurrentMonth = date.getMonth() === this.currentMonth;
      const isSelected = this.isSelected(date);
      const isToday = this.isToday(date) && !isSelected;

      this.calendarDays.push({
        date,
        day: date.getDate(),
        isCurrentMonth,
        isToday,
        isSelected
      });
    }
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.toDateString() === today.toDateString() &&
      (!this.defaultDate ||
        this.defaultDate.toDateString() === today.toDateString())
    );
  }

  isSelected(date: Date): boolean {
    return this.defaultDate
      ? date.toDateString() === this.defaultDate.toDateString()
      : false;
  }

  previousMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }

  onMonthChange() {
  this.currentMonth = Number(this.currentMonth);
  this.defaultDate = new Date(this.currentYear, this.currentMonth, 1); // default to 1st of month
  this.generateCalendar();
  this.dateSelected.emit(this.defaultDate);
}

onYearChange() {
  this.currentYear = Number(this.currentYear);
  this.defaultDate = new Date(this.currentYear, this.currentMonth, 1);
  this.generateCalendar();
  this.dateSelected.emit(this.defaultDate);
}
 selectDate(day: any) {
    debugger;
    this.defaultDate = new Date(day.date);
    this.currentMonth = this.defaultDate.getMonth();
    this.currentYear = this.defaultDate.getFullYear();

    this.generateCalendar();
    this.dateSelected.emit(this.defaultDate);
  }

  goToToday() {
    const today = new Date();
    this.currentMonth = today.getMonth();
    this.currentYear = today.getFullYear();
    this.defaultDate = today;
    this.generateCalendar();
    this.dateSelected.emit(this.defaultDate);
  }

  clearSelection() {
    this.defaultDate = null;
    this.generateCalendar();
    this.dateSelected.emit(null);
  }

  closeCalendar() {
    this.showCalendar = false;
    this.calendarClosed.emit();
  }

showMonthDropdown = false;
showYearDropdown = false;

toggleMonthDropdown() {
  this.showMonthDropdown = !this.showMonthDropdown;
  this.showYearDropdown = false;

  if (this.showMonthDropdown) {
    setTimeout(() => {
      const dropdowns = Array.from(document.querySelectorAll('.dropdown'));
      const monthDropdown = dropdowns[0] as HTMLElement | undefined;
      if (!monthDropdown) return;
      const list = monthDropdown.querySelector('.dropdown-list') as HTMLElement | null;
      if (!list) return;
      const selected = list.querySelector('li.selected') as HTMLElement | null;
      if (!selected) return;

      list.scrollTop = selected.offsetTop;
    }, 0);
  }
}

toggleYearDropdown() {
  this.showYearDropdown = !this.showYearDropdown;
  this.showMonthDropdown = false;

  if (this.showYearDropdown) {
    setTimeout(() => {
      const dropdowns = Array.from(document.querySelectorAll('.dropdown'));
      const yearDropdown = dropdowns[1] as HTMLElement | undefined;
      if (!yearDropdown) return;
      const list = yearDropdown.querySelector('.dropdown-list') as HTMLElement | null;
      if (!list) return;
      const selected = list.querySelector('li.selected') as HTMLElement | null;
      if (!selected) return;
      list.scrollTop = selected.offsetTop;
    }, 0);
  }
}


selectMonth(index: number) {
  this.currentMonth = index;
  this.showMonthDropdown = false;
  this.onMonthChange();
}

selectYear(year: number) {
  this.currentYear = year;
  this.showYearDropdown = false;
  this.onYearChange();
}

scrollSelectedIntoView(selector: string) {
  setTimeout(() => {
    const selectedElement = document.querySelector(selector);
    if (selectedElement) {
      selectedElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, 0);
}


}

