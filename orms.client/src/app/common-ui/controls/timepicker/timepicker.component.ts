import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-timepicker',
  standalone:true,
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css'],
  imports:[CommonModule]
})
export class TimepickerComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() use24HourFormat = false; // ✅ Controlled via Storybook

  isPickerOpen = false;
  hoursList: number[] = [];
  minutesList = Array.from({ length: 60 }, (_, i) => i);
  ampmList = ['AM', 'PM'];
  visibleHours: number[] = [];
  visibleMinutes: number[] = [];
  visibleAmPm: string[] = [];

  hours = 9;
  minutes = 30;
  ampm: 'AM' | 'PM' = 'PM';

  readonly itemHeight = 40;
  private scrollTimers = new Map<string, any>();

  @ViewChild('hoursCol', { static: false }) hoursCol!: ElementRef<HTMLDivElement>;
  @ViewChild('minutesCol', { static: false }) minutesCol!: ElementRef<HTMLDivElement>;
  @ViewChild('ampmCol') ampmCol!: ElementRef;

    ngOnChanges(changes: SimpleChanges): void {
    if (changes['use24HourFormat'] && !changes['use24HourFormat'].firstChange) {
      this.initializeLists();
      this.adjustTimeFormat();
      this.updateVisibleLists();
      setTimeout(() => this.centerOnSelected(), 200);
    }
  }

  ngOnInit(): void {
    this.initializeLists();
    this.setInitialTime();
  }

  private initializeLists() {
    this.hoursList = this.use24HourFormat
      ? Array.from({ length: 24 }, (_, i) => i)
      : Array.from({ length: 12 }, (_, i) => i + 1);
  }

  private setInitialTime() {
    const now = new Date();
    let hours = now.getHours();
    this.ampm = hours >= 12 ? 'PM' : 'AM';

    if (!this.use24HourFormat) {
      hours = hours % 12;
      if (hours === 0) hours = 12;
    }

    this.hours = hours;
    this.minutes = now.getMinutes();
  }
    private adjustTimeFormat() {
    // Convert between 12h ↔ 24h modes properly
    if (this.use24HourFormat) {
      // Convert current 12-hour time + AM/PM → 24-hour
      if (this.ampm === 'PM' && this.hours < 12) this.hours += 12;
      if (this.ampm === 'AM' && this.hours === 12) this.hours = 0;
    } else {
      // Convert current 24-hour → 12-hour + AM/PM
      this.ampm = this.hours >= 12 ? 'PM' : 'AM';
      this.hours = this.hours % 12;
      if (this.hours === 0) this.hours = 12;
    }
  }

  ngAfterViewInit(): void {
    this.visibleHours = [...this.hoursList, ...this.hoursList, ...this.hoursList];
    this.visibleMinutes = [...this.minutesList, ...this.minutesList, ...this.minutesList];
    this.visibleAmPm = [...this.ampmList];

    setTimeout(() => this.centerOnSelected(), 150);

    [this.hoursCol, this.minutesCol].forEach(col => {
      if (col?.nativeElement)
        col.nativeElement.addEventListener('wheel', (e) => e.preventDefault(), { passive: false });
    });
  }
    private updateVisibleLists() {
    this.visibleHours = [...this.hoursList, ...this.hoursList, ...this.hoursList];
    this.visibleMinutes = [...this.minutesList, ...this.minutesList, ...this.minutesList];
    this.visibleAmPm = [...this.ampmList];
  }

  togglePicker() {
    this.isPickerOpen = !this.isPickerOpen;
  }

  formatDisplayTime(): string {
    const hh = this.hours.toString().padStart(2, '0');
    const mm = this.minutes.toString().padStart(2, '0');
    return this.use24HourFormat ? `${hh}:${mm}` : `${hh}:${mm} ${this.ampm}`;
  }

  onScroll(type: 'hours' | 'minutes' | 'ampm') {
    const el = this.getCol(type);
    if (!el) return;

    if (this.scrollTimers.get(type)) clearTimeout(this.scrollTimers.get(type));

    const t = setTimeout(() => {
      const scrollTop = el.scrollTop;
      const centerOffset = (el.clientHeight / 2) - (this.itemHeight / 2);
      const position = (scrollTop + centerOffset) / this.itemHeight;

      if (type === 'ampm') {
        const baseIndex = Math.round(position) % this.ampmList.length;
        this.ampm = this.ampmList[baseIndex] as 'AM' | 'PM';
        el.scrollTo({ top: baseIndex * this.itemHeight, behavior: 'smooth' });
        return;
      }

      const baseList = type === 'hours' ? this.hoursList : this.minutesList;
      const fractionalPart = position % 1;
      const baseIndex = Math.floor(position);
      const nextIndex = fractionalPart > 0.6 ? baseIndex + 1 : baseIndex;
      const actualIndex = nextIndex % baseList.length;
      const newValue = baseList[actualIndex];

      if (type === 'hours') this.hours = newValue;
      else this.minutes = newValue;

      const targetScroll = (nextIndex * this.itemHeight) - centerOffset;
      el.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }, 80);

    this.scrollTimers.set(type, t);
  }

  selectValue(type: 'hours' | 'minutes', value: number) {
    if (type === 'hours') this.hours = value;
    else this.minutes = value;
    this.centerOnSelected();
  }

  setAmPm(value: 'AM' | 'PM') {
    this.ampm = value;
    if (this.ampmCol?.nativeElement) {
      this.ampmCol.nativeElement.scrollTo({
        top: value === 'AM' ? 0 : this.itemHeight,
        behavior: 'smooth'
      });
    }
  }

  private getCol(type: string): HTMLElement | null {
    return type === 'hours'
      ? this.hoursCol?.nativeElement
      : type === 'minutes'
      ? this.minutesCol?.nativeElement
      : this.ampmCol?.nativeElement;
  }

  private centerOnSelected() {
    const hoursCol = this.hoursCol.nativeElement;
    const minutesCol = this.minutesCol.nativeElement;
    const centerOffset = (hoursCol.clientHeight / 2) - (this.itemHeight / 2);

    const hoursMiddleIndex = this.hoursList.length + this.hoursList.indexOf(this.hours);
    const minutesMiddleIndex = this.minutesList.length + this.minutesList.indexOf(this.minutes);

    hoursCol.scrollTop = (hoursMiddleIndex * this.itemHeight) - centerOffset;
    minutesCol.scrollTop = (minutesMiddleIndex * this.itemHeight) - centerOffset;

    if (!this.use24HourFormat && this.ampmCol) {
      const ampmCol = this.ampmCol.nativeElement;
      ampmCol.scrollTop = this.ampm === 'AM' ? 0 : this.itemHeight;
    }
  }

  isActive(type: 'hours' | 'minutes', value: number) {
    return type === 'hours' ? value === this.hours : value === this.minutes;
  }
}
