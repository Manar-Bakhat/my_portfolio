import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { EduExpComponent } from '../../edu-exp/edu-exp.component';
import { ContactComponent } from '../contact/contact.component';
import { WorksComponent } from '../works/works.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, AboutComponent, SkillsComponent, EduExpComponent, ContactComponent, WorksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
