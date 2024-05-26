import { Component } from '@angular/core';
import { TablaPeliculaComponent } from "../tabla-pelicula/tabla-pelicula.component";
import { DetallePeliculaComponent } from "../detalle-pelicula/detalle-pelicula.component";

@Component({
    selector: 'app-busqueda',
    standalone: true,
    templateUrl: './busqueda.component.html',
    styleUrl: './busqueda.component.css',
    imports: [TablaPeliculaComponent, DetallePeliculaComponent]
})
export class BusquedaComponent {
    detallesPelicula: any;

    manejarSeleccion(pelicula: any) {
        this.detallesPelicula = pelicula;
        console.log("busqueda: ", this.detallesPelicula);
      }
}
