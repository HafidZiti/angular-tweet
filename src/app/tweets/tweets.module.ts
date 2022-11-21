import { TweetsState } from './tweets.state';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { LikesPipe } from './pipes/likes.pipe';
import { NewTweetComponent } from './components/new-tweet/new-tweet.component';
import { TweetListComponent } from './components/tweet-list/tweet-list.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { tweetsReducer } from './tweets.reducer';
import { TweetsResource } from './tweets.resource';
import { TweetsBackResource } from '../implementations/tweets/tweets-back.resource';
import { TweetsEffects } from './tweets.effects';
import { EffectsModule } from '@ngrx/effects';
import { TweetsComponent } from './components/tweets/tweets.component';

@NgModule({
  declarations: [
    TweetsComponent,
    TweetComponent,
    TweetListComponent,
    NewTweetComponent,
    LikesPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    EffectsModule.forFeature([TweetsEffects]),
    StoreModule.forFeature(TweetsState.key, tweetsReducer)
  ],
  providers: [
    {
      provide: TweetsResource,
      useClass: TweetsBackResource // replace this implementation if you want to use the mock
    }
  ]
})
export class TweetsModule {}
