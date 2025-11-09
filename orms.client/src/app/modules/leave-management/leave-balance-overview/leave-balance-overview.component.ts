import { Component } from '@angular/core';
import { ButtonComponent } from '../../../common-ui/controls/button/button.component';
import { CountWidgetComponent } from '../../../common-ui/feature-components/count-widget/count-widget.component';
import { ProgressBarComponent } from '../../../common-ui/controls/progress-bar/progress-bar.component';

@Component({
    selector: 'orms-leave-balance-overview',
    templateUrl: './leave-balance-overview.component.html',
    styleUrl: './leave-balance-overview.component.css',
    imports: [ButtonComponent, CountWidgetComponent, ProgressBarComponent]
})
export class LeaveBalanceOverviewComponent {

}
