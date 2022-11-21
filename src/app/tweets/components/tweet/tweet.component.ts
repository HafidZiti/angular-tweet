import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TweetEntity } from './tweet.entity';
import { Store } from '@ngrx/store';
import { TweetsActions } from '../../tweets.actions';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetComponent {
  public alreadyLiked = false;

  @Input() public tweet: TweetEntity = new TweetEntity();

  public constructor(private readonly store: Store<any>) {}

  handleLike(): void {
    const updatedTweet = new TweetEntity({
      ...this.tweet,
      likes: this.alreadyLiked ? this.tweet!.likes - 1 : this.tweet!.likes + 1
    });
    // eslint-disable-next-line ngrx/prefer-action-creator-in-dispatch
    this.store.dispatch(new TweetsActions.EditTweet(updatedTweet));
    this.alreadyLiked = !this.alreadyLiked;
  }
}
