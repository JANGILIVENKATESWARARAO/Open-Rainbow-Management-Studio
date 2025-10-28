import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../../controls/button/button.component';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrl: './confirm-popup.component.css',
  standalone: true,
})
export class ConfirmPopupComponent {
  @Input() label: string = 'Are you sure?';
  @Input() yesButton: string = 'Yes';
  @Input() noButton: string = 'No';
  @Input() title: string = '';
}
