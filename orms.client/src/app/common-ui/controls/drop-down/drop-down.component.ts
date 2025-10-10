import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

export interface DropDown {
  name: string;
  value: any;
}
@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class DropDownComponent {
  @Input() label: string = 'Gender';
  @Input() placeHolder: string = 'Select Gender';
  @Input() isRequired: boolean = false;
  @Output() selectedChange = new EventEmitter<any>();
  @Input() options: DropDown[] = [];

  selectedValue: any;
  selectOption(option: DropDown) {
    this.selectedValue = option.name;
    this.selectedChange.emit(option.value);
  }
}
