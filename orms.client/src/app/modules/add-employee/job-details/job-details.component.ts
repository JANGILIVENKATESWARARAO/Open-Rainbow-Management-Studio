
import { Component } from '@angular/core';
import { DropDownComponent } from '../../../common-ui/controls/drop-down/drop-down.component';
import { TextBoxComponent } from '../../../common-ui/controls/text-box/text-box.component';
import { CountWidgetComponent } from '../../../common-ui/feature-components/count-widget/count-widget.component';


@Component({
    selector: 'orms-job-details',
    imports: [TextBoxComponent, DropDownComponent, CountWidgetComponent],
    templateUrl: './job-details.component.html',
    styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {
  departmentOptions = [
    { name: 'HR', value: 1 },
    { name: 'IT', value: 2 },
    { name: 'Finance', value: 3 },
  ];

  designationOptions = [
    { name: 'Software Engineer', value: 'software_engineer' },
    { name: 'Senior Software Engineer', value: 'senior_software_engineer' },
    { name: 'Team Lead', value: 'team_lead' },
    { name: 'Project Manager', value: 'project_manager' },
    { name: 'HR Manager', value: 'hr_manager' },
    { name: 'Recruiter', value: 'recruiter' },
  ];

  payLevelOptions = [
    { name: 'Grade A', value: 'A' },
    { name: 'Grade B', value: 'B' },
    { name: 'Grade C', value: 'C' },
    { name: 'Grade D', value: 'D' },
    { name: 'Grade E', value: 'E' },
  ];

  reportingManagerOptions = [
    { name: 'John  (Project Manager)', value: 101 },
    { name: 'Smith (Team Lead)', value: 102 },
    { name: 'Michael Johnson (Senior Manager)', value: 103 },
  ];

  workLocationOptions = [
    { name: 'Hyderabad', value: 'HYD' },
    { name: 'Bangalore', value: 'BLR' },
    { name: 'Chennai', value: 'CHN' },
    { name: 'Pune', value: 'PUN' },
    { name: 'Mumbai', value: 'MUM' },
  ];

  shiftTimingOptions = [
    { name: 'Morning Shift (9:00 AM - 6:00 PM)', value: '9-6' },
    { name: 'Afternoon Shift (12:00 PM - 9:00 PM)', value: '12-9' },
    { name: 'Evening Shift (2:00 PM - 11:00 PM)', value: '2-11' },
    { name: 'Night Shift (10:00 PM - 6:00 AM)', value: '10-6' },
    { name: 'General Shift (10:00 AM - 7:00 PM)', value: '10-7' },
  ];
  casualLeaveOptions = [
    { name: '0', value: 0 },
    { name: '1', value: 1 },
    { name: '2', value: 2 },
    { name: '3', value: 3 },
    { name: '4', value: 4 },
    { name: '5', value: 5 },
  ];



  festivalLeaveOptions = [
    { name: '0', value: 0 },
    { name: '1', value: 1 },
    { name: '2', value: 2 },
    { name: '3', value: 3 },
    { name: '4', value: 4 },
  ];



  earnedLeaveOptions = [
    { name: '0', value: 0 },
    { name: '5', value: 5 },
    { name: '10', value: 10 },
    { name: '15', value: 15 },
    { name: '20', value: 20 },
  ];


  optionalLeaveOptions = [
    { name: '0', value: 0 },
    { name: '1', value: 1 },
    { name: '2', value: 2 },
  ];












  onDepartmentChange(value: any) {
    console.log('Selected Value:', value);
  }
  onDesignationChange(value: any) {
    console.log('Selected Value:', value);
  }
  onWorkLocationChange(value: any) {
    console.log('Selected Work Location:', value);
  }
  onShiftTimingChange(selectedValue: any) {
    console.log('Selected Shift Timing:', selectedValue);
  }
  onPayLevelChange(selectedValue: any) {
    console.log('Selected Shift Timing:', selectedValue);
  }
  onReportingManagerChange(selectedValue: any) {
    console.log('Selected Shift Timing:', selectedValue);
  }
  onCasualLeaveChange(val: any) {
    console.log('Casual Leave:', val);

  }
  onFestivalLeaveChange(val: any) {
    console.log('Festival Leave:', val);
  }

  onEarnedLeaveChange(val: any) {
    console.log('Earned Leave:', val);
  }

  onOptionalLeaveChange(val: any) {
    console.log('Optional Leave:', val);
  }


}