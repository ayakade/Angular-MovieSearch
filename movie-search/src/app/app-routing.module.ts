import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MyNewComponentComponent } from './components/my-new-component/my-new-component.component';
import { SearchComponent } from './components/search/search.component';

// this is where add our routes.
const appUrls: Routes = [
  { path: '', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appUrls)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
