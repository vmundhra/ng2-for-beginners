import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `<h1>My Second Angular App</h1>
                <favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
                <br />

                <h2>Custom Pipe demo</h2>
                {{ post.title }}
                <br />
                {{ post.body | summary:10 }}
                <br />
                
                <br />
                <br />

                <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
                <br />
                
                <br />
                <br />

                <voter 
                    [voteCount]="vote.totalVotes"
                    [myVote]="vote.myVote"
                    (vote)="onVote($event)">
                </voter>
               
                <courses></courses>
               
                <authors></authors>
               
                <tweets></tweets>

                <h2>ngSwitch demo</h2>
                <ul class="nav nav-pills">
                    <li [class.active]="viewMode == 'map'"><a (click)="viewMode = 'map'">Map View</a></li>
                    <li [class.active]="viewMode == 'list'"><a (click)="viewMode = 'list'">List View</a></li>
                </ul>
                <div [ngSwitch]="viewMode">
                    <div *ngSwitchCase="'map'">Map view content</div>
                    <div *ngSwitchCase="'list'">List view content</div>
                </div>

                <h2>Pipes demo</h2>
                {{ course.title | uppercase | lowercase}}
                <br />
                {{ course.students | number}}
                <br />
                {{ course.rating | number:'2.2-2'}}
                <br />
                {{ course.price | currency:'AUD':true:'2.2-2' }}
                <br />
                {{ course.releaseDate | date:'MMM yyyy'}}
                <br />
                {{ course | json}}  


                <h2>ngStyle demo</h2>
                <button
                    [ngStyle]="{
                        backgroundColor: canSave ? 'blue' : 'gray',
                        color: canSave ? 'white' : 'black',
                        fontWeight: canSave ? 'bold' : 'normal'
                    }"
                 >Submit</button>  


                <h2>Elvis operator (?.) demo</h2>
                <ul>
                    <li>{{ task.title }}</li>
                    <li>{{ task.assignee?.name}}</li>
                    <li>{{ task.assignee?.role?.name}}</li>
                </ul> 

                <h2>ngContent (create insertion points in components) demo - useful for supply markup/content from host component</h2>
                <bs-panel>
                    <div class="heading"> The heading </div>
                    <div class="body"> This is body </div>
                    <div class="body"> This is another body! </div>
                </bs-panel>

                <zippy title="Who can see my stuff?">
                    Content of who can see my stuff
                </zippy>
                <zippy title="Who can contact me?">
                    Content of who can contact me
                </zippy>

                <br />
                <br />
                <h2>Basic Form Demo</h2>
                <contact-form></contact-form>
                `
             
})
export class AppComponent {
  
    post = {
        title : 'My post',
        isFavorite: true,
        body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    }

    tweet = {
        totalLikes : 10,
        iLike: true
    }

    vote = {
        totalVotes : 10,
        myVote: 0
    }

    onFavoriteChange($event) {
        console.log($event);
    }
    
    onVote($event) {
        console.log($event);
    }

    viewMode = 'map';

    course = {
        title: "ng2 for Beginners",
        rating: 4.9732,
        students: 5981,
        price: 99.95,
        releaseDate: new Date()
    }


    canSave = false;

    task = {
        title: "Review apps",
        assignee: null
    }

  
 }
