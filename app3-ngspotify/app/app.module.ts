import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';

import { AppComponent }  from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    AboutComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
