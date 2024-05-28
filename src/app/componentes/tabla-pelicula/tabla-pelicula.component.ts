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
  lista: Pelicula[] = [];

  constructor( private fireStore:FireStoreService ){}

  ngOnInit(): void { this.getDatos(); }

  getDatos(){
    setTimeout(() => {
      this.fireStore.GetData('peliculas');
      this.lista = this.fireStore.res;
      this.fireStore.res= [];
    }, 200);
    // console.log("tablapelis component: ", this.lista);
  }

  emitirDetalles(pelicula: any) {
    this.peliculaSeleccionada.emit(pelicula);
  }
}
