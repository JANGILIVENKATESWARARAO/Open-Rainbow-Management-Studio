import { Component, HostListener } from '@angular/core';


@Component({
    selector: 'orms-admin-header',
    imports: [],
    templateUrl: './admin-header.component.html',
    styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }


  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.admin_details') && !target.closest('.dropdown-menu')) {
      this.dropdownOpen = false;
    }
  }
}
