import { Tweet } from './model/tweet';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { mockTweets } from './mocks/tweets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Twitter-Like';
  tweets: Tweet[] = mockTweets;

  constructor() {}

  handleNewTweet(tweet: Tweet): void {
    this.tweets = [tweet, ...this.tweets];
  }
}
