import { Component } from '@angular/core';
import { MenuBarComponent } from '../../../../common-ui/feature-components/menu-bar/menu-bar.component';
import { AdminHeaderComponent } from '../../../common-modules/admin-header/admin-header.component';
import { BasicCardComponent } from '../../../basic-card/basic-card.component';
import { RouterOutlet } from '@angular/router';
import { ButtonNavigationComponent } from '../../../common-modules/button-navigation/button-navigation.component';

@Component({
  selector: 'orms-home',
  imports: [MenuBarComponent,AdminHeaderComponent,BasicCardComponent, RouterOutlet, ButtonNavigationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
isSidebarOpen = true;

  onSidebarState() {
    this.isSidebarOpen = !this.isSidebarOpen ;
  }
}
