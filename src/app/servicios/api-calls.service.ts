import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Pelicula } from '../models/pelicula';
import { Observable, of } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';


const movies_API_URL = 'https://api.themoviedb.org/3/movie/popular';
const movies_API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDQ3OGY2ZmVhOWI0ZDM0YzQwZjZhMTc5MGRhM2U5OSIsInN1YiI6IjY2NTI1NWZjNDZjNWNiMWU5ODdmMzk4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hUqh8EA08b9V3NDHDiSLOFV4JhB4tPVWemsL04tKEXg';
const paises_API_URL = 'https://restcountries.com/v3.1/all';


@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  public peliculas:Pelicula[] = [];

  constructor(private http: HttpClient) { }

  getPaises(): Observable<any[]> {
    return this.http.get<any[]>(paises_API_URL)
      .pipe(
        map(paises => paises.sort((a, b) => {
          if (a.name.common < b.name.common) {
            return -1;
          } else if (a.name.common > b.name.common) {
            return 1;
          } else {
            return 0;
          }
        })),
        catchError(error => {
          console.error('Error fetching countries:', error);
          return of([]); // Return an empty array or handle the error as needed
        })
      );
  }

  TraerPeliculas(): Observable<Pelicula[]> {
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${movies_API_TOKEN}`
    });

    return this.http.get<any>(movies_API_URL, { headers }).pipe(
        map(response => {
            return response.results.map((item: any) => {
                const tipo = this.mapGenreIdToTipo(item.genre_ids);
                return new Pelicula(
                    item.id.toString(),
                    item.title,
                    tipo,
                    new Date(item.release_date),
                    item.vote_count,
                    `https://image.tmdb.org/t/p/w500${item.poster_path}`
                );
            });
        })
    );
  }

  private mapGenreIdToTipo(genreIds: number[]): 'terror' | 'comedia' | 'amor' | 'otros' {
      if (genreIds.includes(27)) return 'terror';
      if (genreIds.includes(35)) return 'comedia';
      if (genreIds.includes(10749)) return 'amor';
      return 'otros';
  }
}

