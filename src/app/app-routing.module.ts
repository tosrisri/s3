import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from "./about/about.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { ContactComponent } from "./contact/contact.component";
import { ExperienceComponent } from "./experience/experience.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ServicesComponent } from "./services/services.component";
import { TutorialsComponent } from "./tutorials/tutorials.component";
import { UxComponent } from "./tutorials/ux/ux.component";
import { AsdaComponent } from "./portfolio/asda/asda.component";
import { AmalComponent } from './portfolio/amal/amal.component';

const routes: Routes = [
  { path: 'home', component: CarouselComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'tutorials', component: TutorialsComponent },
  { path: 'tutorials/ux', component: UxComponent },
  { path: 'portfolio/asda', component: AsdaComponent },
  { path: 'portfolio/amal', component: AmalComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
