import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesSearchComponent } from './movies-search/movies-search.component'
import { BookmarkedComponent } from './bookmarked/bookmarked.component'

const routes: Routes = [
  { path: '', component: MoviesSearchComponent},
  { path: 'bookmarks', component: BookmarkedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
