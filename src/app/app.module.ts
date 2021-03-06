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
import { AboutComponent } from './about/about.component';
import { UxComponent } from './tutorials/ux/ux.component';
import { AsdaComponent } from './portfolio/asda/asda.component';
import { AmalComponent } from './portfolio/amal/amal.component';
import { ZemosoComponent } from './portfolio/zemoso/zemoso.component';
import { ParaminfoComponent } from './portfolio/paraminfo/paraminfo.component';
import { CssPropertiesComponent } from './tutorials/css-properties/css-properties.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CountdownComponent,
    SitemapComponent, 
    NgbdModalContent, TutorialsComponent, ServicesComponent, PortfolioComponent, ContactComponent, ExperienceComponent, FooterComponent, AboutComponent, UxComponent, AsdaComponent, AmalComponent, ZemosoComponent, ParaminfoComponent, CssPropertiesComponent
  ],
  entryComponents: [NgbdModalContent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
