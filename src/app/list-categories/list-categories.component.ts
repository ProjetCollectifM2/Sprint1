import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../shared/services/Categorie.service';
import { Categories } from '../shared/models/categories';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { TranslateService } from '@ngx-translate/core';
import { MatGridListModule, MatToolbarModule } from '@angular/material';


@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})

export class ListCategoriesComponent implements OnInit {

 
  categories: Categories[];

constructor(private trans:TranslateService,private servstudents: CategorieService) { }
  
ngOnInit():void {  this.getAllCategories (); }



getAllCategories () {

                    this.servstudents.listCategories().subscribe
                     (data => {
                                this.categories = data.map ( e => {return {id:e.payload.doc.id , ...e.payload.doc.data() as Categories };})
                              }
                                                              );
                  }

                }
