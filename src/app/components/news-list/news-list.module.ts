import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list.component';

@NgModule({
  declarations: [NewsListComponent],
  imports: [CommonModule],
  exports: [NewsListComponent],
})
export class NewsListModule {}
