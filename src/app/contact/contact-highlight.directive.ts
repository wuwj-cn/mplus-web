import { Directive, ElementRef } from '@angular/core';

// Highlight the host element or any InputElement in blue
@Directive({ selector: '[highlight], input' })
export class ContactHighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'powderblue';
  }
}