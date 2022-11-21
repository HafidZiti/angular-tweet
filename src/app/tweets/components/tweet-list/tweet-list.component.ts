import { TweetsActions } from './../../tweets.actions';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TweetListEntity } from './tweet-list.entity';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetListComponent {
  @Input() public tweetsList: TweetListEntity = new TweetListEntity();

  constructor(private store: Store<any>) {}

  public trackByFn(index: number): number {
    return index;
  }

  public onLoadMore(): void {
    this.store.dispatch(
      // eslint-disable-next-line ngrx/prefer-action-creator-in-dispatch
      new TweetsActions.LoadMore(this.tweetsList.tweets.length)
    );
  }
}
