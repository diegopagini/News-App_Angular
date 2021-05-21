import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiKey: string = '74734e91acae495886628fefc78ae596';
  private url: string = ' https://newsapi.org/v2/top-headlines?';

  constructor(private http: HttpClient) {}

  getNews(country: string, category: string) {
    const URL: string = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.apiKey}`;
    this.http.get(URL);
  }
}
