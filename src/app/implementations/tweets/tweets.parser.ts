import { Injectable } from '@angular/core';
import { ITweet } from '../../requesters/tweet.interface';
import { TweetListEntity } from '../../tweets/components/tweet-list/tweet-list.entity';
import { TweetEntity } from '../../tweets/components/tweet/tweet.entity';

@Injectable({ providedIn: 'root' })
export class TweetsBackParser {
  public getTweets(tweets: Readonly<ITweet[]>): TweetListEntity {
    return new TweetListEntity({
      tweets: this.retriveTweets(tweets),
      error: '',
      loading: false
    });
  }

  private retriveTweets(tweets: Readonly<ITweet[]>): Array<TweetEntity> {
    return tweets.map(
      tweet =>
        new TweetEntity({
          id: tweet.id,
          content: tweet.content,
          datetime: tweet.datetime,
          likes: tweet.likes
        })
    );
  }
}
