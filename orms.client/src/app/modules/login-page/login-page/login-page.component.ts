import { Component } from '@angular/core';
import { ButtonComponent } from '../../../common-ui/controls/button/button.component';
import { TextBoxComponent } from '../../../common-ui/controls/text-box/text-box.component';
import { ToggleComponent } from '../../../common-ui/controls/toggle/toggle.component';

@Component({
  selector: 'app-login-page',
  standalone:true,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  imports:[ButtonComponent,TextBoxComponent,ToggleComponent]
})
export class LoginPageComponent {

}
