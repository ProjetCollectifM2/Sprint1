import { Component, Input  } from '@angular/core';
import { ToastrModule,ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ngx-localstorage';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  log:string;
  pageRecu:string="";

  constructor (private trans:TranslateService,private router:Router,private localStor:LocalStorageService,private toastr:ToastrService) 
  {   
    this.trans.addLangs(['Fr','En']);
    this.trans.setDefaultLang('En');
      
  }


ngOnInit(){
             this.log= this.localStor.get('login');  
        }




switchLang(lang : string){
   this.trans.use(lang);
}

identifpage(Pag){
  this.pageRecu=Pag;
  console.log(this.pageRecu);
}

        }
