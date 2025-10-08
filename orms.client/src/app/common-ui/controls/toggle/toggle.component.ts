import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule],               // <- needed for ngStyle, etc.
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'] // <- correct property name
})
export class ToggleComponent {
  @Input() checked = false;
  @Input() color = '#4CAF50';            // color from Storybook
  @Output() checkedChange = new EventEmitter<boolean>(); // for two-way pattern
  @Output() toggleChange = new EventEmitter<boolean>();

  onToggle(event: Event) {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;                // update internal state
    this.checkedChange.emit(this.checked);       // emit two-way event
    this.toggleChange.emit(this.checked);        // additional output if needed
  }
}
