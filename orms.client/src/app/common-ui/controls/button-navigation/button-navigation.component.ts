import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-button-navigation',
  templateUrl: './button-navigation.component.html',
  styleUrl: './button-navigation.component.css',
  standalone: true,
  imports: [ButtonComponent]
})
export class ButtonNavigationComponent {

}
