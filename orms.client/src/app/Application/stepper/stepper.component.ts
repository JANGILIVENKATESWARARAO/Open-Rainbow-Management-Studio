import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { StepperService } from '../../../stories/modules/services/stepper.service';

interface Step {
  title: string;
  route: string;
  status: 'completed' | 'active' | 'pending';
}

@Component({
  selector: 'app-stepper',
  standalone: true,
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  imports: [CommonModule]
})
export class StepperComponent implements OnInit {
  steps: Step[] = [
    { title: 'Basic Information', route: '/add-employee/basic-info', status: 'completed' },
    { title: 'Contact Information', route: '/add-employee/contact-info', status: 'completed' },
    { title: 'Job Details', route: '/add-employee/job-info', status: 'completed' },
    { title: 'Education Details', route: '/add-employee/education-info', status: 'active' },
    { title: 'Salary & Payroll', route: '/add-employee/salary-info', status: 'pending' },
    { title: 'Work & Experience', route: '/add-employee/work-info', status: 'pending' },
    { title: 'Documents Upload', route: '/add-employee/doc-info', status: 'pending' },
    { title: 'Other Details', route: '/add-employee/other-info', status: 'pending' }
  ];

  constructor(private router: Router, private stepperService: StepperService) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const activeIndex = this.steps.findIndex(s => this.router.url.includes(s.route));
        if (activeIndex >= 0) this.updateStepState(activeIndex);
      });
  }

  onStepClick(step: Step, index: number) {
    this.router.navigate([step.route]);
    this.updateStepState(index);
  }

  updateStepState(activeIndex: number) {
    this.steps.forEach((s, i) => {
      if (i < activeIndex) s.status = 'completed';
      else if (i === activeIndex) s.status = 'active';
      else s.status = 'pending';
    });
    this.stepperService.setCurrentStep(activeIndex);
  }

  get completedSteps() {
    return this.steps.filter(s => s.status === 'completed').length;
  }

  get totalSteps() {
    return this.steps.length;
  }

  get progressPercent() {
    return (this.completedSteps / this.totalSteps) * 100;
  }
}
