import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appMarvellous]',
  standalone: true
})
export class MarvellousDirective {

  
  constructor(private obj: ElementRef) 
  {}

  //mouse enter method
  @HostListener ('mouseenter') onmouseenter()
  {
    this.obj.nativeElement.style.color = 'blue'
  }


//mouse leave enter
  @HostListener ('mouseleave') onmouseleave()
  {
    this.obj.nativeElement.style.color = 'red'
  }

}
