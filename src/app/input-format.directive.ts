import { Directive, HostListener, HostDecorator, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format;

  // here we are getting user input from dom
  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus() {
    console.log('On focuss....');
  }

  @HostListener('blur') onBlur() {
    this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
    console.log('On blur....');
  }
}
