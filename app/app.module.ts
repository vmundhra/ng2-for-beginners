import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { AutoGrowDirective } from './auto-grow.directive';
import { FavoriteComponent } from './favorite.component';
import { LikeComponent } from './like.component';
import { VoterComponent } from './voter.component';
import { TweetsComponent } from './tweets.component';
import { TweetComponent } from './tweet.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ 
      AppComponent, 
      CoursesComponent, 
      AuthorsComponent, 
      AutoGrowDirective, 
      FavoriteComponent, 
      LikeComponent, 
      VoterComponent, 
      TweetsComponent, 
      TweetComponent 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
