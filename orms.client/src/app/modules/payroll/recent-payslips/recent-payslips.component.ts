import { Component } from '@angular/core';
import { ChipComponent } from '../../../common-ui/controls/chip/chip.component';
import { ButtonComponent } from '../../../common-ui/controls/button/button.component';

@Component({
  selector: 'app-recent-payslips',
  standalone: true,
  templateUrl: './recent-payslips.component.html',
  styleUrl: './recent-payslips.component.css',
  imports: [ChipComponent,ButtonComponent]
})
export class RecentPayslipsComponent {

}
