import { HttpErrorResponse } from '@angular/common/http';
import { TweetListEntity } from './components/tweet-list/tweet-list.entity';
import { TweetEntity } from './components/tweet/tweet.entity';

export enum ActionTypes {
  Init = '[TweetsActions] Init',
  Destroy = '[TweetsActions] Destroy',
  LoadSuccess = '[TweetsActions][BE] Load Success',
  LoadError = '[TweetsActions][BE] Load errors',
  LoadMore = '[TweetsActions] Load More',
  LoadMoreSuccess = '[TweetsActions][BE] Load More Success',
  AddTweet = '[TweetsActions] Add new Tweet',
  AddTweetSuccess = '[TweetsActions][BE] Add new Tweet Success',
  EditTweet = '[TweetsActions] Edit Tweet',
  EditTweetSuccess = '[TweetsActions][BE] Edit Tweets Success'
}

export namespace TweetsActions {
  export class Init {
    public readonly type = ActionTypes.Init;
  }

  export class Destroy {
    public readonly type = ActionTypes.Destroy;
  }

  export class LoadSuccess {
    public readonly type = ActionTypes.LoadSuccess;
    public constructor(public payload: TweetListEntity) {}
  }

  export class LoadError {
    public readonly type = ActionTypes.LoadError;
    public constructor(public payload: HttpErrorResponse) {}
  }

  export class LoadMore {
    public readonly type = ActionTypes.LoadMore;
    public constructor(public payload: number) {}
  }

  export class LoadMoreSuccess {
    public readonly type = ActionTypes.LoadMoreSuccess;
    public constructor(public payload: TweetListEntity) {}
  }

  export class AddTweet {
    public readonly type = ActionTypes.AddTweet;
    public constructor(public payload: TweetEntity) {}
  }

  export class AddTweetSuccess {
    public readonly type = ActionTypes.AddTweetSuccess;
    public constructor(public payload: TweetEntity) {}
  }

  export class EditTweet {
    public readonly type = ActionTypes.EditTweet;
    public constructor(public payload: TweetEntity) {}
  }

  export class EditTweetSuccess {
    public readonly type = ActionTypes.EditTweetSuccess;
    public constructor(public payload: TweetEntity) {}
  }
}
