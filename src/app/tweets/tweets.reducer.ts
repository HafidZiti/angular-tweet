/* eslint-disable indent */
import { ActionTypes } from './tweets.actions';
import produce from 'immer';
import { TweetsState } from './tweets.state';
import { TweetListEntity } from './components/tweet-list/tweet-list.entity';

const initialState = new TweetsState();

export function tweetsReducer(
  state: TweetsState = initialState,
  action: any
): TweetsState {
  switch (action.type) {
    case ActionTypes.LoadSuccess: {
      return produce(state, draft => {
        draft.tweetList = action.payload;
      });
    }

    case ActionTypes.LoadMoreSuccess: {
      return produce(state, draft => {
        draft.tweetList = new TweetListEntity({
          tweets: [...draft.tweetList.tweets, ...action.payload.tweets],
          error: '',
          loading: false
        });
      });
    }

    case ActionTypes.AddTweetSuccess: {
      return produce(state, draft => {
        draft.tweetList = new TweetListEntity({
          tweets: [action.payload, ...draft.tweetList.tweets],
          error: '',
          loading: false
        });
      });
    }

    case ActionTypes.EditTweetSuccess: {
      return produce(state, draft => {
        draft.tweetList = new TweetListEntity({
          tweets: draft.tweetList.tweets.map(tweet =>
            tweet.id === action.payload.id ? action.payload : tweet
          ),
          error: '',
          loading: false
        });
      });
    }

    default: {
      return state;
    }
  }
}
