import { CommonModule } from '@angular/common';
import { Component,Input ,Output,EventEmitter } from '@angular/core';
import { AppRoutingModule } from '../../../app-routing.module';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'orms-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
})
export class MenuBarComponent {
  @Input() isSidebarVisible: boolean = true;
  @Output() sidebarChange = new EventEmitter<boolean>();

  activeIndex: number = 0;
  // isSidebarVisible: boolean = true;

  // menuItems = [
  //   {
  //     label: 'Dashboard',
  //     icon: 'fa fa-home',
  //     route: 'doc-info',
  //   },
  //   {
  //     label: 'Payslip Access',
  //     icon: 'fa fa-file-text-o',
  //     route: 'salary-info',
  //   },
  //   {
  //     label: 'Leave Management',
  //     icon: 'fa fa-clock-o',
  //     badge: 2,
  //     route: 'job-info',
  //   },
  //   {
  //     label: 'Announcements',
  //     icon: 'fa fa-bell-o',
  //     badge: 5,
  //     route: 'contact-info',
  //   },
  //   {
  //     label: 'Calendar',
  //     icon: 'fa fa-calender',
  //     route: 'other-info',
  //   },
  //   { label: 'FAQ & Help', icon: '', route: 'education-info' },
  // ];

  menuItems: any[] = [];

  constructor(private router: Router, private menuService: MenuService) {
    const role = localStorage.getItem('userRole') as 'employee' | 'admin' | 'hr'

    this.menuItems = this.menuService.getMenuByRole(role);

    if (this.menuItems.length > 0) {
      this.router.navigate([this.menuItems[0].route]);
    }
  }

  onClick(index: number) {
    this.activeIndex = index;
  }

  // toggleSidebar() {
  //   this.isSidebarVisible = !this.isSidebarVisible;
  // }
  toggleSidebar() {
  this.isSidebarVisible = !this.isSidebarVisible;
  this.sidebarChange.emit(this.isSidebarVisible);
}
}
