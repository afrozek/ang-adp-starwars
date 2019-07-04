import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';
import { CharactersHomeComponent } from './characters/characters-home/characters-home.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'characters', component: CharactersComponent, children: [
    { path: '', component: CharactersHomeComponent },
    { path: ':id/detail', component: CharacterDetailComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
