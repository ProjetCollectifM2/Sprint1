import { Injectable } from '@angular/core' ;
import { AngularFirestore } from '@angular/fire/firestore' ;
import { Categories } from '../models/categories' ;

@ Injectable ({
  providedIn: 'root'
  })
export class CategorieService {

constructor (private firestore: AngularFirestore) { }



AddCat (cat : Categories ) {

  return this.firestore.collection('catégories').add(cat);
}
listCategories()
   {
  return this.firestore.collection('catégories').snapshotChanges();
   }


deleteCategorie (catId: string )
{
  //debugger;
  //console.log(studentId);
  this.firestore.doc('catégories/'+catId).delete();
}


getCategorie (id :string) {
                         return this.firestore.doc('catégories/'+id ).get();
                        }


updateCat (cat : Categories ) { 
          return this.firestore.doc('catégories/'+cat.id ).update(cat);
         }
}
