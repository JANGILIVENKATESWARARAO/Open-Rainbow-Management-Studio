import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../common-ui/controls/button/button.component';
import { TeamMembers } from '../../../common-ui/assests/view-models/common-view-models';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-view-team-members',
    templateUrl: './view-team-members.component.html',
    styleUrl: './view-team-members.component.css',
    imports: [ButtonComponent, CommonModule]
})
export class ViewTeamMembersComponent {
  @Input() data: TeamMembers[] = [];
}
