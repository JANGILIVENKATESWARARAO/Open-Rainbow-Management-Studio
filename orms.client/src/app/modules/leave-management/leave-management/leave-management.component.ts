import { Component } from '@angular/core';
import { NoticeBannerComponent } from '../../../common-ui/feature-components/notice-banner/notice-banner';
import { DropDownComponent } from '../../../common-ui/controls/drop-down/drop-down.component';
import { ToggleComponent } from '../../../common-ui/controls/toggle/toggle.component';
import { NumberBoxComponent } from '../../../common-ui/controls/number-box/number-box.component';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrl: './leave-management.component.css',
  standalone: true,
  imports: [NoticeBannerComponent, DropDownComponent, ToggleComponent, NumberBoxComponent]
})
export class LeaveManagementComponent {
  designationOptions = [
    { name: 'Software Engineer', value: 'software_engineer' },
    { name: 'Senior Software Engineer', value: 'senior_software_engineer' },
    { name: 'Team Lead', value: 'team_lead' },
    { name: 'Project Manager', value: 'project_manager' },
    { name: 'HR Manager', value: 'hr_manager' },
    { name: 'Recruiter', value: 'recruiter' },
  ];

}
