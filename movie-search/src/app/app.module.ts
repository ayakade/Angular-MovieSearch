import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app-component/app.component';
import { MagicModule } from './magic/magic.module';
import { MyNewComponentComponent } from './components/my-new-component/my-new-component.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    HighlightDirective,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MagicModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
