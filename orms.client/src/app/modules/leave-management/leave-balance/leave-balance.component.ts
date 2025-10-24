import { Component } from '@angular/core';
import { ButtonComponent } from '../../../common-ui/controls/button/button.component';
import { CountWidgetComponent } from '../../../common-ui/feature-components/count-widget/count-widget.component';
import { ProgressBarComponent } from '../../../common-ui/controls/progress-bar/progress-bar.component';

@Component({
  selector: 'app-leave-balance',
  templateUrl: './leave-balance.component.html',
  styleUrl: './leave-balance.component.css',
  standalone: true,
  imports: [ButtonComponent,CountWidgetComponent,ProgressBarComponent]
})
export class LeaveBalanceComponent {

}
