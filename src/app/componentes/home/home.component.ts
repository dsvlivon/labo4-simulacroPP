import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../servicios/api-calls.service'
import { Pelicula } from '../../models/pelicula';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FireStoreService } from '../../servicios/fire-store.service';
import { BusquedaComponent } from '../busqueda/busqueda.component';



@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HttpClientModule, BusquedaComponent]
})
export class HomeComponent {

  peliculas: Pelicula[] = [];
  
  constructor(
    // private apiService: ApiCallsService
    private fireStore:FireStoreService
  ){}
  
}
