import { OmitProperties } from 'ts-essentials';

export class TweetEntity {
  public readonly id: string = '';
  public readonly content: string = '';
  public readonly datetime: string = '';
  public readonly likes: number = 0;

  public constructor(opts?: OmitProperties<TweetEntity, Function>) {
    Object.assign(this, opts);
    Object.freeze(this);
  }
}
