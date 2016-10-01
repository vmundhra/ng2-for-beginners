import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'voter',
    template: `
       <div class="voter">
            <i 
                class = "glyphicon glyphicon-menu-up vote-button"
                [class.highlighted] = "myVote == 1"
                (click) = "onVoteUp()">
            </i> 
            <br>
            <span> {{ voteCount + myVote }} </span>
            <br>  
            <i 
                class = "glyphicon glyphicon-menu-down vote-button"
                [class.highlighted] = "myVote == -1"
                (click) = "onVoteDown()">
            </i>
        </div> 
        `,
     styles: [`
        .voter {
            width: 20px;
            text-align: center;
            color: #999;
        }

        .vote-button {
            cursor: pointer
        }

        .vote-count {
            font-size: 1.2em;
        }

        .highlighted {
            font-weight: bold;
            color: orange;
        }

     `]   
})
export class VoterComponent  {
    //initilaize to zero so that if consumer forgets to set them, it still works
    @Input() voteCount = 0;
    @Input() myVote = 0; 

    @Output() vote = new EventEmitter();
     

    onVoteUp() { 
        if(this.myVote == 1)
            return;

        this.myVote++;
        this.vote.emit({ myVote: this.myVote });
    }

    onVoteDown() { 
        if(this.myVote == -1)
            return;
        
        this.myVote--;
        this.vote.emit({ myVote: this.myVote });
    }
}