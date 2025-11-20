import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detailed-calendar',
  templateUrl: './detailed-calendar.component.html',
  styleUrls: ['./detailed-calendar.component.css']
})
export class DetailedCalendarComponent implements OnInit {

  currentView: 'month' | 'week' | 'day' = 'month';
  viewMode: 'month' | 'week' | 'day' = 'month';
  selectedWeekDate: Date | null = null;
  selectedDate: Date | null = null;
  displayMonth: string = '';
  monthHeader: string = '';
  selectedWeekCells: { [key: string]: boolean } = {};


  weekDays: any[] = [];
  hours: string[] = [];
  calendarDays: any[] = [];
  weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];


  @Input() label: string = 'Date of Birth';
  @Input() isRequired: boolean = true;
  @Input() defaultDate: Date | null = null;
  @Input() isSave: boolean = false;

  @Output() dateSelected = new EventEmitter<Date | null>();
  @Output() calendarClosed = new EventEmitter<void>();

  showCalendar = false;
  showMonthDropdown = false;
  showYearDropdown = false;
  clickedInside = false;
  calendarIcon: string = 'home';


  currentDate = new Date();
  currentMonth = new Date().getMonth();
  currentYear = new Date().getFullYear();
  years: number[] = [];

  startingYear: number = 1950;
  endingYear: number = 2050;

  ngOnInit() {
    this.generateYears();
    this.updateMonthHeader();

    if (!this.defaultDate) this.defaultDate = new Date();

    this.currentMonth = this.defaultDate.getMonth();
    this.currentYear = this.defaultDate.getFullYear();

    this.generateCalendar();
    this.generateWeekHours();
    this.generateWeekDays();
  }

  @HostListener('document:click')
  handleOutsideClick() {
    this.showMonthDropdown = false;

    if (this.clickedInside) {
      this.clickedInside = false;
      return;
    }

    this.showCalendar = false;
    this.calendarIcon = 'home';
    this.showYearDropdown = false;
    this.calendarClosed.emit();
  }

  get formattedDate(): string {
    if (!this.defaultDate) return '';
    return this.defaultDate.toLocaleDateString('en-GB').replace(/\//g, '-');
  }

  openDatePicker(event: Event) {
    event.preventDefault();
    this.clickedInside = true;

    this.showCalendar = !this.showCalendar;
    this.calendarIcon = this.showCalendar ? 'save' : 'home';

    if (!this.showCalendar) {
      this.showMonthDropdown = false;
      this.showYearDropdown = false;
      this.calendarClosed.emit();
    }
  }

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
    const totalDays = 42;

    for (let i = 0; i < totalDays; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      this.calendarDays.push({
        date,
        day: date.getDate(),
        isCurrentMonth: date.getMonth() === this.currentMonth,
        isToday: this.isToday(date) && !this.isSelected(date),
        isSelected: this.isSelected(date)
      });
    }
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.toDateString() === today.toDateString() &&
      (!this.defaultDate || this.defaultDate.toDateString() === today.toDateString())
    );
  }

  isSelected(date: Date): boolean {
    return this.defaultDate
      ? date.toDateString() === this.defaultDate.toDateString()
      : false;
  }

  updateMonthHeader() {
    const month = this.currentDate.toLocaleString('en-US', { month: 'long' });
    const year = this.currentDate.getFullYear();
    this.monthHeader = `${month} ${year}`;
  }

  updateDayHeader() {
    const d = this.weekDays[0].date;
    const dayName = d.toLocaleString('en-US', { weekday: 'long' });
    const month = d.toLocaleString('en-US', { month: 'long' });
    const day = d.getDate();
    const year = d.getFullYear();

    this.displayMonth = `${month} ${day}, ${year}`;
  }
  updateWeekHeader() {
    if (!this.weekDays || this.weekDays.length < 7) return;

    const start = this.weekDays[0].date;
    const end = this.weekDays[6].date;

    const startMonth = start.toLocaleString('en-US', { month: 'short' });
    const endMonth = end.toLocaleString('en-US', { month: 'short' });
    const startDay = start.getDate();
    const endDay = end.getDate();
    const startYear = start.getFullYear();
    const endYear = end.getFullYear();

    if (startMonth === endMonth && startYear === endYear) {
      this.displayMonth = `${startMonth} ${startDay} – ${endDay}, ${startYear}`;
      return;
    }

    if (startYear === endYear) {
      this.displayMonth = `${startMonth} ${startDay} – ${endMonth} ${endDay}, ${startYear}`;
      return;
    }

    this.displayMonth = `${startMonth} ${startDay}, ${startYear} – ${endMonth} ${endDay}, ${endYear}`;
  }

  generateWeekHours() {
    this.hours = [];
    for (let i = 0; i < 24; i++) {
      const hour12 = i % 12 === 0 ? 12 : i % 12;
      const ampm = i < 12 ? 'AM' : 'PM';
      this.hours.push(`${hour12}:00 ${ampm}`);
    }
  }

  generateWeekDays() {
    const baseDate = this.defaultDate ? new Date(this.defaultDate) : new Date();
    const start = new Date(baseDate);
    start.setDate(baseDate.getDate() - baseDate.getDay());

    this.weekDays = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);

      this.weekDays.push({
        date: d,
        dayName: d.toLocaleString('en-US', { weekday: 'short' })
      });
    }
  }

  generateDayView() {
    const base = this.defaultDate ? new Date(this.defaultDate) : new Date();

    this.weekDays = [{
      date: base,
      dayName: base.toLocaleString('en-US', { weekday: 'long' })
    }];

    this.generateWeekHours();
  }

  switchToMonth() {
    this.viewMode = 'month';
    this.updateMonthHeader();
    this.generateCalendar();
    this.updateCalendar();
  }

  switchToWeek() {
    this.currentView = 'week';
    this.viewMode = 'week';
    this.generateWeekDays();
    this.generateWeekHours();
    this.updateWeekHeader();
  }

  switchToDay() {
    this.currentView = 'day';
    this.viewMode = 'day';

    const selected = this.defaultDate || this.selectedDate || new Date();
    const weekdayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    this.weekDays = [
      { dayName: weekdayNames[selected.getDay()], date: selected }
    ];

    this.generateWeekHours();
    this.updateDayHeader();
  }

  previousWeek() {
    if (!this.defaultDate) return;

    const d = new Date(this.defaultDate);
    d.setDate(d.getDate() - 7);

    this.defaultDate = d;
    this.currentDate = d;

    this.currentMonth = d.getMonth();
    this.currentYear = d.getFullYear();

    this.generateWeekDays();
    this.updateWeekHeader();
  }

  nextWeek() {
    if (!this.defaultDate) return;

    const d = new Date(this.defaultDate);
    d.setDate(d.getDate() + 7);

    this.defaultDate = d;
    this.currentDate = d;

    this.currentMonth = d.getMonth();
    this.currentYear = d.getFullYear();

    this.generateWeekDays();
    this.updateWeekHeader();
  }

  goToPrevious() {
    if (this.viewMode === 'month') {
      this.currentDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() - 1,
        1
      );

      this.updateMonthHeader();
      this.generateCalendar();
    }

    else if (this.currentView === 'week') {
      this.currentDate = new Date(this.currentDate.setDate(this.currentDate.getDate() - 7));
    }

    else if (this.currentView === 'day') {
      this.currentDate = new Date(this.currentDate.setDate(this.currentDate.getDate() - 1));
    }

    this.updateCalendar();
  }

  goToNext() {
    if (this.viewMode === 'month') {
      this.currentDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() + 1,
        1
      );

      this.updateMonthHeader();
      this.generateCalendar();
    }

    else if (this.currentView === 'week') {
      this.currentDate = new Date(this.currentDate.setDate(this.currentDate.getDate() + 7));
    }

    else if (this.currentView === 'day') {
      this.currentDate = new Date(this.currentDate.setDate(this.currentDate.getDate() + 1));
    }

    this.updateCalendar();
  }


  setView(view: 'month' | 'week' | 'day') {
    this.currentView = view;
    this.updateCalendar();
  }

  updateCalendar() {
    this.defaultDate = new Date(this.currentDate);

    if (this.viewMode === 'month') {
      this.currentMonth = this.currentDate.getMonth();
      this.currentYear = this.currentDate.getFullYear();

      this.updateMonthHeader();
      this.generateCalendar();
    }

    if (this.currentView === 'week') {
      this.generateWeekDays();
      this.generateWeekHours();
      this.updateWeekHeader();
      return;
    }

    if (this.currentView === 'day') {
      this.generateDayView();
      this.generateWeekHours();
      this.updateDayHeader();
      return;
    }
  }


  onMonthChange() {
    this.currentMonth = Number(this.currentMonth);
    this.defaultDate = new Date(this.currentYear, this.currentMonth, 1);
    this.generateCalendar();
    this.dateSelected.emit(this.defaultDate);
  }

  onYearChange() {
    this.currentYear = Number(this.currentYear);
    this.defaultDate = new Date(this.currentYear, this.currentMonth, 1);
    this.currentDate = new Date(this.defaultDate);

    if (this.currentView === 'month') {
      this.generateCalendar();
    }
    else if (this.currentView === 'week') {
      this.generateWeekDays();
      this.generateWeekHours();
      this.updateWeekHeader();
    }
    else if (this.currentView === 'day') {
      this.generateDayView();
      this.generateWeekHours();
      this.updateDayHeader();
    }

    this.dateSelected.emit(this.defaultDate);
  }

  selectDate(day: any) {
    this.defaultDate = new Date(day.date);
    this.currentMonth = this.defaultDate.getMonth();
    this.currentYear = this.defaultDate.getFullYear();

    this.generateCalendar();
    this.dateSelected.emit(this.defaultDate);
  }

  goToToday() {
    const today = new Date();
    this.currentDate = new Date(today);
    this.defaultDate = new Date(today);

    if (this.currentView === 'month') {
      this.currentMonth = today.getMonth();
      this.currentYear = today.getFullYear();
      this.generateCalendar();
      this.dateSelected.emit(today);
      return;
    }

    if (this.currentView === 'week') {
      this.generateWeekDays();
      this.generateWeekHours();

      this.selectedWeekCells = {};
      const keyDate = today.toISOString().split("T")[0];

      for (let hour = 0; hour < 24; hour++) {
        const key = `${keyDate}-${hour}`;
        this.selectedWeekCells[key] = true;
      }

      this.updateCalendar();
      return;
    }

    if (this.currentView === 'day') {
      this.generateDayView();
      this.generateWeekHours();

      this.selectedWeekCells = {};
      const keyDate = today.toISOString().split("T")[0];

      for (let hour = 0; hour < 24; hour++) {
        const key = `${keyDate}-${hour}`;
        this.selectedWeekCells[key] = true;
      }

      this.updateDayHeader();
      return;
    }
  }

  get weekRangeLabel(): string {
    if (!this.weekDays || this.weekDays.length === 0) return '';

    const first = this.weekDays[0].date;
    const last = this.weekDays[this.weekDays.length - 1].date;

    const sameMonth = first.getMonth() === last.getMonth();
    const sameYear = first.getFullYear() === last.getFullYear();

    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };

    if (sameMonth && sameYear) {
      return `${first.toLocaleDateString('en-US', options)} ${first.getFullYear()}`;
    }

    return `${first.toLocaleDateString('en-US', options)} – ${last.toLocaleDateString('en-US', options)} ${last.getFullYear()}`;
  }

  get isWeekSpanTwoMonths(): boolean {
    if (!this.weekDays || this.weekDays.length === 0) return false;

    const first = this.weekDays[0].date;
    const last = this.weekDays[this.weekDays.length - 1].date;

    return first.getMonth() !== last.getMonth() || first.getFullYear() !== last.getFullYear();
  }

  formatWeekHeader(start: Date, end: Date): string {
    const startMonth = start.toLocaleString('default', { month: 'short' });
    const endMonth = end.toLocaleString('default', { month: 'short' });
    const startDay = start.getDate();
    const endDay = end.getDate();

    return startMonth === endMonth
      ? `${startMonth} ${startDay} – ${endDay}`
      : `${startMonth} ${startDay} – ${endMonth} ${endDay}`;
  }

  isWeekCellSelected(date: Date, hour: string): boolean {
    const keyDate = date.toISOString().split("T")[0];
    const key = `${keyDate}-${parseInt(hour)}`;
    return !!this.selectedWeekCells[key];
  }

  clearSelection() {
    this.defaultDate = null;
    this.generateCalendar();
    this.dateSelected.emit(null);
  }

  closeCalendar() {
    this.showCalendar = false;
    this.calendarIcon = 'home';
    this.calendarClosed.emit();
  }

  closeMonthDropdown() {
    this.showMonthDropdown = false;
  }

  closeYearDropdown() {
    this.showYearDropdown = false;
  }

  toggleMonthDropdown() {
    this.showMonthDropdown = !this.showMonthDropdown;
    this.showYearDropdown = false;

    if (this.showMonthDropdown) {
      setTimeout(() => {
        const monthDropdown = document.querySelectorAll('.dropdown')[0] as HTMLElement;
        if (!monthDropdown) return;

        const list = monthDropdown.querySelector('.dropdown-list') as HTMLElement;
        if (!list) return;

        const selected = list.querySelector('li.selected') as HTMLElement;
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
        const yearDropdown = document.querySelectorAll('.dropdown')[1] as HTMLElement;
        if (!yearDropdown) return;

        const list = yearDropdown.querySelector('.dropdown-list') as HTMLElement;
        if (!list) return;

        const selected = list.querySelector('li.selected') as HTMLElement;
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
