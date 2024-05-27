import { TablaPeliculaComponent } from "../tabla-pelicula/tabla-pelicula.component";
import { DetallePeliculaComponent } from "../detalle-pelicula/detalle-pelicula.component";
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-busqueda',
    standalone: true,
    templateUrl: './busqueda.component.html',
    styleUrl: './busqueda.component.css',
    imports: [TablaPeliculaComponent, DetallePeliculaComponent, CommonModule]
})
export class BusquedaComponent {
    detallesPelicula: any;
    mostrarDetalle:boolean=false;

    manejarSeleccion(pelicula: any) {
        this.detallesPelicula = pelicula;
        console.log("busqueda: ", this.detallesPelicula);
        this.mostrarDetalle=true;
      }
}
