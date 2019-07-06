import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';
import { CharactersHomeComponent } from './characters/characters-home/characters-home.component';
import { CharacterCardComponent } from './characters/character-card/character-card.component';
import { LoaderComponent } from './loader/loader.component';
import { CharacterFilmsComponent } from './characters/character-films/character-films.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AboutComponent,
    CharactersComponent,
    CharacterDetailComponent,
    CharactersHomeComponent,
    CharacterCardComponent,
    LoaderComponent,
    CharacterFilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
