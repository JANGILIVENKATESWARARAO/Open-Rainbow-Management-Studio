import { Component, Input } from '@angular/core';
import { PasswordComponent } from '../../../common-ui/controls/password/password.component';



@Component({
  selector: 'app-temp-login-credentials',
  templateUrl: './temp-login-credentials.component.html',
  styleUrl: './temp-login-credentials.component.css',
  imports:[PasswordComponent],
  standalone:true
})
export class TempLoginCredentialsComponent {
  @Input() label: string = 'Temporary username';
  @Input() placeholder:string='Enter Temporary username'
 temporaryPassword: string = '';
  showPassword: boolean = false;

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
}

generatePassword() {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    const length = Math.floor(Math.random() * (16 - 8 + 1)) + 8;
    this.temporaryPassword = Array.from({ length }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join('');
  }
}