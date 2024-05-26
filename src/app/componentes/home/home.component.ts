import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../servicios/api-calls.service'
import { Pelicula } from '../../models/pelicula';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FireStoreService } from '../../servicios/fire-store.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  peliculas: Pelicula[] = [];
  
  constructor(
    // private apiService: ApiCallsService
    private fireStore:FireStoreService
  ){}

  ngOnInit(): void {
    this.getPeliculas();
  }

  // getPeliculas(){
  //   this.apiService.TraerPeliculas();
  //   this.peliculas = this.apiService.peliculas;
  //   console.log("peliculas: ", this.peliculas); 
  // }

  getPeliculas(){
    this.fireStore.GetData('peliculas');
    this.peliculas = this.fireStore.res;

  }
}
