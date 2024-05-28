import { Component, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthServiceService } from '../../servicios/user-auth-service.service';
import { MatCheckboxModule, MatCheckboxChange} from '@angular/material/checkbox';
import { FireStoreService } from '../../servicios/fire-store.service';
import { FirestoreModule } from '@angular/fire/firestore';
import { MatGridListModule } from '@angular/material/grid-list';
import { Actor } from '../../models/actor';
import { ApiCallsService } from '../../servicios/api-calls.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-actor-alta',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, FirestoreModule, CommonModule],
  templateUrl: './actor-alta.component.html',
  styleUrl: './actor-alta.component.css'
})
export class ActorAltaComponent implements OnInit{
  nombre: string="";
  pais:string="";
  paises:string[]=[];
  lista: Actor[] = [];

  form: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private fireStore: FireStoreService,
    private apicall:ApiCallsService,
    private http: HttpClient
  ){
    this.form = new FormGroup({
      nombre: new FormControl(),
      pais: new FormControl()
    })
  }

  ngOnInit(): void {
    // this.apicall.getPaises()
    // .subscribe(
    //   paises => {
    //     this.paises = paises;
    //     console.log('paises:', this.paises);
    //   },
    //   error => {
    //     console.error('There was an error on the apiCall!', error);
    //   }
    // );

  }

  onSubmit() {
    // const date =this.form.value['fechaEstreno'].format('DD-MM-YYYY HH:mm:ss');
    this.fireStore.setData(this.form.value, 'actores');

    // this.router.navigate(['/bienvenido']);
      console.log("agregamo un actors!!!");
  }

}
