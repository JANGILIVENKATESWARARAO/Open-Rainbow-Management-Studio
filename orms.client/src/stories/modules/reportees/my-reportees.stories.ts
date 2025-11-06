import type { Meta, StoryObj } from '@storybook/angular';
import { RecentPayslipsComponent } from '../../../app/modules/payroll/recent-payslips/recent-payslips.component';
import { MyReporteesComponent } from '../../../app/modules/reportees/my-reportees/my-reportees.component';

const meta: Meta<MyReporteesComponent> = {
  title: 'Modules/Reportees/MyReportees',
  component: MyReporteesComponent,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },

};

export default meta;
type Story = StoryObj<MyReporteesComponent>;

export const MyReportees: Story = {
  args:{
      myReportees:[
  {
    "EmployeePhoto": "https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=735",
    "employeeName": "Arjuna Sivam Chandhran",
    "employeeId": "9203",
    "employeeEmail": "arjunasiv@gmail.com",
    "designation": "Software Engineer",
    "department": "Development",
    "workLocation": "Head Office"
  },
  {
    "EmployeePhoto": "https://randomuser.me/api/portraits/men/75.jpg",
    "employeeName": "Ravi Kumar",
    "employeeId": "9321",
    "employeeEmail": "ravi.kumar@example.com",
    "designation": "Senior Developer",
    "department": "Engineering",
    "workLocation": "Branch Office"
  },
  {
    "EmployeePhoto": "https://randomuser.me/api/portraits/women/65.jpg",
    "employeeName": "Priya Sharma",
    "employeeId": "9452",
    "employeeEmail": "priya.sharma@example.com",
    "designation": "Project Manager",
    "department": "Operations",
    "workLocation": "Remote"
  }
]

  }
};
