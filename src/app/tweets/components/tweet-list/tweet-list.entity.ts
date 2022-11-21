import { OmitProperties } from 'ts-essentials';
import { TweetEntity } from '../tweet/tweet.entity';

export class TweetListEntity {
  public readonly tweets: Array<TweetEntity> = [];
  public readonly loading: boolean = true;
  public readonly error: string = '';

  public constructor(opts?: OmitProperties<TweetListEntity, Function>) {
    Object.assign(this, opts);
    Object.freeze(this);
  }
}
