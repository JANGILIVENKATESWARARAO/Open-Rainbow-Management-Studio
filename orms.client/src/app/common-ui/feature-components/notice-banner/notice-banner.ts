import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notice-banner',
  standalone: true,
  templateUrl: './notice-banner.html',
  styleUrl: './notice-banner.css'
})
export class NoticeBannerComponent {
  @Input() heading: string = 'Important';

  /** 📝 Banner content text (editable in Storybook) */
  @Input() content: string =
    'Changes to leave policies will apply to all employees from the next calendar year. Current year balances will remain unchanged.';
   @Input() headingColor: string = '#1E3A8A'; // Tailwind blue-900

  /** 🎨 Content text color */
  @Input() contentColor: string = '#374151';
 
}
