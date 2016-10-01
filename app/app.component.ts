import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `<h1>My Second Angular App</h1>
                <favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
                <br>
                <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
                <br>
                <voter 
                    [voteCount]="vote.totalVotes"
                    [myVote]="vote.myVote"
                    (vote)="onVote($event)">
                </voter>
                <courses></courses>
                <authors></authors>
                <tweets></tweets>
                `
})
export class AppComponent {

    post = {
        title : 'My post',
        isFavorite: true
    }

    tweet = {
        totalLikes : 10,
        iLike: true
    }

    vote = {
        totalVotes : 10,
        myVote: 0
    }

    onFavoriteChange($event:any) {
        console.log($event);
    }
    
    onVote($event:any) {
        console.log($event);
    }


 }
