import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule } from './form/form.module';
import { NewsListModule } from './news-list/news-list.module';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormModule, NewsListModule, NavbarModule],
  exports: [FormModule, NewsListModule, NavbarModule],
})
export class ComponentsModule {}
