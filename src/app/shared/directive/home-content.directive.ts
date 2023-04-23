import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[homeContent]'
})
export class HomeContentDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.display = 'flex';
    this.el.nativeElement.style.flexDirection = 'column';
    this.el.nativeElement.style.boxSizing = 'border-box';
    this.el.nativeElement.style.height = 'calc(100vh - 100px)';
  }

}
