import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule],               
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'] 
})
export class ToggleComponent {
  @Input() checked = false;
  @Input() color = '#4CAF50';            
  @Output() checkedChange = new EventEmitter<boolean>(); 
  @Output() toggleChange = new EventEmitter<boolean>();
  @Input() label: string = '';
  @Input() labelPosition: 'left' | 'right' = 'right';
  @Input() labelColor: string = '#333';   

  

  onToggle(event: Event) {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;                
    this.checkedChange.emit(this.checked);      
    this.toggleChange.emit(this.checked);       
  }
}
