import { Component, Input } from '@angular/core';

@Component({
    selector: 'like',
    template: `
        <i 
            class = "glyphicon glyphicon-heart"
            [class.highlighted] = "iLike"
            (click) = "onClick()">
        </i> 
        <span> {{ totalLikes }} </span>  
        `,
     styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }
        .highlighted {
            color: pink;
        }
     `]   
})
export class LikeComponent  {
    @Input() iLike = false;  
    @Input() totalLikes = 0; 

    onClick() { 
         this.iLike = !this.iLike;
         this.totalLikes += this.iLike ? 1 : -1;
    }
}