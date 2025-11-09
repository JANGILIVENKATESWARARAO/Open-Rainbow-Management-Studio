import { NgStyle } from '@angular/common';
import { Component, ElementRef, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'app-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrl: './tooltip.component.css',
    imports: [NgStyle]
})
export class TooltipComponent {
  @Input() text = '';
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() bgColor: string = '';
  @Input() textColor: string = '';
  @Input() maxWidth: string = '';

   @HostBinding('style.--tooltip-bg') get tooltipBg() {
    return this.bgColor;
  }

  @HostBinding('style.--tooltip-color') get tooltipColor() {
    return this.textColor;
  }
  constructor(public elRef: ElementRef<HTMLElement>) {}
}
