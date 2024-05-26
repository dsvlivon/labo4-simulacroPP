import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FireStoreService } from '../../servicios/fire-store.service';
import { Pelicula } from '../../models/pelicula';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-tabla-pelicula',
  standalone: true,
  imports: [ MatGridListModule, MatIconModule, MatGridListModule, CommonModule, MatTableModule],
  templateUrl: './tabla-pelicula.component.html',
  styleUrl: './tabla-pelicula.component.css'
})
export class TablaPeliculaComponent implements OnInit{
  @Output() peliculaSeleccionada = new EventEmitter<any>();
  displayedColumns: string[] = [ 'foto', 'nombre', 'tipo', 'fechaEstreno', 'cantidadPublico'];
  peliculas: Pelicula[] = [];

  constructor( private fireStore:FireStoreService ){}

  ngOnInit(): void { this.getPeliculas(); }

  getPeliculas(){
    this.fireStore.GetData('peliculas');
    this.peliculas = this.fireStore.res;

    // console.log("tablapelis service: ", this.peliculas);
  }

  emitirDetalles(pelicula: any) {
    this.peliculaSeleccionada.emit(pelicula);
  }
}
