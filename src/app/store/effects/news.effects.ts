import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import { NewsService } from 'src/app/services/news.service';
import { searchNew, responseFromService } from '../actions/news.actions';

@Injectable()
export class newsEffect {
  searchNew$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchNew),
      // Para acceder al payload de la accion que se esta escuchando
      map((action) => action.data),
      map((action) => {
        const { categories, country } = action;
        const serviceResponse: Observable<any> = this.newsService.getNews(
          country,
          categories
        );
        return serviceResponse;
      }),
      mergeMap((serviceResponse) => serviceResponse),
      map((serviceResponse) => serviceResponse.articles),
      filter((serviceResponse) => serviceResponse && !!serviceResponse),
      map((serviceResponse) =>
        responseFromService({ response: serviceResponse })
      )
    )
  );

  constructor(private actions$: Actions, private newsService: NewsService) {}
}
