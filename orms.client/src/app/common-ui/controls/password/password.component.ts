import { CommonModule } from '@angular/common';
import { Component, Input , Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrl: './password.component.css',
    imports: [CommonModule]
})
export class PasswordComponent {
  @Input() label: string = 'Temporary Password';
  @Input() isRequired: boolean = true;
  @Input() placeholder: string = 'Enter Temporary password'
  passwordVisible: boolean = false;
@Output() activeChange = new EventEmitter<boolean>();
  @Input() value: string = '';  
  isActive: boolean = false;

  @Output() valueChange = new EventEmitter<string>();  



  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }
  onInputChange(event: Event) {
  
    
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.valueChange.emit(this.value); 
  }
onFocusInput() {
  this.activeChange.emit(true);  
   
}
onBlurInput() {
  this.activeChange.emit(false);  
}
}


