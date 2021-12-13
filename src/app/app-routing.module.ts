import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { BookComponent } from './components/book/book.component'
import { SearchResultsComponent } from './components/search-results/search-results.component'
import { BookFormComponent } from './components/book-form/book-form.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
  path: 'newBook',
  component: BookFormComponent,
  pathMatch: 'full'
  },
  {
  path: 'search',
  component: SearchResultsComponent,
  pathMatch: 'full'
  }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
