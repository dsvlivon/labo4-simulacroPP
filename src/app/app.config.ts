import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient(),
    provideClientHydration(), 
    provideFirebaseApp(() => 
      initializeApp({
        "projectId":"labo4-practica-pp",
        "appId":"1:415380891946:web:fad035178ed5bad7dbd653",
        "storageBucket":"labo4-practica-pp.appspot.com",
        "apiKey":"AIzaSyBUOfX9nfil0X7pfkrhMyN7vEmMDFqqUAg",
        "authDomain":"labo4-practica-pp.firebaseapp.com",
        "messagingSenderId":"415380891946"}
      )), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore()), 
    provideAnimationsAsync()
  ],
};

/*
const firebaseConfig = {
  apiKey: "AIzaSyBUOfX9nfil0X7pfkrhMyN7vEmMDFqqUAg",        OK
  authDomain: "labo4-practica-pp.firebaseapp.com",          OK
  projectId: "labo4-practica-pp",                           OK
  storageBucket: "labo4-practica-pp.appspot.com",           OK
  messagingSenderId: "415380891946",                        OK
  appId: "1:415380891946:web:fad035178ed5bad7dbd653"        OK
};
*/