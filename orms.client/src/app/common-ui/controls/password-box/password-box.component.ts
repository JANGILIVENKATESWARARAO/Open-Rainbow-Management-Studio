import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-box',
  templateUrl: './password-box.component.html',
  styleUrl: './password-box.component.css'
})
export class PasswordBoxComponent {
     @Input() label: string = 'Temporary Password';
     @Input() isRequired: boolean = true;
     @Input() placeholder:string='Enter Temporary password'
    passwordVisible:boolean = false; // toggle state


  togglePassword() {
    this.passwordVisible = !this.passwordVisible;

  }

}
