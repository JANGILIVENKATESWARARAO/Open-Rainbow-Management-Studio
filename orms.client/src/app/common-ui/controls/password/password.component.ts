import { Component, Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrl: './password.component.css',
  standalone: true,
})
export class PasswordComponent {
  @Input() label: string = 'Temporary Password';
  @Input() isRequired: boolean = true;
  @Input() placeholder: string = 'Enter Temporary password'
  passwordVisible: boolean = false;

  @Input() value: string = '';  
  
  @Output() valueChange = new EventEmitter<string>();  



  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }
  onInputChange(event: Event) {
  
    
    const input = event.target as HTMLInputElement;
    this.value = input.value;
      // console.log(this.value+ ""+"this is password compo");
    this.valueChange.emit(this.value); 
  }
}


