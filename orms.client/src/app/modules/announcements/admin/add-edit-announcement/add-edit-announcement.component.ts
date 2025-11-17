import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../common-ui/controls/button/button.component';
import { TextAreaComponent } from '../../../../common-ui/controls/text-area/text-area.component';
import { TextBoxComponent } from '../../../../common-ui/controls/text-box/text-box.component';
import { DropDownComponent } from '../../../../common-ui/controls/drop-down/drop-down.component';
import { CalendarComponent } from '../../../../common-ui/controls/calendar/calendar.component';
import { ChipComponent } from '../../../../common-ui/controls/chip/chip.component';
import { Announcement } from '../../../../common-ui/assests/view-models/common-view-models';
import { ConfirmPopupComponent } from '../../../../common-ui/feature-components/confirm-popup/confirm-popup.component';

@Component({
  selector: 'orms-add-edit-announcement',
  standalone: true,
  templateUrl: './add-edit-announcement.component.html',
  styleUrls: ['./add-edit-announcement.component.css'],
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    TextAreaComponent,
    TextBoxComponent,
    DropDownComponent,
    CalendarComponent,
    ChipComponent,
    ConfirmPopupComponent
  ]
})
export class AddEditAnnouncementComponent {
  showForm = false;
  isSaveClicked = false;
  announcementForm!: FormGroup;
  showErrorPopup = false;


  @Input() announcements: Announcement[] = [
    {
      title: 'Holiday Schedule Update',
      priority: 'medium',
      description:
        'Please note that the office will be closed from December 24th to January 2nd. Emergency contacts will be available during this period.',
      postedDate: '30/12/2024',
      postedBy: 'HR Department',
      expireDate: '24/12/2024'
    },
    {
      title: 'New Security Policy',
      priority: 'low',
      description:
        'All employees must update their passwords by end of week following the new security guidelines.',
      postedDate: '25/12/2024',
      postedBy: 'IT Security',
      expireDate: '24/12/2024'
    },
        {
      title: 'Holiday Schedule Update1',
      priority: 'high' as const,
      description:
        'Please note that the office will be closed from December 24th to January 2nd. Emergency contacts will be available during this period.',
      postedDate: '29/12/2024',
      postedBy: 'HR Department',
      expireDate: '24/12/2024',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.announcementForm = this.fb.group({
      title: ['', Validators.required],
      priority: ['', Validators.required],
      expireDate: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() {
    return this.announcementForm.controls;
  }

  toggleForm() {
    this.showForm = !this.showForm;
    if (this.showForm) {
      this.announcementForm.reset();
      this.isSaveClicked = false;
    }
  }

onSave() {
  this.isSaveClicked = true;

  if (this.announcementForm.invalid) {
    // ✋ Show popup FIRST
    this.showErrorPopup = true;
    return;
  }

  // ✅ If valid → save normally
  const newAnnouncement: Announcement = {
    ...this.announcementForm.value,
    postedDate: new Date().toLocaleDateString('en-GB'),
    postedBy: 'Admin',
  };

  this.announcements.unshift(newAnnouncement);
  this.showForm = false;
  this.announcementForm.reset();
  this.isSaveClicked = false;
}
handlePopupClose(action: 'yes' | 'no') {
  this.showErrorPopup = false;

  // When closing popup — highlight fields
  this.announcementForm.markAllAsTouched();
  this.isSaveClicked = true;
}




  get otherAnnouncements(): Announcement[] {
    return this.announcements.sort(
      (a, b) => this.parseDate(b.postedDate) - this.parseDate(a.postedDate)
    );
  }

  private parseDate(value: string): number {
    const [day, month, year] = value.split('/').map(Number);
    return new Date(year, month - 1, day).getTime();
  }

  formatDate(value: string): string {
    const [day, month, year] = value.split('/').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).replace(/ /g, '-');
  }
}
