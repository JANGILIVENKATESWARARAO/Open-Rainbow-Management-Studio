import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

export interface DropDown {
  name: string;
  value: any;
}

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class DropDownComponent implements AfterViewInit, OnDestroy {
  @Input() label: string = 'Gender';
  @Input() placeHolder: string = 'Select Gender';
  @Input() isRequired: boolean = false;
  @Input() options: DropDown[] = [];
  @Output() selectedChange = new EventEmitter<any>();
  @Input() draggable: boolean = true;
  @Input() isSave: boolean = false;
  selectedValue: string | null = null;
  isOpenUp: boolean = false;

  private startY = 0;
  private startHeight = 0;
  private resizing = false;
  private mouseMoveListener?: (event: MouseEvent) => void;
  private mouseUpListener?: (event: MouseEvent) => void;
  private clickTimeout: any = null;
  private clickCount: number = 0;

  private readonly OPTION_HEIGHT = 38;
  private readonly HANDLE_HEIGHT = 28;
  private readonly HANDLE_BUFFER = 0;
  private readonly DEFAULT_NO_OF_OPTIONS = 3;


  constructor(private eRef: ElementRef, private renderer: Renderer2) { }

  selectOption(option: DropDown) {
    this.selectedValue = option.name;
    this.selectedChange.emit(option.value);
    setTimeout(() => this.closeDropdown(), 0);
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.clickCount++;

      if (this.clickCount === 1) {
        this.clickTimeout = setTimeout(() => {
          this.clickCount = 0; // reset if only single click
        }, 300);
      } else if (this.clickCount === 2) {
        clearTimeout(this.clickTimeout);
        this.clickCount = 0;
        this.closeDropdown(); // ✅ closes only on double-click outside
      }
    }
  }


  @HostListener('change', ['$event'])
  onToggle(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.decideDropdownDirection();
      this.setInitialHeight();
    }
  }

  private decideDropdownDirection() {
    const dropdown = this.eRef.nativeElement.querySelector(
      '.custom-dropdown'
    ) as HTMLElement;
    const list = this.eRef.nativeElement.querySelector(
      '.custom-dropdown-list'
    ) as HTMLElement;

    if (!dropdown || !list) return;

    list.style.visibility = 'hidden';
    list.style.display = 'block';
    const listHeight = list.offsetHeight || 150;
    list.style.display = '';
    list.style.visibility = '';

    const rect = dropdown.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    this.isOpenUp = spaceBelow < listHeight && spaceAbove > spaceBelow;

    if (this.isOpenUp) {
      list.classList.add('open-up');
    } else {
      list.classList.remove('open-up');
    }
  }

  private setInitialHeight() {
    const list = this.eRef.nativeElement.querySelector('.custom-dropdown-list') as HTMLElement;
    if (!list) return;

    const totalHeight = (this.options.length * this.OPTION_HEIGHT) + this.HANDLE_HEIGHT + this.HANDLE_BUFFER;
    console.log(totalHeight,"totalHeight");
    const initialHeight = Math.min(this.DEFAULT_NO_OF_OPTIONS * this.OPTION_HEIGHT + this.HANDLE_BUFFER, totalHeight); // keep your initial cap

    this.renderer.setStyle(list, 'height', `${initialHeight + 10}px`);
    // this.renderer.setStyle(list, 'max-height', `${totalHeight - 5}px`);
    this.renderer.setStyle(list, 'max-height', `${totalHeight - 10}px`);
    this.renderer.setStyle(list, 'overflow-y', initialHeight >= totalHeight ? 'hidden' : 'auto');
    this.renderer.setStyle(list, 'resize', 'none');
    this.renderer.setStyle(list, 'transform-origin', 'top');
  }

  private closeDropdown() {
    const checkbox: HTMLInputElement | null =
      this.eRef.nativeElement.querySelector('.dropdown-toggle');
    if (checkbox) checkbox.checked = false;
  }

  ngAfterViewInit() {
    if (!this.draggable) return; // don't set up dragging if not enabled

    const list = this.eRef.nativeElement.querySelector('.custom-dropdown-list') as HTMLElement;
    const handle = this.eRef.nativeElement.querySelector('.resize-hr') as HTMLElement;

    if (!list || !handle) return;

    handle.addEventListener('mousedown', (event: MouseEvent) => {
      this.startY = event.clientY;
      this.startHeight = list.offsetHeight;
      this.resizing = true;
      handle.classList.add('dragging'); // shrink handle when drag starts
      document.body.style.cursor = 'ns-resize';
      document.body.style.userSelect = 'none';
      event.preventDefault();
      event.stopPropagation();
    });

    document.addEventListener('mousemove', (event: MouseEvent) => {
      if (!this.resizing) return;

      const diff = event.clientY - this.startY;

      let newHeight = this.startHeight + diff;

      const totalHeight =
        (this.options.length * this.OPTION_HEIGHT) +
        this.HANDLE_HEIGHT +
        this.HANDLE_BUFFER;

      const minHeight = Math.min(
        totalHeight,
        (this.DEFAULT_NO_OF_OPTIONS * this.OPTION_HEIGHT + 13)
      );

      newHeight = Math.min(newHeight, totalHeight);
      newHeight = Math.max(newHeight, minHeight);
console.log("newHeight",newHeight);
      const list = this.eRef.nativeElement.querySelector('.custom-dropdown-list') as HTMLElement;
      list.style.height = `${newHeight}px`;
      list.style.overflowY = newHeight >= totalHeight ? 'hidden' : 'auto';
    });

    document.addEventListener('mouseup', () => {
      if (this.resizing) {
        this.resizing = false;
        handle.classList.remove('dragging');
        document.body.style.cursor = 'default';
        document.body.style.userSelect = '';
      }
    });
  }

  private preventContextMenu = (event: Event) => {
    event.preventDefault();
  };

  ngOnDestroy() {
    if (this.mouseMoveListener) {
      document.removeEventListener('mousemove', this.mouseMoveListener);
    }
    if (this.mouseUpListener) {
      document.removeEventListener('mouseup', this.mouseUpListener);
    }
    document.removeEventListener('contextmenu', this.preventContextMenu);
  }
}