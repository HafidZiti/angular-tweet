import { Action } from '@ngrx/store';
import { Injectable, Type } from '@angular/core';
import { catchError, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { Actions, createEffect } from '@ngrx/effects';
import { ActionTypes, TweetsActions } from './tweets.actions';
import { TweetsResource } from './tweets.resource';
import { of } from 'rxjs';
import { ofAction } from '../helpers/operators/of-actions';

@Injectable()
export class TweetsEffects {
  public getTweetsData$ = createEffect(() => {
    return this.actions$.pipe(
      filter(action => action.type === ActionTypes.Init),
      switchMap(() => this.tweetsResource.getTweets()),
      map(tweets => {
        return new TweetsActions.LoadSuccess(tweets);
      }),
      takeUntil(this.actions$.pipe(ofAction(TweetsActions.Destroy))),
      catchError(error => of(new TweetsActions.LoadError(error)))
    );
  });

  public getMoreTweetsData$ = createEffect(() => {
    return this.actions$.pipe(
      ofAction(TweetsActions.LoadMore),
      switchMap(action => this.tweetsResource.getTweets(action.payload)),
      map(tweets => {
        return new TweetsActions.LoadMoreSuccess(tweets);
      }),
      catchError(error => of(new TweetsActions.LoadError(error)))
    );
  });

  public AddNewTweets$ = createEffect(() => {
    return this.actions$.pipe(
      ofAction(TweetsActions.AddTweet),
      // switchMap(() => this.tweetsResource.getTweets()),
      map(action => {
        return new TweetsActions.AddTweetSuccess(action.payload);
      }),
      catchError(error => of(new TweetsActions.LoadError(error)))
    );
  });

  public AddEditTweets$ = createEffect(() => {
    return this.actions$.pipe(
      ofAction(TweetsActions.EditTweet),
      // normaly with the real backend, BE call is needed here
      // switchMap(action => this.tweetsResource.saveTweet(action.payload)),
      map(action => {
        return new TweetsActions.EditTweetSuccess(action.payload);
      }),
      catchError(error => of(new TweetsActions.LoadError(error)))
    );
  });

  public constructor(
    private readonly actions$: Actions,
    private readonly tweetsResource: TweetsResource
  ) {}
}
