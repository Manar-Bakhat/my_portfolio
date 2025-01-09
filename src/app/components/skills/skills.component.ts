import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  scrollCarousel(direction: 'prev' | 'next'): void {
    const carouselElement = this.carousel.nativeElement as HTMLElement;
    const scrollAmount = 150; // Ajustez cette valeur selon vos besoins

    if (direction === 'prev') {
      carouselElement.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      carouselElement.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

}
