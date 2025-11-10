import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ButtonComponent } from '../../../common-ui/controls/button/button.component';
import { StepperService } from '../../../../stories/modules/services/stepper.service';

@Component({
  selector: 'app-button-navigation',
  standalone: true,
  templateUrl: './button-navigation.component.html',
  styleUrls: ['./button-navigation.component.css'],
  imports: [ButtonComponent]
})
export class ButtonNavigationComponent implements OnInit {
  steps = [
    'add-employee/basic-info',
    'add-employee/contact-info',
    'add-employee/job-info',
    'add-employee/education-info',
    'add-employee/salary-info',
    'add-employee/work-info',
    'add-employee/doc-info',
    'add-employee/other-info'
  ];

  disabled = false;

  constructor(private router: Router, private stepperService: StepperService) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentIndex = this.steps.findIndex(s => this.router.url.includes(s));
        if (currentIndex >= 0) this.stepperService.setCurrentStep(currentIndex);
      });
  }

  goNext() {
    const currentIndex = this.stepperService.getCurrentStep();
    if (currentIndex < this.steps.length - 1) {
      const nextIndex = currentIndex + 1;
      this.router.navigate([this.steps[nextIndex]]);
      this.stepperService.setCurrentStep(nextIndex);
    }
  }

  goPrevious() {
    const currentIndex = this.stepperService.getCurrentStep();
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      this.router.navigate([this.steps[prevIndex]]);
      this.stepperService.setCurrentStep(prevIndex);
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
