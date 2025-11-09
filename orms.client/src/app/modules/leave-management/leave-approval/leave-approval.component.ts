import { Component } from '@angular/core';
import { NoticeBannerComponent } from '../../../common-ui/feature-components/notice-banner/notice-banner';
import { RecentLeaveRequestComponent } from '../recent-leave-request/recent-leave-request.component';
import { CountWidgetComponent } from '../../../common-ui/feature-components/count-widget/count-widget.component';
import { ButtonComponent } from '../../../common-ui/controls/button/button.component';
import { ChipComponent } from '../../../common-ui/controls/chip/chip.component';

@Component({
    selector: 'orms-leave-approval',
    templateUrl: './leave-approval.component.html',
    styleUrl: './leave-approval.component.css',
    imports: [NoticeBannerComponent, RecentLeaveRequestComponent, CountWidgetComponent, ButtonComponent, ChipComponent]
})
export class LeaveApprovalComponent {

}
