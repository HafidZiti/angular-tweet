import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as TweetActions from './actions/tweet.actions';
import { Tweet } from './model/tweet';
import { AppState } from './model/app-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Twitter-Like';

  tweets$: Observable<AppState>;

  constructor(private store: Store<{ tweets: AppState }>) {
    this.tweets$ = this.store.select('tweets');
  }

  handleNewTweet(tweet: Tweet): void {
    this.store.dispatch(TweetActions.addTweet({ tweet }));
  }
}
