import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../common-ui/controls/button/button.component';

@Component({
  selector: 'app-view-team-members',
  templateUrl: './view-team-members.component.html',
  styleUrl: './view-team-members.component.css',
  standalone: true,
  imports: [ButtonComponent],
})
export class ViewTeamMembersComponent {
  @Input() TeamMemberName: string = 'Ganesh';
  @Input() TeamMemberDesig: string = 'UI/UX Designer';
  @Input() TeamMemberPhoto: string =
    'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735';
}
