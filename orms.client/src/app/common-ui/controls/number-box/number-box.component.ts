import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'orms-number-box',
  templateUrl: './number-box.component.html',
  styleUrl: './number-box.component.css',
  imports: [],
})
export class NumberBoxComponent {
  @Input() label: string = 'Casual';
  @Input() isRequired: boolean = true;
  @Input() Placeholder: string = '0.0';
  @Output() numberBox = new EventEmitter<number>();
}
