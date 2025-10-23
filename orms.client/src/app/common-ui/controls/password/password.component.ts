import { Component, Input } from '@angular/core';

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

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }
}
