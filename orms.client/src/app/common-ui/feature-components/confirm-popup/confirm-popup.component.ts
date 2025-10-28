import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../../controls/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrl: './confirm-popup.component.css',
  standalone: true,
  imports: [ButtonComponent,CommonModule],
})
export class ConfirmPopupComponent {
  @Input() label: string = 'You are about to permanently delete the employee: Sohan kumar. This action cannot be undone';
  @Input() yesButton: string = 'Yes';
  @Input() noButton: string = 'No';
  @Input() title: string = 'Are you sure?';
  @Input() changeIcon: string = '';
  @Input() borderColor: string = 'red';
}
