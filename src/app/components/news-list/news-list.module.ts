import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NewsListComponent],
  imports: [CommonModule, SharedModule],
  exports: [NewsListComponent],
})
export class NewsListModule {}
