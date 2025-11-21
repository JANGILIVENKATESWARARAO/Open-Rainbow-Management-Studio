import { Component, Input, input } from '@angular/core';
import { AdminHeaderComponent } from "../../common-modules/admin-header/admin-header.component";
import { DoughnutChartComponent } from "../../../common-ui/charts/doughnut-chart/doughnut-chart.component";
import { AnnouncementBoxComponent } from "../../announcements/announcement-box/announcement-box.component";
import { QuickActivitiesComponent } from "../quick-activities/quick-activities.component";
import { RecentPayslipsComponent } from "../../payroll/recent-payslips/recent-payslips.component";
import { LeaveBalanceOverviewComponent } from "../../leave-management/leave-balance-overview/leave-balance-overview.component";
import { ViewTeamMembersComponent } from "../../team-members/view-team-members/view-team-members.component";
import { MyReporteesComponent } from "../../reportees/my-reportees/my-reportees.component";
import { HorizontalBarChartComponent } from "../../../common-ui/charts/horizontal-bar-chart/horizontal-bar-chart.component";
import { GridDisplayOption, GridLineStyle } from '../../../common-ui/assests/view-models/common-view-models';
import { QuickAnnouncementsComponent } from "../quick-announcements/quick-announcements.component";
import { SpinningChartComponent } from "../../../common-ui/charts/spinning-chart/spinning-chart.component";

@Component({
  selector: 'orms-dashboard',
  imports: [
    AdminHeaderComponent,
    DoughnutChartComponent,
    // AnnouncementBoxComponent,
    QuickActivitiesComponent,
    RecentPayslipsComponent,
    LeaveBalanceOverviewComponent,
    ViewTeamMembersComponent,
    MyReporteesComponent,
    HorizontalBarChartComponent,
    QuickAnnouncementsComponent,
    SpinningChartComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {

  labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

  data = [
    [390, 120, 295, 230, 100, 20, 180, 230, 250],
    [100, 190, 110, 380, 100, 200, 290, 300, 100],
    [150, 200, 190, 120, 100, 400, 90, 120, 200]
  ];

  datasetLabels = ['Net Profit', 'Revenue', 'Free Cash Flow'];

  yAxisTicks = [0, 50, 100, 150, 200, 250, 300, 350, 400];

  horizontal = false;
  showLegend = true;
  singleLine = false;
  showLabels = true;
  showData = true;
  backgroundcolor = '#2166E1';
  backgroundcolor1 = '#FF8800';
  backgroundcolor2 = '#13C9E4';
  legendShapes : any[]= ['rectRounded', 'rectRounded', 'rectRounded'];
  gridDisplay : GridDisplayOption = 'both';
  gridLineStyle : GridLineStyle = 'solid';
  gridLineColor = '#F0F4FA';
  gridLineWidth = 1;

  whiteTheme = false;
  @Input() doughnut: string = "Doughnut Chart";
  @Input() spinning: string = "Spinning Chart";
  @Input() horizontalText: string = "Horizontal Chart";
}

