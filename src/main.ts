import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { register as registerSwiperElements } from 'swiper/element/bundle';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';


registerSwiperElements();

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()), // Fournit HttpClient avec intercepteurs
    provideRouter(routes),                   // Fournit les routes définies
    ...appConfig.providers,                     // Ajoute les autres fournisseurs de appConfig
  ],
})
.catch((err) => console.error(err));