import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Gustavo'
  },
  {
    path: '',
    component: HomeComponent,
    title: 'Gustavo'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'Gustavo'
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Gustavo'
  },
  {
    path: 'skills',
    component: SkillsComponent,
    title: 'Gustavo'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
