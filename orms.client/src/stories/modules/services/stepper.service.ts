import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StepperService {
  private currentStepIndex = new BehaviorSubject<number>(0);
  currentStep$ = this.currentStepIndex.asObservable();

  setCurrentStep(index: number) {
    this.currentStepIndex.next(index);
  }

  getCurrentStep(): number {
    return this.currentStepIndex.value;
  }
}
