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

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 70; // Ajustez cette valeur en fonction de la hauteur de votre navbar
      const offset = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: offset,
        behavior: 'smooth' // Défilement fluide
      });
    }
  }

  scrollToBottom(): void {
    window.scrollTo({
      top: document.body.scrollHeight, // Défile jusqu'au bas de la page
      behavior: 'smooth' // Défilement fluide
    });
  }
  

}
