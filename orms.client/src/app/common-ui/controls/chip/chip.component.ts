import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chip',
  standalone: true,
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.css',
})
export class ChipComponent {
  @Input() text: string = 'text';
  @Input() bgColor: string = 'white';
  @Input() color: string = 'gray';
  @Input() activeBGColor: string = '#7c3aedff';
  @Input() activeColor: string = 'white';
  @Input() borderRadius: string = '9999px';

  isHovered: boolean = false;
}
