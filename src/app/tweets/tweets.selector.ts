import { TweetListEntity } from './components/tweet-list/tweet-list.entity';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TweetsState } from './tweets.state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class TweetsSelector {
  private get state(): Observable<TweetsState> {
    return this.store.select(TweetsState.key);
    // return this.store.pipe(
    //   select(store => store[TweetsState.key]),
    //   filter(store => store !== undefined)
    // );
  }

  public getTweets(): Observable<TweetListEntity> {
    return this.state.pipe(map(store => store.tweetList));
  }

  public constructor(private readonly store: Store<any>) {}
}
