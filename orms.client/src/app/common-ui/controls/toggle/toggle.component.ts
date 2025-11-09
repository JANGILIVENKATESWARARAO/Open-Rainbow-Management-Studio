// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'orms-toggle',
//   standalone: true,
//   imports: [CommonModule],               
//   templateUrl: './toggle.component.html',
//   styleUrls: ['./toggle.component.css'] 
// })
// export class ToggleComponent {
//   @Input() checked = false;
//   @Input() color = '#4CAF50';            
//   @Output() checkedChange = new EventEmitter<boolean>(); 
//   @Output() toggleChange = new EventEmitter<boolean>();
//   @Input() label: string = '';
//   @Input() labelPosition: 'left' | 'right' = 'right';
//   @Input() labelColor: string = '#333';   

  

//   onToggle(event: Event) {
//     const input = event.target as HTMLInputElement;
//     this.checked = input.checked;                
//     this.checkedChange.emit(this.checked);      
//     this.toggleChange.emit(this.checked);       
//   }
// }



// import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'orms-toggle',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './toggle.component.html',
//   styleUrls: ['./toggle.component.css']
// })
// export class ToggleComponent implements OnChanges {
//   @Input() checked = false;
//   @Input() color = '#4CAF50';
//   @Output() checkedChange = new EventEmitter<boolean>();
//   @Output() toggleChange = new EventEmitter<boolean>();
//   @Input() label: string = '';
//   @Input() labelPosition: 'left' | 'right' = 'right';
//   @Input() labelColor: string = '#333';
//   @Input() size: 'large' | 'medium' | 'small' = 'small';


//   toggleWidth = '20px';
//   toggleHeight = '10px';
//   knobSize = '8px';
//   knobTranslate = '10px';

//   ngOnChanges(changes: SimpleChanges): void {
//     if (changes['size']) this.updateSize();
//   }

//   ngOnInit(): void {
//     this.updateSize();
//   }


//   updateSize() {
//     switch (this.size) {
//       case 'large':
//         this.toggleWidth = '60px';
//         this.toggleHeight = '40px';
//         this.knobSize = '5px';
//         this.knobTranslate = '20px';
//         break;
//       case 'medium':
//         this.toggleWidth = '40px';
//         this.toggleHeight = '20px';
//         this.knobSize = '12px';
//         this.knobTranslate = '20px';
//         break;
//       case 'small':
//       default:
//         this.toggleWidth = '30px';
//         this.toggleHeight = '15px';
//         this.knobSize = '10px';
//         this.knobTranslate = '12px';
//         break;
//     }
//   }

//   onToggle(event: Event) {
//     const input = event.target as HTMLInputElement;
//     this.checked = input.checked;
//     this.checkedChange.emit(this.checked);
//     this.toggleChange.emit(this.checked);
//   }
// }

import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'orms-toggle',
    imports: [CommonModule],
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnChanges {
  @Input() checked = false;
  @Input() color = '#4CAF50';
  @Input() tickColor: string = '#fff';
  @Output() checkedChange = new EventEmitter<boolean>();
  @Output() toggleChange = new EventEmitter<boolean>();
  @Input() label: string = '';
  @Input() labelPosition: 'left' | 'right' = 'right';
  @Input() labelColor: string = '#333';
  @Input() size: 'large' | 'medium' | 'small' = 'small';
  @Input() useCheckbox: boolean = false;

  toggleWidth = '40px';
  toggleHeight = '20px';
  knobSize = '16px';
  knobTranslate = '20px';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['size']) this.updateSize();
  }

  ngOnInit(): void {
    this.updateSize();
  }

  updateSize() {
    switch (this.size) {
      case 'large':
        this.toggleWidth = '60px';
        this.toggleHeight = '34px';
        this.knobSize = '26px';
        this.knobTranslate = '26px';
        break;
      case 'medium':
        this.toggleWidth = '44px';
        this.toggleHeight = '24px';
        this.knobSize = '18px';
        this.knobTranslate = '20px';
        break;
      case 'small':
      default:
        this.toggleWidth = '34px';
        this.toggleHeight = '18px';
        this.knobSize = '14px';
        this.knobTranslate = '16px';
        break;
    }
  }

  onToggle(event: Event) {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;
    this.checkedChange.emit(this.checked);
    this.toggleChange.emit(this.checked);
  }
}
