import { Component, Input } from '@angular/core';
import { PasswordComponent } from '../../../common-ui/controls/password/password.component';
import { ButtonComponent } from '../../../common-ui/controls/button/button.component';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-temp-login-credentials',
  templateUrl: './temp-login-credentials.component.html',
  styleUrl: './temp-login-credentials.component.css',
   imports: [PasswordComponent, ButtonComponent,CommonModule],
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
   @Input() emailValidation: string = 'viddushiva@gmail.com';
 @Input() maxLength: number = 12;
   
  isLengthValid: boolean = false;
  hasRequiredChars: boolean = false;
 
 temporaryPassword: string = '';
 valueLength: string = '';

  showPassword: boolean = false;
isActive: boolean = false;

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
}
emailSplitting(){
  console.log(this.emailValidation)
}
generatePassword() {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    const length = Math.floor(Math.random() * (16 - 8 + 1)) + 8;
    this.temporaryPassword = Array.from({ length }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join('');
  }
onActiveChange(isActive: boolean) {
  console.log('Child active state:', isActive);
   this.isActive = isActive;
}
getPasswordLengthClass() {
  const len = this.temporaryPassword.length;

  if (this.isActive && len === 0) {
    return 'active'; 
  } else if (len > 0 && len < 12) {
    return 'partial'; 
  } else if (len === 12) {
    return 'complete'; 
  } else {
    return '';
  }
}
getPasswordRequirementClass() {
  const len = this.temporaryPassword.length;

  if (this.isActive && len === 0) {
    return 'active'; 
  } else if (len > 0 && !this.hasRequiredChars) {
    return 'partial'; 
  } else if (this.hasRequiredChars) {
    return 'complete'; 
  } else {
    return '';
  }
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