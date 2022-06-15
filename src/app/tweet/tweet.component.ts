import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Tweet } from './../model/tweet';
import { UpdatedTweet } from './../model/updated-tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetComponent {
  // Used to know if the tweet is already liked
  alreadyLiked = false;

  @Input() tweet?: Tweet;

  @Output()
  // eslint-disable-next-line indent
  tweetUpdated: EventEmitter<UpdatedTweet> = new EventEmitter();

  constructor() {}

  handleLike(): void {
    this.tweetUpdated.emit({
      id: this.tweet!.id,
      likes: this.alreadyLiked ? this.tweet!.likes - 1 : this.tweet!.likes + 1
    });
    this.alreadyLiked = !this.alreadyLiked;
  }
}
