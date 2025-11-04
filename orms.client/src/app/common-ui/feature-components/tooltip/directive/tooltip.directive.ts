import {
  Directive,
  Input,
  HostListener,
  ViewContainerRef,
  ComponentRef,
  OnDestroy,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { TooltipComponent } from '../tooltip.component';

@Directive({
  selector: '[appTooltip]',
  standalone: true,
})
export class TooltipDirective implements OnDestroy {
  @Input('appTooltip') tooltipText = '';
  @Input() tooltipPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() tooltipbgColor: string = 'red';
  @Input() tooltiptextColor: string = 'black';
  @Input() tooltipMaxWidth: string = '' + '%';

  private compRef: ComponentRef<TooltipComponent> | null = null;
  private showTimeout: any = null;
  private hideTimeout: any = null;
  private repositionHandler = () => this.reposition();

  constructor(
    private vcr: ViewContainerRef,
    private renderer: Renderer2,
    private host: ElementRef<HTMLElement>
  ) {}

  @HostListener('mouseenter')
  onEnter() {
    if (!this.tooltipText?.trim()) return;
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
    }
    this.showTimeout = setTimeout(() => this.show());
  }

  @HostListener('mouseleave')
  onLeave() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
    this.hide();
  }

  private show() {
    if (this.compRef) return;

    this.compRef = this.vcr.createComponent(TooltipComponent);
    const instance = this.compRef.instance;
    instance.text = this.tooltipText;
    instance.position = this.tooltipPosition;
    instance.bgColor = this.tooltipbgColor;
    instance.textColor = this.tooltiptextColor;
    instance.maxWidth = this.tooltipMaxWidth;

    const domEl = this.compRef.location.nativeElement as HTMLElement;
    this.renderer.appendChild(document.body, domEl);

    requestAnimationFrame(() => {
      this.reposition();

      const tooltipEl = domEl.querySelector('.tooltip') as HTMLElement;
      if (tooltipEl) {
        this.renderer.setAttribute(
          tooltipEl,
          'data-position',
          this.tooltipPosition
        );
        this.renderer.setStyle(tooltipEl, 'background', this.tooltipbgColor);
        this.renderer.setStyle(tooltipEl, 'color', this.tooltiptextColor);
      }

      this.renderer.addClass(domEl, 'visible');
    });

    window.addEventListener('scroll', this.repositionHandler, true);
    window.addEventListener('resize', this.repositionHandler);
  }

  private hide() {
    if (!this.compRef) return;
    const domEl = this.compRef.location.nativeElement as HTMLElement;

    this.renderer.removeClass(domEl, 'visible');

    if (this.hideTimeout) clearTimeout(this.hideTimeout);
    this.hideTimeout = setTimeout(() => {
      try {
        if (domEl.parentNode)
          this.renderer.removeChild(domEl.parentNode, domEl);
      } catch {}
      this.compRef?.destroy();
      this.compRef = null;
      window.removeEventListener('scroll', this.repositionHandler, true);
      window.removeEventListener('resize', this.repositionHandler);
    }, 120);
  }

  private reposition() {
    if (!this.compRef) return;
    const domEl = this.compRef.location.nativeElement as HTMLElement;
    const hostRect = this.host.nativeElement.getBoundingClientRect();
    const tooltipEl = domEl.querySelector('.tooltip') as HTMLElement;
    if (!tooltipEl) return;
    const tipRect = tooltipEl.getBoundingClientRect();

    let firstRect: DOMRect | null = null;
    try {
      const range = document.createRange();
      range.selectNodeContents(this.host.nativeElement);
      const rects = range.getClientRects();
      if (rects && rects.length > 0) {
        firstRect = rects[0];
      }
      range.detach?.();
    } catch (e) {
      firstRect = null;
    }

    let top = 0,
      left = 0;
    const margin = 8;

    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;

    const isBottomOverflow = hostRect.bottom + tipRect.height + margin > vh;
    const isTopOverflow = hostRect.top - tipRect.height - margin < 0;

    if (
      this.tooltipPosition === 'bottom' &&
      isBottomOverflow &&
      !isTopOverflow
    ) {
      this.tooltipPosition = 'top';
    } else if (
      this.tooltipPosition === 'top' &&
      isTopOverflow &&
      !isBottomOverflow
    ) {
      this.tooltipPosition = 'bottom';
    }

    switch (this.tooltipPosition) {
      case 'top':
        top = firstRect
          ? firstRect.top - tipRect.height - margin
          : hostRect.top - tipRect.height - margin;

        if (firstRect) {
          left = firstRect.left;
        } else {
          left = hostRect.left + (hostRect.width - tipRect.width) / 2;
        }
        break;
      case 'bottom':
        top = firstRect ? firstRect.bottom + margin : hostRect.bottom + margin;
        if (firstRect) {
          left = firstRect.left;
        } else {
          left = hostRect.left + (hostRect.width - tipRect.width) / 2;
        }
        break;
      case 'left':
        top = hostRect.top + (hostRect.height - tipRect.height) / 2;
        left = hostRect.left - tipRect.width - margin;
        break;
      case 'right':
      default:
        top = hostRect.top + (hostRect.height - tipRect.height) / 2;
        left = hostRect.right + margin;
        break;
    }

    left = Math.max(6, Math.min(Math.round(left), vw - tipRect.width - 6));
    top = Math.max(6, Math.min(Math.round(top), vh - tipRect.height - 6));

    this.renderer.setStyle(domEl, 'position', 'fixed');
    this.renderer.setStyle(domEl, 'top', `${top}px`);
    this.renderer.setStyle(domEl, 'left', `${left}px`);
    this.renderer.setStyle(domEl, 'pointerEvents', 'none');
  }

  ngOnDestroy() {
    if (this.showTimeout) clearTimeout(this.showTimeout);
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
    if (this.compRef) {
      try {
        this.compRef.destroy();
      } catch {}
      this.compRef = null;
    }
    window.removeEventListener('scroll', this.repositionHandler, true);
    window.removeEventListener('resize', this.repositionHandler);
  }
}
