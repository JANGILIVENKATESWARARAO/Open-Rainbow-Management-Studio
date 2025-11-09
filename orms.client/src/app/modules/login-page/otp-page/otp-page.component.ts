import { Component } from '@angular/core';
import { ButtonComponent } from '../../../common-ui/controls/button/button.component';
import { OtpComponent } from '../../../common-ui/controls/otp/otp.component';

@Component({
    selector: 'app-otp-page',
    templateUrl: './otp-page.component.html',
    styleUrl: './otp-page.component.css',
    imports: [ButtonComponent, OtpComponent]
})
export class OtpPageComponent {

}
