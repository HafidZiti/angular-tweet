import { TweetEntity } from './components/tweet/tweet.entity';
import { Observable } from 'rxjs';
import { TweetListEntity } from './components/tweet-list/tweet-list.entity';

export abstract class TweetsResource {
  public abstract getTweets(offset?: number): Observable<TweetListEntity>;
  public abstract saveTweet(tweet: TweetEntity): Observable<boolean>;
}
