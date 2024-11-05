import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importation nécessaire pour ngClass

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],  // Ajout de CommonModule ici pour activer ngClass
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']  // Assurez-vous que c'est 'styleUrls' et non 'styleUrl'
})
export class NavbarComponent {

  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isSticky = scrollOffset > 50;
  }
}

