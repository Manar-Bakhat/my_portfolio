import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Vous pouvez appeler une méthode ici si vous voulez que le texte se lise immédiatement
  }

  speakText() {
    const speech = new SpeechSynthesisUtterance('Who am I?');
    speech.lang = 'en-US'; // Langue
    speech.volume = 1; // Volume
    speech.rate = 1; // Vitesse
    speech.pitch = 1; // Hauteur
    window.speechSynthesis.speak(speech); // Lecture du texte
  }

  // Cette méthode sera déclenchée au clic
  onClick() {
    const h1Element = document.querySelector('h1');
    if (h1Element) {
      h1Element.classList.add('clicked'); // Ajout de la classe pour l'animation
      this.speakText(); // Lire le texte à haute voix
    }
  }
}
