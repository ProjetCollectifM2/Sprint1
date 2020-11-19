import { Component, OnInit } from '@angular/core';
import { Categories } from '../../shared/models/categories';
import {CategorieService} from '../../shared/services/Categorie.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-gestion-categories',
  templateUrl: './gestion-categories.component.html',
  styleUrls: ['./gestion-categories.component.css']
})
export class GestionCategoriesComponent implements OnInit {
  categories: Categories[];


  constructor(private trans:TranslateService,private servstudents: CategorieService ) { }

  ngOnInit() {this.getAllCategories (); 
  }

  getAllCategories () {


    this.servstudents.listCategories().subscribe
     (data => {
                this.categories = data.map ( e => {return {id:e.payload.doc.id , ...e.payload.doc.data() as Categories };})
              }
                                              );
  }

delete (id:string,nom: string) {

  Swal.fire({
    title: this.trans.instant('ToastMassega.del'),
    text: this.trans.instant('ToastMassega.delconf',{nom}),
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: 'red',
    cancelButtonColor: '#3085d6',
    cancelButtonText: this.trans.instant('ToastMassega.close'),
    confirmButtonText: this.trans.instant('ToastMassega.confDelete'),
  }).then((result) => {
    if (result.value) {
      this.servstudents.deleteCategorie(id);
      Swal.fire(
        'Supprimer !',
        'Le fichier a été supprimé .',
        'Succée'
      )
    }
  })
      
        }

}
