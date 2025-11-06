import { Component, ElementRef, HostListener } from '@angular/core';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-dropdown',
  templateUrl: './header-dropdown.component.html',
  styleUrl: './header-dropdown.component.css',
  standalone: true,
  imports: [AdminHeaderComponent, CommonModule],
})
export class HeaderDropdownComponent {
  showDropdown = false;

  constructor(private eRef: ElementRef) {}

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }


  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
   
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.showDropdown = false;
    }
  }
}
