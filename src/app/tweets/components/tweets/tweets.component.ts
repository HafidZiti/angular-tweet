import { TweetsSelector } from './../../tweets.selector';
import { combineLatest, firstValueFrom, Observable, tap } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TweetListEntity } from '../tweet-list/tweet-list.entity';
import { Store } from '@ngrx/store';
import { TweetsActions } from '../../tweets.actions';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetsComponent {
  public readonly vo$: Observable<{
    entity: TweetListEntity;
  }>;

  public readonly tweetListEntity$: Observable<TweetListEntity>;

  public constructor(
    private store: Store<any>,
    private tweetsSelector: TweetsSelector
  ) {
    // eslint-disable-next-line ngrx/prefer-action-creator-in-dispatch
    this.store.dispatch(new TweetsActions.Init());
    this.tweetListEntity$ = this.tweetsSelector.getTweets();

    this.vo$ = combineLatest({
      entity: this.tweetListEntity$
    });
  }
}
