import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],  // Assurez-vous d'importer CommonModule pour utiliser ngClass
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;
  isSticky: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isSticky = scrollOffset > 50;
  }

  // Fonction pour faire défiler vers la section spécifique
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    const navbarHeight = document.querySelector('.navbar')?.clientHeight || 0;

    if (element) {
      const elementPosition = element.offsetTop - navbarHeight;  // Soustraction de la hauteur de la navbar
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'  // Pour un défilement fluide
      });
    }
  }
}
