import { Routes } from '@angular/router';
import { WorksComponent } from './components/works/works.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Route par défaut
    { path: 'about', component: AboutComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'projects', component: WorksComponent },
    { path: 'contact', component: ContactComponent },
];
