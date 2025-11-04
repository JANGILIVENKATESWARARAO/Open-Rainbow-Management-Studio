import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { UpcomingHolidaysComponent } from '../../holidays/upcoming-holidays/upcoming-holidays.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-dropdown',
  templateUrl: './header-dropdown.component.html',
  styleUrl: './header-dropdown.component.css',
  standalone: true,
  imports: [AdminHeaderComponent,CommonModule ]
})
export class HeaderDropdownComponent {
    showDropdown = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

}
