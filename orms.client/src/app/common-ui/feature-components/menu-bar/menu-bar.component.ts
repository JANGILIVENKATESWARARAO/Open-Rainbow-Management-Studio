import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppRoutingModule } from '../../../app-routing.module';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'orms-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
})
export class MenuBarComponent {
  constructor(private router: Router) {
    this.router.navigate([this.menuItems[0].route]);
  }

  activeIndex: number = 0;
  isSidebarVisible: boolean = true;

  menuItems = [
    {
      label: 'Dashboard',
      icon: 'fa fa-home',
      route: 'doc-info',
    },
    {
      label: 'Payslip Access',
      icon: 'fa fa-file-text-o',
      route: 'salary-info',
    },
    {
      label: 'Leave Management',
      icon: 'fa fa-clock-o',
      badge: 2,
      route: 'job-info',
    },
    {
      label: 'Announcements',
      icon: 'fa fa-bell-o',
      badge: 5,
      route: 'contact-info',
    },
    {
      label: 'Calendar',
      icon: 'fa fa-calender',
      route: 'other-info',
    },
    { label: 'FAQ & Help', icon: '', route: 'education-info' },
  ];

  onClick(index: number) {
    console.log(this.menuItems);
    console.log(this.menuItems[0].route);

    this.activeIndex = index;
  }

  toggleSidebar() {
    console.log(this.isSidebarVisible);

    this.isSidebarVisible = !this.isSidebarVisible;
    console.log(this.isSidebarVisible);
  }
}
