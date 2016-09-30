import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent }  from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';
import {ArtistComponent} from './components/artist/artist.component';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    AboutComponent,
    ArtistComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
