import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';
import { searchNew } from '../../store/actions/news.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public searchForm: FormGroup;
  public temp$: Observable<any>;
  public categories: any[] = [
    { value: 'general', nombre: 'General' },
    { value: 'business', nombre: 'Negocios' },
    { value: 'entertainment', nombre: 'Entretenimiento' },
    { value: 'healt', nombre: 'Salud' },
    { value: 'science', nombre: 'Ciencia' },
    { value: 'sports', nombre: 'Deportes' },
    { value: 'technology', nombre: 'Tecnología' },
  ];
  public countries: any[] = [
    { value: 'ar', nombre: 'Argentina' },
    { value: 'br', nombre: 'Brasil' },
    { value: 'fr', nombre: 'Francia' },
    { value: 'hu', nombre: 'Hungria' },
    { value: 'mx', nombre: 'Mexico' },
    { value: 'gb', nombre: 'Reino Unido' },
  ];

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private newsService: NewsService
  ) {
    this.searchForm = this.fb.group({
      categories: ['', [Validators.required]],
      country: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  sendRequest() {
    this.store.dispatch(searchNew({ data: this.searchForm.value }));
    this.temp$ = this.newsService.getNews(
      this.searchForm.get('country').value,
      this.searchForm.get('categories').value
    );

    // this.temp$.subscribe((value) => console.log(value));
  }
}
