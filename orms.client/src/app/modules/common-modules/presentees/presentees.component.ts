import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-presentees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './presentees.component.html',
  styleUrl: './presentees.component.css',

})
export class PresenteesComponent {
  @Input() Title: string = 'Present Today';
  @Input() Presentees:string='0';
  @Input() isViewAllActive: boolean = true;

}
