import { Injectable } from '@angular/core';

export const MENU_CONFIG = {
  employee: [
    { label: 'Dashboard', icon: 'fa fa-home', route: 'doc-info' },
    {
      label: 'Payslip Access',
      icon: 'fa fa-file-text-o',
      route: 'salary-info',
    },
    { label: 'Leave Management', icon: 'fa fa-clock-o', route: 'job-info' },
    {
      label: 'Announcements',
      icon: 'fa fa-bell-o',
      badge: 5,
      route: 'contact-info',
    },
    { label: 'Calendar', icon: 'fa fa-calendar', route: 'other-info' },
  ],

  admin: [
    { label: 'Admin Dashboard', icon: 'fa fa-home', route: 'contact-info' },
    { label: 'User Management', icon: 'fa fa-users', route: 'job-info' },
    { label: 'Reports', icon: 'fa fa-file', route: 'education-info' },
    { label: 'Settings', icon: 'fa fa-cog', route: 'work-info' },
  ],

  hr: [
    { label: 'HR Dashboard', icon: 'fa fa-home', route: 'doc-info' },
    {
      label: 'Employee Directory',
      icon: 'fa fa-address-book',
      route: 'work-info',
    },
    { label: 'Leave Requests', icon: 'fa fa-file-o', route: 'job-info' },
    { label: 'Recruitment', icon: 'fa fa-user-plus', route: 'contact-info' },
  ],
};

@Injectable({ providedIn: 'root' })
export class MenuService {
  getMenuByRole(role: keyof typeof MENU_CONFIG) {
    return MENU_CONFIG[role] || [];
  }
}
