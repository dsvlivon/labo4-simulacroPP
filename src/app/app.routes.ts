import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';

import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';

export const routes: Routes = [

    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/bienvenido', pathMatch: "full" },
    { path: 'bienvenido', component: HomeComponent },
    { path: 'busqueda', component: BusquedaComponent },
    { path: 'peliculas/alta', component: PeliculaAltaComponent },
    { path: 'peliculas/listado', component: TablaPeliculaComponent },
    { path: 'actor/alta', component: ActorAltaComponent },
    { path: 'actor/listado', component: ActorListadoComponent },
    
    /* Se deben hacer las siguientes rutas:
    a. /bienvenido
    b. /búsqueda “componente:busqueda”
    c. /peliculas/alta “componente:peliculaAlta”
    d. /actor/alta “componente:actorAlta”
    e. /actor/listado “componente:actorListado”
    f. /peliculas/listado “componente: peliculaListado”
    */
];


