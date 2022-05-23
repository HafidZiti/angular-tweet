import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input
} from '@angular/core';
import { UpdatedTweet } from './../model/updated-tweet';
import { Tweet } from '../model/tweet';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetListComponent {
  // max of tweets we display each time the user clicks 'load mode'
  max = 10;

  @Input() tweets?: Tweet[];

  constructor(private readonly cd: ChangeDetectorRef) {}

  handleTweetUpdated(updatedTweet: UpdatedTweet): void {
    this.tweets = this.tweets!.map((tweet: Tweet) => {
      if (tweet.id === updatedTweet.id)
        return { ...tweet, likes: updatedTweet.likes };
      else return tweet;
    });
    this.cd.markForCheck();
  }

  trackByFn(index: number): number {
    return index;
  }

  onLoadMore(): void {
    this.max = this.max + 10;
  }
}
