import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"labo4-practica-pp","appId":"1:415380891946:web:fad035178ed5bad7dbd653","storageBucket":"labo4-practica-pp.appspot.com","apiKey":"AIzaSyBUOfX9nfil0X7pfkrhMyN7vEmMDFqqUAg","authDomain":"labo4-practica-pp.firebaseapp.com","messagingSenderId":"415380891946"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideAnimationsAsync()]
};
