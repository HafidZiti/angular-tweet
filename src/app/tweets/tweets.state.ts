import { immerable } from 'immer';
import { OmitProperties } from 'ts-essentials';
import { TweetListEntity } from './components/tweet-list/tweet-list.entity';

export class TweetsState {
  private readonly [immerable] = true;

  public static readonly key = 'tweets';
  public readonly tweetList: TweetListEntity = new TweetListEntity();

  public constructor(opts?: OmitProperties<TweetsState, Function>) {
    Object.assign(this, opts);
    Object.freeze(this);
  }
}
