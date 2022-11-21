import { TweetEntity } from './../../tweets/components/tweet/tweet.entity';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockTweets } from '../../mocks/tweets';
import { TweetListEntity } from '../../tweets/components/tweet-list/tweet-list.entity';
import { TweetsResource } from '../../tweets/tweets.resource';
import { TweetsBackParser } from './tweets.parser';

@Injectable()
export class TweetsBackResource implements TweetsResource {
  public constructor(private readonly tweetsBackParser: TweetsBackParser) {}

  public getTweets(offset = 0): Observable<TweetListEntity> {
    return of(
      this.tweetsBackParser.getTweets(mockTweets.slice(offset, offset + 10))
    );
  }

  public saveTweet(tweet: TweetEntity): Observable<boolean> {
    return of(true); // fake BE response
  }
}
