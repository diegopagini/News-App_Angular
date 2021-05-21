import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { searchNew } from '../actions/news.actions';

@Injectable()
export class newsEffect {
  searchNew$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(searchNew),
        tap(() => {
          // console.log(searchNew);
        })
      ),

    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
