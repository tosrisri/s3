import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { CountdownComponent } from './countdown/countdown.component';

import { SitemapComponent, NgbdModalContent } from './sitemap/sitemap.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CountdownComponent,
    SitemapComponent, 
    NgbdModalContent, TutorialsComponent, ServicesComponent, PortfolioComponent, ContactComponent, ExperienceComponent, FooterComponent
  ],
  entryComponents: [NgbdModalContent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
