import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { CategorieService } from '../../../shared/services/Categorie.service' ;
import { Categories } from '../../../shared/models/Categories' ;
import { AngularFirestore } from '@angular/fire/firestore' ;
import {NgForm} from '@angular/forms';
import {Observable, Subscription}  from 'rxjs';
import { ToastrModule,ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-update-categorie',
  templateUrl: './add-update-categorie.component.html',
  styleUrls: ['./add-update-categorie.component.css']
})
export class AddUpdateCategorieComponent implements OnInit {
  adForm: NgForm;
  public categorie = new Categories(); 

  constructor(private trans:TranslateService, private Categorie : CategorieService, private route: ActivatedRoute,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {

    let id=this.route.snapshot.queryParams['id'];
    if (id) {this.getcategorie(id);
    }

  }


  getcategorie (id:string) {
    this.Categorie.getCategorie(id).subscribe(res => {
                                                            this.categorie = res.data() as Categories ;
                                                            this.categorie.id = res.id ;
                                                          });
                                                        }


save () {

 if (!this.categorie.id) {
      this.Categorie.AddCat({ ... this.categorie}).then((res) => {
     
        this.toastr.success(this.trans.instant('ToastMassega.succ'),'add categories!');
        this.router.navigate(['/categories']);
        
        })
    } else {  
    this.Categorie.updateCat(this.categorie);
    this.toastr.success(this.trans.instant('ToastMassega.succ'),this.trans.instant('ToastMassega.oper1'));
    this.router.navigate(['/categories']);
    }
     
}


}
