import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { NewsService } from 'src/app/services/news.service';
import { searchNew } from '../actions/news.actions';

@Injectable()
export class newsEffect {
  searchNew$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(searchNew),
        // Para acceder al payload de la accion que se esta escuchando
        map((action) => action.data),
        tap((action) => {
          const categories = action.categories;
          const country = action.country;
          this.newsService.getNews(country, categories);
          console.log(action);
        }),
        tap((response) => new Notification('sucess'))
      ),

    { dispatch: false }
  );

  constructor(private actions$: Actions, private newsService: NewsService) {}
}
