import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';
import { TweetsActions } from '../../tweets.actions';
import { TweetEntity } from '../tweet/tweet.entity';

@Component({
  selector: 'app-new-tweet',
  templateUrl: './new-tweet.component.html',
  styleUrls: ['./new-tweet.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewTweetComponent {
  // 140 is the max of characters in single tweet
  public readonly MAX_CHAR = 140;
  public readonly tweetContentControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private readonly store: Store<any>) {}

  saveTweet() {
    const tweetContent = this.tweetContentControl.value;
    if (!tweetContent.trim() || tweetContent.length > this.MAX_CHAR) {
      return;
    }

    const newTweet = new TweetEntity({
      id: uuidv4(),
      content: tweetContent,
      datetime: new Date().toString(),
      likes: 0
    });

    // eslint-disable-next-line ngrx/prefer-action-creator-in-dispatch
    this.store.dispatch(new TweetsActions.AddTweet(newTweet));

    this.tweetContentControl.setValue('');
  }
}
