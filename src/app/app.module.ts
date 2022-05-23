import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { NewTweetComponent } from './new-tweet/new-tweet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LikesPipe } from './pipes/likes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    TweetListComponent,
    NewTweetComponent,
    LikesPipe
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
