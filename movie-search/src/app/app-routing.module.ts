import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { DetailComponent } from './components/detail/detail.component';

// this is where add our routes.
const appUrls: Routes = [
  { path: '', component: SearchComponent },
  { path: '/detail', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appUrls)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
