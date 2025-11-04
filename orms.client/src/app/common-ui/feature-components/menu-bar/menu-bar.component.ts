import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css',
  standalone:true,
  imports:[CommonModule]
})
export class MenuBarComponent {
 activeIndex: number = 0;

 menuItems = [
    { label: 'Dashboard', icon: 'fa fa-home', },
    { label: 'Payslip Access', icon: 'fa fa-file-text-o' },
    { label: 'Leave Management', icon: 'fa fa-clock-o', badge: 2 },
    { label: 'Announcements', icon: 'fa fa-bell-o', badge: 5 },
    { label: 'Calendar', icon: 'fa fa-calendar' },
    { label: 'FAQ & Help', icon: '' },
  ];



  
  onClick(index: number) {
    console.log(this.menuItems);
    
    this.activeIndex = index;
  
}
}
