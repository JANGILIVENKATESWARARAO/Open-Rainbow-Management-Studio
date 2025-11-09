import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
    imports: [CommonModule],
    encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Input() text: string = 'text';
  @Input() bgColor: string = 'white';
  @Input() color: string = 'red';
  @Input() hoverBGColor: string = 'red';
  @Input() hoverColor: string = 'black';
  @Input() borderRadius: number = 8;
  @Input() borderColor: string = 'blue';
  @Input() showBorder: boolean = true;
  @Input() disable: boolean = true;
  @Input() isexpand: boolean = false;

  isHovered: boolean = false;

  createRipple(event: MouseEvent) {
    const button = event.currentTarget as HTMLElement;
    const circle = document.createElement('span');

    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple-effect');

    const ripple = button.getElementsByClassName('ripple-effect')[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  }
}
