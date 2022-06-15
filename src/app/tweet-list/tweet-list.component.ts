import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { editTweet, loadMore } from './../actions/tweet.actions';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { UpdatedTweet } from './../model/updated-tweet';
import { Tweet } from '../model/tweet';
import { AppState } from '../model/app-state';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetListComponent {
  @Input() tweets?: Tweet[];

  constructor(private store: Store<{ tweets: AppState }>) {}

  handleTweetUpdated(updatedTweet: UpdatedTweet): void {
    this.store.dispatch(editTweet({ updatedTweet }));
  }

  trackByFn(index: number): number {
    return index;
  }

  onLoadMore(): void {
    this.store.dispatch(loadMore({ offset: this.tweets!.length || 0 }));
  }
}
