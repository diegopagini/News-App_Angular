import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  public news$: Observable<any>;

  constructor(private store: Store<{ news: any }>) {
    this.news$ = this.store.select('news');
  }

  ngOnInit(): void {
    this.news$.subscribe((value) => {
      // console.log(value.news?.categories);
      // console.log(value.news?.country);
    });
  }
}
