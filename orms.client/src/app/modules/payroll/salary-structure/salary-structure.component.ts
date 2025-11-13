import { Component } from '@angular/core';
import { NoticeBannerComponent } from '../../../common-ui/feature-components/notice-banner/notice-banner';
import { DoughnutChartComponent } from '../../../common-ui/charts/doughnut-chart/doughnut-chart.component';
import { CommonModule, NgFor } from '@angular/common';

class Salary {
  label!: string;
  value!: any;
  color!: string;
  headingColor!: string;
  contentColor!: string;
  contentInNextLine!: boolean;
  showIcon!: boolean;
  showBorder!: boolean;
  bannerColor!: string;
  iconColor!: string;
}
@Component({
  selector: 'orms-salary-structure',
  templateUrl: './salary-structure.component.html',
  styleUrl: './salary-structure.component.css',
  standalone: true,

  imports: [NoticeBannerComponent, DoughnutChartComponent, CommonModule],
})
export class SalaryStructureComponent {
  salaryData: Salary[] = [];
  ngOnInit() {
    console.log(this.salaryData);

    this.getSalary();
  }

  getSalary() {
    this.salaryData = [
      {
        label: 'Earning',
        value: 59914,
        color: 'green',
        headingColor: 'grey',
        contentColor: '#374151',
        contentInNextLine: true,
        showIcon: true,
        showBorder: false,
        bannerColor: 'white',
        iconColor: '#1E3A8A',
      },
      {
        label: 'Reimbursements',
        value: 2700,
        color: 'blue',
        headingColor: 'grey',
        contentColor: 'black',
        contentInNextLine: true,
        showIcon: true,
        showBorder: false,
        bannerColor: 'white',
        iconColor: '#1E3A8A',
      },
      {
        label: 'Deductions',
        value: 3296,
        color: 'yellow',
        headingColor: 'grey',
        contentColor: 'black',
        contentInNextLine: true,
        showIcon: true,
        showBorder: false,
        bannerColor: 'white',
        iconColor: '#1E3A8A',
      },
    ];
  }

  get totalMonthlyCTC(): number {
    const earning =
      this.salaryData.find((item) => item.label === 'Earning')?.value || 0;
    const reimbursements =
      this.salaryData.find((item) => item.label === 'Reimbursements')?.value ||
      0;
    const deductions =
      this.salaryData.find((item) => item.label === 'Deductions')?.value || 0;

    return earning + reimbursements + deductions;
  }

  get totalYearlyCTC(): number {
    return this.totalMonthlyCTC * 12;
  }
}
