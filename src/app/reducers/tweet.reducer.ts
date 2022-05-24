import { createReducer, on } from '@ngrx/store';
import { addTweet, editTweet, loadMore } from './../actions/tweet.actions';
import { AppState } from '../model/app-state';
import { mockTweets } from './../mocks/tweets';
import { Tweet } from '../model/tweet';

// Max of tweets we display each time the user clicks 'load mode'
const max = 10;

const initialState: AppState = {
  tweets: mockTweets.slice(0, max)
};

export const tweetReducer = createReducer(
  initialState,
  on(addTweet, (state, { tweet }) => ({
    tweets: [tweet, ...state.tweets]
  })),
  on(editTweet, (state, { updatedTweet }) => ({
    tweets: state.tweets.map((tweet: Tweet) => {
      if (tweet.id === updatedTweet.id)
        return { ...tweet, likes: updatedTweet.likes };
      else return tweet;
    })
  })),
  on(loadMore, (state, { offset }) => ({
    tweets: [...state.tweets, ...mockTweets.slice(offset, offset + max)]
  }))
);
