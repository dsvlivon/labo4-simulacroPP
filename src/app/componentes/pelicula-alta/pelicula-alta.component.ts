import { Component, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthServiceService } from '../../servicios/user-auth-service.service';
import { MatCheckboxModule, MatCheckboxChange} from '@angular/material/checkbox';
import { FireStoreService } from '../../servicios/fire-store.service';
import { FirestoreModule } from '@angular/fire/firestore';
import { MatGridListModule } from '@angular/material/grid-list';
import { ActorAltaComponent } from "../actor-alta/actor-alta.component";
import { Actor } from '../../models/actor';


enum TipoPelicula {
  Terror = 'terror',
  Comedia = 'comedia',
  Amor = 'amor',
  Otros = 'otros'
}

@Component({
    selector: 'app-pelicula-alta',
    standalone: true,
    templateUrl: './pelicula-alta.component.html',
    styleUrl: './pelicula-alta.component.css',
    imports: [ReactiveFormsModule, FormsModule, MatCheckboxModule, FirestoreModule, CommonModule, MatGridListModule, ActorAltaComponent]
})


export class PeliculaAltaComponent implements OnInit{
  nombre: string="";
  fechaEstreno: string="";
  cantidadPublico:number=0;
  foto: string="";

  lista: Actor[] = [];
  // actor: Actor = new Actor(" "," "," ");
  actoresSelect: string[] =[];
  tipo: TipoPelicula=TipoPelicula.Otros; //por default
  tiposPelicula: string[] = Object.values(TipoPelicula);
  

  form: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private fireStore: FireStoreService
  ){
    this.form = new FormGroup({
          nombre: new FormControl(),
          fechaEstreno: new FormControl(),
          cantidadPublico: new FormControl(),
          foto: new FormControl(),
          tipo: new FormControl(),
          actor: new FormControl()
        })
    }

  onSubmit() {
    // const date =this.form.value['fechaEstreno'].format('DD-MM-YYYY HH:mm:ss');
    this.fireStore.setData(this.form.value, 'peliculas');
   
    // this.router.navigate(['/bienvenido']);     
      console.log("agregamo una peli!!!");
  }

  getDatos(){
    this.fireStore.GetActores('actores');
    this.lista = this.fireStore.actores;
    this.setearSelect()
    console.log("alta-peli actores component: ", this.lista);
    this.fireStore.res = [];
  }

  ngOnInit(): void { 
    this.getDatos();

  }

  setearSelect(){  
    this.lista.forEach(element => {
      this.actoresSelect.push(element.nombre);
    });
    console.log("select actores: ", this.actoresSelect)
  }
}

