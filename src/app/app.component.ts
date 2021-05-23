import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'news';
  public loading$: Observable<any>;

  constructor(private store: Store<{ news: any }>) {
    this.loading$ = this.store
      .select('news')
      .pipe(map((store) => store.loading));
  }

  ngOnInit() {
    this.loading$.subscribe();
  }
}
