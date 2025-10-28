import { Component, Input } from '@angular/core';
import { PasswordComponent } from '../../../common-ui/controls/password/password.component';
import { ButtonComponent } from '../../../common-ui/controls/button/button.component';




@Component({
  selector: 'app-temp-login-credentials',
  templateUrl: './temp-login-credentials.component.html',
  styleUrl: './temp-login-credentials.component.css',
   imports: [PasswordComponent, ButtonComponent],
  standalone:true
})
export class TempLoginCredentialsComponent {
  
   @Input() text: string = '';
  @Input() bgColor: string = 'white';
  @Input() color: string = 'red';
  @Input() hoverBGColor: string = 'red';
  @Input() hoverColor: string = 'black';
  @Input() borderRadius: number = 5;
  @Input() borderColor: string = 'blue';
  @Input() showBorder: boolean = true;
  @Input() width: string = 'auto';
  hasUppercase: boolean = false;
hasLowercase: boolean = false;
hasNumber: boolean = false;
hasSpecialChar: boolean = false;

 @Input() maxLength: number = 12;
   
  isLengthValid: boolean = false;
  hasRequiredChars: boolean = false;
 
 temporaryPassword: string = '';
 valueLength: string = '';

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

   checkPasswordRules() {
    const password = this.temporaryPassword;
  console.log(password);
  
    

    
    this.isLengthValid = password.length == 12;

    
    this.hasUppercase = /[A-Z]/.test(password);
    this.hasLowercase = /[a-z]/.test(password);
    this.hasNumber = /\d/.test(password);
    this.hasSpecialChar = /[!@#$%^&*()_+]/.test(password);

    this.hasRequiredChars =  this.hasUppercase &&  this.hasLowercase &&  this.hasNumber && this.hasSpecialChar ;
  }
}