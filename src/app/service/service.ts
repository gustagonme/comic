import { Injectable } from "@angular/core";
import { initializeApp } from "@angular/fire/app";
import { getFirestore } from "@angular/fire/firestore";
import { collection, addDoc } from "firebase/firestore";
import { environment } from "../enviroment/enviroment";
import { AngularFireDatabase } from "@angular/fire/compat/database";



@Injectable()
export class Service{

   

    constructor(private db: AngularFireDatabase){

    }

    async save(desicion: any){
        const data = desicion
        try {
            this.db.list('comic').push(data)
            .then(() => {
              console.log('Datos insertados correctamente');
            })
            .catch(error => {
              console.error('Error al insertar los datos:', error);
            });
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

}