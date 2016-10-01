import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'favorite',
    template: `
        <i 
            class = "glyphicon"
            [class.glyphicon-star] = "isFavorite"
            [class.glyphicon-star-empty] = "!isFavorite"
            (click) = "onClick()">
        </i>   
        `
})
export class FavoriteComponent  {
    //accept an input with public name as 'is-favorite'. This is alias. Not mandatory.
    @Input('is-favorite') isFavorite = false;  

    @Output() change = new EventEmitter();

    onClick() { 
         this.isFavorite = !this.isFavorite;
         //emit the change event to notify outside. we also send the current value of this favorite component.
         this.change.emit({ newValue: this.isFavorite });
    }
}