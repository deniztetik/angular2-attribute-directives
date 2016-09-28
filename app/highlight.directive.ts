import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({ selector: '[myHighlight]'})
export class HighlightDirective {
  private _defaultColor = 'red';

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @Input('myHighlight') highLightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highLightColor || this._defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
