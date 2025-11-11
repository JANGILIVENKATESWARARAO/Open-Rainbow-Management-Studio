import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, HostBinding, Input } from '@angular/core';
import '../../assests/icons/icon-registry';

@Component({
  selector: 'orms-icon',
  standalone: true, // <-- 1. Set to standalone
  imports: [], // <-- 2. Only import CommonModule
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'], // <-- 3. Fixed 'styleUrl' to 'styleUrls'
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA 
  ]
})
export class IconComponent {
  @Input() name: string = 'save';
}