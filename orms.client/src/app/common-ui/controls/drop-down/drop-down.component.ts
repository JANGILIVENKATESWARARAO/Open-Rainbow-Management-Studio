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

  selectedValue: string | null = null;
  isOpenUp: boolean = false;

  private startY = 0;
  private startHeight = 0;
  private resizing = false;
  private mouseMoveListener?: (event: MouseEvent) => void;
  private mouseUpListener?: (event: MouseEvent) => void;
  private clickTimeout: any = null;
  private clickCount: number = 0;

  constructor(private eRef: ElementRef, private renderer: Renderer2) {}

  selectOption(option: DropDown) {
    this.selectedValue = option.name;
    this.selectedChange.emit(option.value);
    setTimeout(() => this.closeDropdown(), 0);
  }

  // @HostListener('document:click', ['$event'])
  // handleClickOutside(event: MouseEvent) {
  //   if (this.resizing) return;
    
  //   if (!this.eRef.nativeElement.contains(event.target)) {
  //     this.closeDropdown();
  //   }
  // }
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

private getZoomLevel(): number {
  if (window.visualViewport) {
    return window.visualViewport.scale;
  }
  return window.devicePixelRatio || 1;
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
    const list = this.eRef.nativeElement.querySelector(
      '.custom-dropdown-list'
    ) as HTMLElement;

    if (list) {
      const optionHeight = 38;
      const handleHeight = 28; // Height of .resize-hr bar
const buffer = handleHeight + 8;
      // const totalHeight = this.options.length * optionHeight;
      const totalHeight = (this.options.length * optionHeight) + buffer;
      const initialHeight = Math.min(244, totalHeight);
      const maxHeight = totalHeight;

      this.renderer.setStyle(list, 'height', `${initialHeight}px`);
      this.renderer.setStyle(list, 'max-height', `${maxHeight}px`);
      this.renderer.setStyle(list, 'overflow-y', 'auto');
      this.renderer.setStyle(list, 'resize', 'none');
      this.renderer.setStyle(list, 'transform-origin', 'top');
    }
  }

  private adjustDropdownPosition(list: HTMLElement) {
    const dropdown = this.eRef.nativeElement.querySelector(
      '.custom-dropdown'
    ) as HTMLElement;

    if (!dropdown || !list) return;

    const rect = dropdown.getBoundingClientRect();
    const listRect = list.getBoundingClientRect();

    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    if (spaceBelow < listRect.height && spaceAbove > spaceBelow) {
      list.classList.add('open-up');
    } else {
      list.classList.remove('open-up');
    }
  }

  private closeDropdown() {
    const checkbox: HTMLInputElement | null =
      this.eRef.nativeElement.querySelector('.dropdown-toggle');
    if (checkbox) checkbox.checked = false;
  }

ngAfterViewInit() {
  const list = this.eRef.nativeElement.querySelector(
    '.custom-dropdown-list'
  ) as HTMLElement;

  const handle = this.eRef.nativeElement.querySelector(
    '.resize-hr'
  ) as HTMLElement;

  if (!list || !handle) return;

  handle.addEventListener('mousedown', (event: MouseEvent) => {
    this.startY = event.clientY;
    this.startHeight = list.offsetHeight;
    this.resizing = true;
    handle.classList.add('dragging'); // 👈 shrink handle when drag starts
    document.body.style.cursor = 'ns-resize';
    document.body.style.userSelect = 'none';
    event.preventDefault();
    event.stopPropagation();
  });

  document.addEventListener('mousemove', (event: MouseEvent) => {
    if (!this.resizing) return;
    const diff = event.clientY - this.startY;
    let newHeight = this.startHeight + diff;

    const totalHeight = this.options.length * 38;
    newHeight = Math.min(newHeight, totalHeight +10);
    newHeight = Math.max(newHeight, 80);

    list.style.height = `${newHeight}px`;
    // list.style.paddingBottom = '10px';
    list.style.overflowY = newHeight >= totalHeight ? 'hidden' : 'auto';
  });

  document.addEventListener('mouseup', () => {
    if (this.resizing) {
      this.resizing = false;
      handle.classList.remove('dragging'); // 👈 back to normal width
      document.body.style.cursor = 'default';
      document.body.style.userSelect = '';
    }
  });
}



  private startResize(event: MouseEvent, list: HTMLElement) {
    this.startY = event.clientY;
    this.startHeight = list.offsetHeight;
    this.resizing = true;
    
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    
    document.body.style.cursor = 'ns-resize';
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    
    document.addEventListener('mousemove', this.mouseMoveListener!, { passive: false });
    document.addEventListener('mouseup', this.mouseUpListener!, { passive: false });
    
    document.addEventListener('contextmenu', this.preventContextMenu, { passive: false });
  }

  private preventContextMenu = (event: Event) => {
    event.preventDefault();
  };
// private handleMouseMove(event: MouseEvent) {
//   if (!this.resizing) return;

//   event.preventDefault();
//   event.stopPropagation();

//   const list = this.eRef.nativeElement.querySelector(
//     '.custom-dropdown-list'
//   ) as HTMLElement;

//   if (!list) return;

//   const diff = event.clientY - this.startY;
//   let newHeight = this.startHeight + diff;

//   const totalHeight = this.options.length * 38;
//   const minHeight = 80;
  
//   newHeight = Math.min(newHeight, totalHeight + 20);
//   newHeight = Math.max(newHeight, minHeight);

//   list.style.height = `${newHeight}px`;
//   list.style.minHeight = `${newHeight}px`;
//   list.style.maxHeight = `${Math.max(newHeight, totalHeight)}px`;
  
//   this.adjustDropdownPosition(list);

//   console.log('📏 Resize values:', { 
//     'Start Y': this.startY,
//     'Current Y': event.clientY,
//     'Difference': diff,
//     'Start Height': this.startHeight,
//     'New Height': newHeight,
//     'Applied Height': list.style.height,
//     'Actual Height': list.offsetHeight
//   });
// }

private handleMouseMove(event: MouseEvent) {
  if (!this.resizing) return;

  event.preventDefault();
  event.stopPropagation();

  const list = this.eRef.nativeElement.querySelector(
    '.custom-dropdown-list'
  ) as HTMLElement;

  if (!list) return;

  const diff = event.clientY - this.startY;
  let newHeight = this.startHeight + diff;

  const totalHeight = this.options.length * 38; // height of all options
  const minHeight = 80;

  // Apply constraints
  newHeight = Math.min(newHeight, totalHeight); // Don't allow height to exceed total needed

  // newHeight = Math.min(newHeight, totalHeight + 20);
  newHeight = Math.max(newHeight, minHeight);

  // Apply height dynamically
  list.style.height = `${newHeight}px`;
  list.style.minHeight = `${newHeight}px`;
  list.style.maxHeight = `${Math.max(newHeight, totalHeight)}px`;

  // ✅ Hide scrollbar if all items visible
  if (newHeight >= totalHeight) {
    this.renderer.setStyle(list, 'overflow-y', 'hidden');
  } else {
    this.renderer.setStyle(list, 'overflow-y', 'auto');
  }

  // Adjust position if stretched upward/downward
  this.adjustDropdownPosition(list);

  console.log('📏 Resize values:', { 
    'Start Y': this.startY,
    'Current Y': event.clientY,
    'Difference': diff,
    'Start Height': this.startHeight,
    'New Height': newHeight,
    'Total Height': totalHeight,
    'Scrollbar Hidden': newHeight >= totalHeight
  });
}


  private handleMouseUp(event: MouseEvent) {
    if (!this.resizing) return;

    console.log('Ending resize...');
    
    event.preventDefault();
    event.stopPropagation();

    this.resizing = false;
    
    document.body.style.cursor = 'default';
    document.body.style.userSelect = '';
    document.body.style.webkitUserSelect = '';

    const list = this.eRef.nativeElement.querySelector(
      '.custom-dropdown-list'
    ) as HTMLElement;

    if (list) {
      const currentHeight = list.offsetHeight;
      list.style.height = `${currentHeight}px`;
      list.style.transition = 'none'; 
      list.style.cursor = 'default';
    }

    document.removeEventListener('mousemove', this.mouseMoveListener!);
    document.removeEventListener('mouseup', this.mouseUpListener!);
    document.removeEventListener('contextmenu', this.preventContextMenu);
  }

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


// import { CommonModule } from '@angular/common';
// import {
//   Component,
//   ElementRef,
//   EventEmitter,
//   HostListener,
//   Input,
//   Output,
//   Renderer2,
// } from '@angular/core';

// export interface DropDown {
//   name: string;
//   value: any;
// }

// @Component({
//   selector: 'app-drop-down',
//   templateUrl: './drop-down.component.html',
//   styleUrl: './drop-down.component.css',
//   standalone: true,
//   imports: [CommonModule],
// })
// export class DropDownComponent {
//   @Input() label: string = 'Gender';
//   @Input() placeHolder: string = 'Select Gender';
//   @Input() isRequired: boolean = false;
//   @Input() options: DropDown[] = [];
//   @Output() selectedChange = new EventEmitter<any>();

//   selectedValue: string | null = null;
//   isOpenUp: boolean = false;
//   private clickTimeout: any = null;
// private clickCount: number = 0;

//   constructor(private eRef: ElementRef, private renderer: Renderer2) {}

//   selectOption(option: DropDown) {
//     this.selectedValue = option.name;
//     this.selectedChange.emit(option.value);
//     setTimeout(() => this.closeDropdown(), 0);
//   }

//   // @HostListener('document:click', ['$event'])
//   // handleClickOutside(event: MouseEvent) {
//   //   if (!this.eRef.nativeElement.contains(event.target)) {
//   //     this.closeDropdown();
//   //   }
//   // }
//   @HostListener('document:click', ['$event'])
//   handleClickOutside(event: MouseEvent) {
//     if (!this.eRef.nativeElement.contains(event.target)) {
//       this.clickCount++;

//       if (this.clickCount === 1) {
//         this.clickTimeout = setTimeout(() => {
//           this.clickCount = 0; // reset if only single click
//         }, 3000);
//       } else if (this.clickCount === 2) {
//         clearTimeout(this.clickTimeout);
//         this.clickCount = 0;
//         this.closeDropdown(); // ✅ closes only on double-click outside
//       }
//     }
//   }


//   @HostListener('change', ['$event'])
//   onToggle(event: Event) {
//     const checkbox = event.target as HTMLInputElement;
//     if (checkbox.checked) {
//       this.decideDropdownDirection();
//       this.setInitialHeight();
//     }
//   }

//   private decideDropdownDirection() {
//     const dropdown = this.eRef.nativeElement.querySelector(
//       '.custom-dropdown'
//     ) as HTMLElement;
//     const list = this.eRef.nativeElement.querySelector(
//       '.custom-dropdown-list'
//     ) as HTMLElement;

//     if (!dropdown || !list) return;

//     list.style.visibility = 'hidden';
//     list.style.display = 'block';
//     const listHeight = list.offsetHeight || 150;
//     list.style.display = '';
//     list.style.visibility = '';

//     const rect = dropdown.getBoundingClientRect();
//     const spaceBelow = window.innerHeight - rect.bottom;
//     const spaceAbove = rect.top;

//     this.isOpenUp = spaceBelow < listHeight && spaceAbove > spaceBelow;

//     if (this.isOpenUp) {
//       list.classList.add('open-up');
//     } else {
//       list.classList.remove('open-up');
//     }
//   }

//   private setInitialHeight() {
//     const list = this.eRef.nativeElement.querySelector(
//       '.custom-dropdown-list'
//     ) as HTMLElement;
//     if (list) {
//       // Each option ~38px tall (label + padding)
//       const optionHeight = 38;
//       const totalHeight = this.options.length * optionHeight;

//       // Set limits
//       const initialHeight = Math.min(240, totalHeight);
//       const maxHeight = totalHeight;

//       this.renderer.setStyle(list, 'height', `${initialHeight}px`);
//       this.renderer.setStyle(list, 'max-height', `${maxHeight}px`);
//       this.renderer.setStyle(list, 'overflow-y', 'auto');
//       this.renderer.setStyle(list, 'resize', 'vertical');
//     }
//   }

//   private closeDropdown() {
//     const checkbox: HTMLInputElement | null =
//       this.eRef.nativeElement.querySelector('.dropdown-toggle');
//     if (checkbox) checkbox.checked = false;
//   }
// }
