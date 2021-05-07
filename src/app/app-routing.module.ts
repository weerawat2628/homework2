import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
{
  path: 'about',
  component: AboutComponent
  },
  {
  path: 'skill',
  component: SkillComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
  path: 'portfolio',
  component: PortfolioComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
