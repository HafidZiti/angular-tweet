import { Type } from '@angular/core';
import { Action } from '@ngrx/store';
import { filter, Observable } from 'rxjs';

export function ofAction<T extends Action>(
  ...actions: Array<Type<T>>
): (obs: Observable<Action>) => Observable<T> {
  return (obs: Observable<Action>) => {
    return obs.pipe(
      filter((action): action is T => {
        return (
          actions.find(actionClass => action instanceof actionClass) !==
          undefined
        );
      })
    );
  };
}
