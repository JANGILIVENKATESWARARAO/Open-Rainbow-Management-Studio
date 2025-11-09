import { Component } from '@angular/core';
import { ChipComponent } from '../../../common-ui/controls/chip/chip.component';
import { ButtonComponent } from '../../../common-ui/controls/button/button.component';

@Component({
    selector: 'orms-recent-payslips',
    templateUrl: './recent-payslips.component.html',
    styleUrl: './recent-payslips.component.css',
    imports: [ChipComponent, ButtonComponent]
})
export class RecentPayslipsComponent {

}
