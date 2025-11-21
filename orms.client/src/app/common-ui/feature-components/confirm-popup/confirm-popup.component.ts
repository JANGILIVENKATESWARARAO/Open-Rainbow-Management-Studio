import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../controls/button/button.component';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


export interface ConfirmPopup {
  text: string;
  bgColor: string;
  color: string;
  hoverBGColor: string;
  hoverColor: string;
  borderColor: string;
  showBorder: boolean;

}

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.css'],
  standalone: true,
  imports: [ButtonComponent, CommonModule],
})
export class ConfirmPopupComponent {
  @Input() yesButton: string = 'Yes';
  @Input() noButton: string = 'No';
  @Input() title: string = 'Are you sure?';
  @Input() changeIcon: string = '';
  @Input() borderColor: string = 'red';
  @Input() data: any [] = [];
  showPopup: boolean = false;
  


  private _label: string = '';
  safeLabel!: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}

  @Input()
  set label(value: string) {
    this._label = value;
    this.safeLabel = this.sanitizer.bypassSecurityTrustHtml(value);
  }

  get label(): string {
    return this._label;
  }

  isClosing = false;

closePopup() {
  this.isClosing = true;
  setTimeout(() => {
    this.showPopup = false;
    this.isClosing = false;
  }, 300); 
}
}
