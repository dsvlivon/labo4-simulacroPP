import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-pelicula',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-pelicula.component.html',
  styleUrl: './detalle-pelicula.component.css'
})
export class DetallePeliculaComponent {
  @Input() pelicula: any;
  keys: string[] | undefined;

  ngOnChanges() {
    if (this.pelicula) {
      this.keys = Object.keys(this.pelicula);
    }
  }
}
