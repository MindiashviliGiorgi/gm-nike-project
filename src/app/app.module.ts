import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { ExploreGiftsSectionComponent } from './components/explore-gifts-section/explore-gifts-section.component';
import { TrendingSectionComponent } from './components/trending-section/trending-section.component';
import { SingleItemComponent } from './pages/single-item/single-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { BagComponent } from './components/bag/bag.component';
import { BagPageComponent } from './pages/bag-page/bag-page.component';
import { HttpClientModule } from '@angular/common/http'
import { LanguageService } from './shared/language.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    WelcomeSectionComponent,
    ExploreGiftsSectionComponent,
    TrendingSectionComponent,
    SingleItemComponent,
    FooterComponent,
    BagComponent,
    BagPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
