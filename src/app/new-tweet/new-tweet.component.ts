import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { Tweet } from './../model/tweet';

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
      id: uuidv4(), // fixme: will be changed by uuid lib
      datetime: new Date().toString(),
      content: tweetContent,
      likes: 0
    };

    this.newTweetCreated.emit(newTweet);
    this.tweetContentControl.setValue('');
  }
}
