import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone:true,
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css'
})
export class BadgeComponent {
@Input() text: string = 'text';
@Input() bgColor: string = 'white';
@Input() color: string = 'gray';
@Input() activeBGColor: string = '#7c3aedff';
@Input() activeColor: string = 'white';
@Input() borderRadius: string = '9999px'; 

  isHovered: boolean = false; // track hover state

}
