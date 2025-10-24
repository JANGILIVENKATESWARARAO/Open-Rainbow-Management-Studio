import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrl: './basic-card.component.css',
  standalone: true
})
export class BasicCardComponent {
  @Input() title: string = 'title';
  @Input() currentStep: number = 1;
}
