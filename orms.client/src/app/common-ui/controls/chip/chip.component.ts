import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chip',
  standalone: true,
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css'],
})
export class ChipComponent implements OnChanges {
  @Input() text: string = 'text';
  @Input() bgColor: string = 'white';
  @Input() color: string = 'gray';
  @Input() activeBGColor: string = '#7c3aedff';
  @Input() activeColor: string = 'white';
  @Input() borderRadius: string = '9999px';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  height = '28px';
  width = 'auto';
  fontSize = '0.875rem'; // text-sm
  horizontalGap = '12px';
  isHovered: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['size']) this.updateSize();
  }

  ngOnInit(): void {
    this.updateSize();
  }

  updateSize() {
    switch (this.size) {
      case 'large':
       this.height = '38px';
        this.fontSize = '1.4rem';
        this.horizontalGap = '24px';
        break;
      case 'small':
        this.height = '22px';
        this.fontSize = '.8rem';
        this.horizontalGap = '10px';
        break;
      case 'medium':
      default:
       this.height = '28px';
        this.fontSize = '1rem';
        this.horizontalGap = '16px';
        break;
    }
  }
}
