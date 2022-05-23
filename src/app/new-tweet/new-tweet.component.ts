import { Tweet } from './../model/tweet';
import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-tweet',
  templateUrl: './new-tweet.component.html',
  styleUrls: ['./new-tweet.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewTweetComponent {
  // 140 is the max of characters in single tweet
  MAX_CHAR = 140;

  @Output()
  // eslint-disable-next-line indent
  newTweetCreated: EventEmitter<Tweet> = new EventEmitter();

  tweetContentControl = new FormControl('', [Validators.required]);

  constructor() {}

  saveTweet() {
    const tweetContent = this.tweetContentControl.value;
    if (!tweetContent.trim() || tweetContent.length > this.MAX_CHAR) {
      return;
    }

    const newTweet: Tweet = {
      id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', // fixme: will be changed by uuid lib
      datetime: new Date().toString(),
      content: tweetContent,
      likes: 0
    };
    this.newTweetCreated.emit(newTweet);
    this.tweetContentControl.setValue('');
  }
}
