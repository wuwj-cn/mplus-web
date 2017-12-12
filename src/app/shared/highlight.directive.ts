import { Directive, ElementRef } from '@angular/core';

// Highlight the host element in gold
@Directive({ selector: '[highlight]' })
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'gold';
  }
}