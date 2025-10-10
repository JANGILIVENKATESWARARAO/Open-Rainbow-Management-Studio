import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notice-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notice-banner.html',
  styleUrl: './notice-banner.css'
})
export class NoticeBannerComponent {
  @Input() heading: string = 'Important: ';
  @Input() content: string =
    'Changes to leave policies will apply to all employees from the next calendar year. Current year balances will remain unchanged.';
  @Input() headingColor: string = '#1E3A8A'; 
  @Input() contentColor: string = '#374151';
  @Input() contentInNextLine: boolean = false;
  @Input() bannerColor: string = '#DBEAFE'; 
  @Input() highlighterColor: string = '#1E3A8A'; 
  @Input() showIcon: boolean = true;
  @Input() iconColor: string = '#1E3A8A';
  @Input() showBorder: boolean = false;

}
