import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { register as registerSwiperElements } from 'swiper/element/bundle';

registerSwiperElements();

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),  // Fournit HttpClient avec support d'intercepteurs si définis
    ...appConfig.providers,  // Conserve les autres fournisseurs dans appConfig
  ],
})
.catch((err) => console.error(err));