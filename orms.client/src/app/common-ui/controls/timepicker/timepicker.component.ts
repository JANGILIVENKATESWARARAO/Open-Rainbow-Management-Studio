
import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  HostListener
} from '@angular/core';

@Component({
    selector: 'app-timepicker',
    templateUrl: './timepicker.component.html',
    styleUrls: ['./timepicker.component.css'],
    imports: []
})
export class TimepickerComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() use24HourFormat = false; // Controlled via Storybook
  @Input() showSeconds = true;      // Toggle seconds visibility

  isPickerOpen = false;

  hoursList: number[] = [];
  minutesList = Array.from({ length: 60 }, (_, i) => i);
  secondsList = Array.from({ length: 60 }, (_, i) => i);
  ampmList = ['AM', 'PM'];

  visibleHours: number[] = [];
  visibleMinutes: number[] = [];
  visibleSeconds: number[] = [];
  visibleAmPm: string[] = [];

  hours = 0;
  minutes = 0;
  seconds = 0;
  ampm: 'AM' | 'PM' = 'PM';

  readonly itemHeight = 40;
  private scrollTimers = new Map<string, any>();
  private hasInitialScroll = false;
  private liveClockInterval: any;
  private userInteracted = false;



  @ViewChild('hoursCol', { static: false }) hoursCol!: ElementRef<HTMLDivElement>;
  @ViewChild('minutesCol', { static: false }) minutesCol!: ElementRef<HTMLDivElement>;
  @ViewChild('secondsCol', { static: false }) secondsCol!: ElementRef<HTMLDivElement>;
  @ViewChild('ampmCol', { static: false }) ampmCol!: ElementRef<HTMLDivElement>;

  constructor(private eRef: ElementRef) {}

  // ✅ Close picker when clicking outside
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (this.isPickerOpen && !this.eRef.nativeElement.contains(event.target)) {
      this.isPickerOpen = false;
    }
  }

ngOnInit(): void {
  this.initializeLists();
  this.setInitialTime();

  // ✅ Keep display showing live IST even before opening
  this.startLiveClock();
}



  ngOnChanges(changes: SimpleChanges): void {
    if (changes['use24HourFormat'] && !changes['use24HourFormat'].firstChange) {
      this.initializeLists();
      this.adjustTimeFormat();
      this.updateVisibleLists();
      setTimeout(() => this.centerOnSelected(), 200);
    }
  }

  private initializeLists() {
    this.hoursList = this.use24HourFormat
      ? Array.from({ length: 24 }, (_, i) => i)
      : Array.from({ length: 12 }, (_, i) => i + 1);
  }


  private setInitialTime() {
  // Get current IST time (UTC +5:30)
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const ist = new Date(utc + 5.5 * 60 * 60 * 1000);

  this.hours = ist.getHours();
  this.minutes = ist.getMinutes();
  this.seconds = ist.getSeconds();

  if (this.use24HourFormat) {
    // Keep 24-hour format directly
    this.ampm = this.hours >= 12 ? 'PM' : 'AM';
  } else {
    // Convert to 12-hour format
    this.ampm = this.hours >= 12 ? 'PM' : 'AM';
    this.hours = this.hours % 12;
    if (this.hours === 0) this.hours = 12;
  }
}


  private adjustTimeFormat() {
    // Convert between 12h ↔ 24h properly
    if (this.use24HourFormat) {
      if (this.ampm === 'PM' && this.hours < 12) this.hours += 12;
      if (this.ampm === 'AM' && this.hours === 12) this.hours = 0;
    } else {
      this.ampm = this.hours >= 12 ? 'PM' : 'AM';
      this.hours = this.hours % 12;
      if (this.hours === 0) this.hours = 12;
    }
  }


ngAfterViewInit(): void {
  this.updateVisibleLists();
}



private updateVisibleLists() {
  const repeatCount = 200; // ⬅️ repeat enough times to appear infinite
  const repeat = <T>(arr: T[]) => Array.from({ length: repeatCount }, () => arr).flat();

  this.visibleHours = repeat(this.hoursList);
  this.visibleMinutes = repeat(this.minutesList);
  this.visibleAmPm = repeat(this.ampmList);

  if (this.showSeconds) {
    this.visibleSeconds = repeat(this.secondsList);
  }
}



togglePicker() {
  this.isPickerOpen = !this.isPickerOpen;

  if (this.isPickerOpen) {
    this.setInitialTime();

    setTimeout(() => {
      this.setScrollBehavior(false);
      requestAnimationFrame(() => {
        this.centerOnSelected(true);
        this.eRef.nativeElement.getBoundingClientRect();
        this.setScrollBehavior(true);
      });
    });

    // ⏰ Start live updating seconds ONLY if user hasn’t changed manually
    if (!this.userInteracted) {
      this.startLiveClock();
    }
  } else {
    this.stopLiveClock();

    // ✅ reset interaction flag when closed
    this.userInteracted = false;
  }
}

private startLiveClock() {
  this.stopLiveClock(); // clear previous intervals if any

  let lastMinute = this.minutes; // 🧭 keep track of last minute

  this.liveClockInterval = setInterval(() => {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const ist = new Date(utc + 5.5 * 60 * 60 * 1000);

    this.seconds = ist.getSeconds();
    this.minutes = ist.getMinutes();
    this.hours = this.use24HourFormat ? ist.getHours() : ist.getHours() % 12 || 12;
    this.ampm = ist.getHours() >= 12 ? 'PM' : 'AM';

    // ⏱️ Scroll seconds column smoothly
    this.scrollToCurrentSeconds();

    // 🕐 If minute changed → center minutes column
    if (this.minutes !== lastMinute) {
      lastMinute = this.minutes;
      this.scrollToCurrentMinutes();
    }

    // 🕒 Optionally: also re-center hours when a new hour starts
    if (this.minutes === 0 && this.seconds === 0) {
      this.scrollToCurrentHours();
    }

  }, 1000);
}
private scrollToCurrentMinutes() {
  if (!this.minutesCol) return;

  const el = this.minutesCol.nativeElement;
  const centerOffset = (el.clientHeight / 2) - (this.itemHeight / 2);
  const index = this.minutesList.length + this.minutesList.indexOf(this.minutes);

  el.scrollTo({
    top: (index * this.itemHeight) - centerOffset,
    behavior: 'smooth'
  });
}

private scrollToCurrentHours() {
  if (!this.hoursCol) return;

  const el = this.hoursCol.nativeElement;
  const centerOffset = (el.clientHeight / 2) - (this.itemHeight / 2);
  const index = this.hoursList.length + this.hoursList.indexOf(this.hours);

  el.scrollTo({
    top: (index * this.itemHeight) - centerOffset,
    behavior: 'smooth'
  });
}

private stopLiveClock() {
  if (this.liveClockInterval) {
    clearInterval(this.liveClockInterval);
    this.liveClockInterval = null;
  }
}
private scrollToCurrentSeconds() {
  if (!this.secondsCol) return;

  const el = this.secondsCol.nativeElement;
  const centerOffset = (el.clientHeight / 2) - (this.itemHeight / 2);
  const index = this.secondsList.length + this.secondsList.indexOf(this.seconds);

  el.scrollTo({
    top: (index * this.itemHeight) - centerOffset,
    behavior: 'smooth'
  });
}
ngOnDestroy(): void {
  this.stopLiveClock();
}

private setScrollBehavior(enable: boolean) {
  const cols = [
    this.hoursCol?.nativeElement,
    this.minutesCol?.nativeElement,
    this.secondsCol?.nativeElement,
    this.ampmCol?.nativeElement,
  ].filter(Boolean) as HTMLElement[];

  cols.forEach(col => {
    if (enable) {
      col.classList.add('smooth');
    } else {
      col.classList.remove('smooth');
    }
  });
}

private waitForColumnsThenCenter() {
  let attempts = 0;
  const tryScroll = () => {
    attempts++;

    // make sure DOM elements exist
    if (this.hoursCol?.nativeElement && this.minutesCol?.nativeElement) {
      this.centerOnSelected(true); // ⬅️ instant scroll (no animation)
      return;
    }

    // if not yet ready, try again next frame (up to 60 frames ≈ 1 second)
    if (attempts < 60) {
      requestAnimationFrame(tryScroll);
    }
  };

  requestAnimationFrame(tryScroll);
}





  formatDisplayTime(): string {
    const hh = this.hours.toString().padStart(2, '0');
    const mm = this.minutes.toString().padStart(2, '0');
    const ss = this.seconds.toString().padStart(2, '0');
    const time = this.showSeconds ? `${hh}:${mm}:${ss}` : `${hh}:${mm}`;
    return this.use24HourFormat ? time : `${time} ${this.ampm}`;
  }

onScroll(type: 'hours' | 'minutes' | 'seconds' | 'ampm') {
  const el = this.getCol(type);
  if (!el) return;

  // 🧩 Stop live updates immediately when user scrolls manually
  if (!this.userInteracted) {
    this.userInteracted = true;
    this.stopLiveClock();
  }

  if (this.scrollTimers.get(type)) clearTimeout(this.scrollTimers.get(type));

  // Calculate which item is in the center right now
  const scrollTop = el.scrollTop;
  const centerOffset = (el.clientHeight / 2) - (this.itemHeight / 2);
  const position = (scrollTop + centerOffset) / this.itemHeight;

  let list: any[] = [];
  if (type === 'hours') list = this.hoursList;
  else if (type === 'minutes') list = this.minutesList;
  else if (type === 'seconds') list = this.secondsList;
  else if (type === 'ampm') list = this.ampmList;

  const index = Math.round(position) % list.length;
  const newValue = list[index];

  // 🟢 Instantly update selected value while scrolling
  if (type === 'hours') this.hours = newValue;
  if (type === 'minutes') this.minutes = newValue;
  if (type === 'seconds') this.seconds = newValue;
  if (type === 'ampm') this.ampm = newValue;

  // 🕐 Snap to exact center after scrolling stops
  const t = setTimeout(() => {
    const middleIndex = list.length + index;
    const targetScroll = (middleIndex * this.itemHeight) - centerOffset;

    el.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  }, 200);

  this.scrollTimers.set(type, t);
}



 selectValue(type: 'hours' | 'minutes' | 'seconds', value: number) {
  this.userInteracted = true;
  this.stopLiveClock(); // stop live updates

  if (type === 'hours') this.hours = value;
  else if (type === 'minutes') this.minutes = value;
  else if (type === 'seconds') this.seconds = value;

  // ✅ Wait a tick to let Angular render before centering
  setTimeout(() => this.centerOnSelected(true), 50);
}

setAmPm(value: 'AM' | 'PM') {
  this.userInteracted = true;
  this.stopLiveClock(); // stop live updates

  this.ampm = value;
  if (this.ampmCol?.nativeElement) {
    this.ampmCol.nativeElement.scrollTo({
      top: value === 'AM' ? 0 : this.itemHeight,
      behavior: 'smooth',
    });
  }
}

  private getCol(type: 'hours' | 'minutes' | 'seconds' | 'ampm'): HTMLElement | null {
    switch (type) {
      case 'hours': return this.hoursCol?.nativeElement;
      case 'minutes': return this.minutesCol?.nativeElement;
      case 'seconds': return this.secondsCol?.nativeElement;
      case 'ampm': return this.ampmCol?.nativeElement;
      default: return null;
    }
  }

private centerOnSelected(instant = false) {
  const centerOffset = (this.hoursCol.nativeElement.clientHeight / 2) - (this.itemHeight / 2);
  const behavior = instant ? 'auto' : 'smooth';

  const hoursMiddleIndex = this.hoursList.length + this.hoursList.indexOf(this.hours);
  const minutesMiddleIndex = this.minutesList.length + this.minutesList.indexOf(this.minutes);

  this.hoursCol.nativeElement.scrollTo({
    top: (hoursMiddleIndex * this.itemHeight) - centerOffset,
    behavior,
  });
  this.minutesCol.nativeElement.scrollTo({
    top: (minutesMiddleIndex * this.itemHeight) - centerOffset,
    behavior,
  });

  if (this.showSeconds && this.secondsCol) {
    const secondsMiddleIndex = this.secondsList.length + this.secondsList.indexOf(this.seconds);
    this.secondsCol.nativeElement.scrollTo({
      top: (secondsMiddleIndex * this.itemHeight) - centerOffset,
      behavior,
    });
  }

  if (!this.use24HourFormat && this.ampmCol) {
    const ampmCol = this.ampmCol.nativeElement;
    const ampmCenterOffset = (ampmCol.clientHeight / 2) - (this.itemHeight / 2);
    const middleIndex = this.ampmList.length + this.ampmList.indexOf(this.ampm);
    ampmCol.scrollTo({
      top: (middleIndex * this.itemHeight) - ampmCenterOffset,
      behavior,
    });
  }
}



  isActive(type: 'hours' | 'minutes' | 'seconds', value: number): boolean {
    if (type === 'hours') return value === this.hours;
    if (type === 'minutes') return value === this.minutes;
    if (type === 'seconds') return value === this.seconds;
    return false;
  }
}
