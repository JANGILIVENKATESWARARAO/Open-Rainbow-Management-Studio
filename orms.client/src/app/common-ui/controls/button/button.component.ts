import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
@Input() text: string = 'text';
@Input() bgColor: string = 'white';
@Input() color: string = 'red';
@Input() activeBGColor: string = 'red';
@Input() activeColor: string = 'black';
@Input() borderRadius: string = '5px';
 
  isHovered: boolean = false; // track hover state
 
}
