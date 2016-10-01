import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';


   /* 2 different ways of binding events in a directive
    }*/


@Directive({
    selector: '[autoGrow]',
    host: {
       '(focus)': 'onFocus()'
    }
})
export class AutoGrowDirective {

    constructor(private el: ElementRef, private renderer: Renderer){
    }

    onFocus(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '400px');
        console.log('onFocus');
    }

   /* @HostListener('focus') onFocus() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '400px');
    }*/

    @HostListener('blur') onBlur() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120px'); 
    }

}