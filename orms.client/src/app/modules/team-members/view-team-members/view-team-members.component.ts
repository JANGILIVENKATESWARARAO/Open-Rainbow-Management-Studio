import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../common-ui/controls/button/button.component';
import { TeamMembers } from '../../../common-ui/assests/view-models/common-view-models';


@Component({
    selector: 'orms-view-team-members',
    templateUrl: './view-team-members.component.html',
    styleUrl: './view-team-members.component.css',
    imports: [ButtonComponent]
})
export class ViewTeamMembersComponent {
  @Input() data: TeamMembers[] = [];
}
