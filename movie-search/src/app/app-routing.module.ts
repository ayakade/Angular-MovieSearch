import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { DetailComponent } from './components/detail/detail.component';

// this is where add our routes.
const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
