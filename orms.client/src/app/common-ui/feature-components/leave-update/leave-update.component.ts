import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-leave-update',
  templateUrl: './leave-update.component.html',
  styleUrl: './leave-update.component.css',
  standalone: true
})
export class LeaveUpdateComponent {
  @Input() Title: string = 'Leave Balance';
  @Input() leaveBalance: string = '18';
  @Input() usedLeaves: string = '7';
  @Input() Availabledays: string = 'Available Days';
  @Input() Used: string = 'Used:';
}
