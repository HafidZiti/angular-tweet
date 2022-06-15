import { createAction, props } from '@ngrx/store';
import { UpdatedTweet } from './../model/updated-tweet';
import { Tweet } from './../model/tweet';

export const addTweet = createAction('[TWEET] Add', props<{ tweet: Tweet }>());

export const editTweet = createAction(
  '[TWEET] Edit',
  props<{ updatedTweet: UpdatedTweet }>()
);

export const loadMore = createAction(
  '[TWEET] More',
  props<{ offset: number }>()
);
