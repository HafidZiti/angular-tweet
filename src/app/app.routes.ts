import { TweetsComponent } from './tweets/components/tweets/tweets.component';
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'tweets', pathMatch: 'full' },
  { path: 'tweets', component: TweetsComponent }
];
