import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITweet } from './tweet.interface';

// This file can contain the HTTP call
// e.g:

@Injectable({ providedIn: 'root' })
export class TweetRequester {
  constructor(private http: HttpClient) {}

  getTweets(): Observable<Array<ITweet>> {
    return this.http.get<ITweet[]>('/api/tweets');
  }
}
