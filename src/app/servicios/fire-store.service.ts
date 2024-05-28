import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, documentId, getDocs  } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { ReturnStatement } from '@angular/compiler';
import { limit, orderBy, query, where } from 'firebase/firestore';
import { format } from 'date-fns';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';



@Injectable({
  providedIn: 'root'
})
export class FireStoreService {
  public res:any[] = [];
  public actores:any[] = [];
  
  public countRes:number = 0;
  private sub!:Subscription;


  constructor(private fireStore: Firestore) { }

  setData(obj:any, coleccion:string) {
    let col = collection(this.fireStore, coleccion);
    
    addDoc(col, obj)
  }

  GetData(coleccion:string){
    let col = collection(this.fireStore, coleccion);
    
    const observable = collectionData(col);

    this.sub = observable.subscribe((respuesta:any) => {

      this.res = respuesta;
      this.countRes = this.res.length;

      console.log("fireStore service: ", this.res);
    })
  }

  GetActores(coleccion:string){
    let col = collection(this.fireStore, coleccion);
    
    const observable = collectionData(col);

    this.sub = observable.subscribe((respuesta:any) => {

      this.actores = respuesta;
      this.countRes = this.res.length;

      console.log("fireStore service: ", this.res);
    })
  }
  // createMessage(message: any) {
  //   this.fireStore.collection<any>('chat').add(message);
  // }

  // getChat() {
  //   const collection = this.fireStore.collection<any>('chat', (ref) =>
  //     ref.orderBy('date', 'asc').limit(50)
  //   );
  //   return collection.valueChanges();
  // }

  
}
