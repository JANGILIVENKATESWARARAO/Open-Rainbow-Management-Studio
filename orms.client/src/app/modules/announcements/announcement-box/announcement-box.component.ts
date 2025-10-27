import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement-box',
  templateUrl: './announcement-box.component.html',
  styleUrls: ['./announcement-box.component.css'],
  imports:[NgClass],
  standalone: true
})
export class AnnouncementBoxComponent implements OnInit {
  @Input() cardTitle: string = 'Pinned Announcements';

 
  @Input() title1: string = 'Holiday Schedule Update';
  @Input() priority1: 'high' | 'medium' | 'low' = 'high';
  @Input() description1: string =
    'Please note that the office will be closed from December 24th to January 2nd. Emergency contacts will be available during this period.';
  @Input() postedDate1: string = '28/12/2024'; 
  @Input() postedBy1: string = 'by HR Department';

  formattedDate1: string = '';
  formattedDate2: string = '';

  ngOnInit() {
    this.formattedDate1 = this.formatDate(this.postedDate1);
    // this.formattedDate2 = this.formatDate(this.postedDate2);
    console.log(this.formattedDate1);
  }

private formatDate(value: any): string {
  let date: Date;

  if (typeof value === 'string') {
    
    const parts = value.split('/');
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; 
      const year = parseInt(parts[2], 10);
      date = new Date(year, month, day);
    } else {
      return value; 
    }
  } else if (typeof value === 'number') {
    date = new Date(value);
  } else if (value instanceof Date) {
    date = value;
  } else {
    return value?.toString() || '';
  }

  // Format as 'dd-MMM-yyyy'
  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options).replace(/ /g, '-'); 
}

}
