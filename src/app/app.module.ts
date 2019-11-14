import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BirdsCardComponent } from './comp/cards/birds-card/birds-card.component';
import { WildsCardsComponent } from './comp/cards/wilds-cards/wilds-cards.component';
import { BeastsCardComponent } from './comp/cards/beasts-card/beasts-card.component';
import { PanelBirdsComponent } from './comp/panel/panel-birds/panel-birds.component';
import { PanelWildsComponent } from './comp/panel/panel-wilds/panel-wilds.component';
import { PanelBeastsComponent } from './comp/panel/panel-beasts/panel-beasts.component';
import { HeaderComponent } from './comp/general/header/header.component';
import { NavComponent } from './comp/general/nav/nav.component';
import { PaginationComponent } from './comp/general/pagination/pagination.component';
import { FooterComponent } from './comp/general/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BirdsCardComponent,
    WildsCardsComponent,
    BeastsCardComponent,
    PanelBirdsComponent,
    PanelWildsComponent,
    PanelBeastsComponent,
    HeaderComponent,
    NavComponent,
    PaginationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
