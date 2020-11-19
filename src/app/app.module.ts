import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule, MatToolbarModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule , Routes } from '@angular/router';
import { AddUpdateCategorieComponent} from './espaceadmin/gestion_categories/add-update-categorie/add-update-categorie.component';
import { AngularFireModule } from '@angular/fire' ;
import { AngularFireDatabaseModule } from '@angular/fire/database' ;
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { CategorieService} from './shared/services/categorie.service';
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import {Observable, Subscription, from}  from 'rxjs';
import { ToastrModule,ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {NgxLocalStorageModule} from 'ngx-localstorage';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { EspaceadminComponent } from './espaceadmin/espaceadmin.component';
import { GestionCategoriesComponent } from './espaceadmin/gestion-categories/gestion-categories.component';
import {MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';

const routes : Routes = [
   {path:'categories',component:GestionCategoriesComponent},
   {path:'add-categories',component:AddUpdateCategorieComponent},
   { path:'', component: ListCategoriesComponent},
   { path:'espace_admin', component: EspaceadminComponent},
   { path:'Accueil', component:ListCategoriesComponent},
  ];
  @NgModule({
    declarations: [
      AppComponent,
      GestionCategoriesComponent,
      AddUpdateCategorieComponent,
      ListCategoriesComponent,
      EspaceadminComponent,
      GestionCategoriesComponent,
      AddUpdateCategorieComponent,
    ],

    imports: [BrowserModule,RouterModule.forRoot(routes),
       MatToolbarModule,
       MatSidenavModule,
       MatListModule,
       MatButtonModule,
       MatIconModule,
       AngularFireModule.initializeApp(environment.firebase),
       AngularFireDatabaseModule,AngularFirestoreModule.enablePersistence(),
       FormsModule,ToastrModule.forRoot(),BrowserAnimationsModule,AngularFireAuthModule,
       NgxLocalStorageModule.forRoot(),BsDropdownModule.forRoot(),HttpClientModule,
       MatGridListModule, MatToolbarModule,
       TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
      ],
    
    providers: [AngularFireModule,CategorieService,ToastrService],
    bootstrap: [AppComponent]
  })

  export class AppModule { }

 
export function HttpLoaderFactory(http: HttpClient) {
 return new TranslateHttpLoader(http,'assets/i18n/','.json');
   }