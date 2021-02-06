import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material-module';
import { TableViewComponent } from './pages/table-view/table-view.component';
import { PokedexViewComponent } from './pages/pokedex-view/pokedex-view.component';
import { HttpClientModule } from '@angular/common/http';
import { PokeCardComponent } from './pages/table-view/components/poke-card/poke-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent,
    PokedexViewComponent,
    PokeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
