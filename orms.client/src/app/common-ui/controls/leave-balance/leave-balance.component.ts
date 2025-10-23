import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CountWidgetComponent } from '../../feature-components/count-widget/count-widget.component';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-leave-balance',
  templateUrl: './leave-balance.component.html',
  styleUrl: './leave-balance.component.css',
  standalone: true,
  imports: [ButtonComponent,CountWidgetComponent,ProgressBarComponent]
})
export class LeaveBalanceComponent {

}
