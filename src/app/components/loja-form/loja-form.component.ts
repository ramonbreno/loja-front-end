import { Component, OnInit } from '@angular/core';
import{Loja}  from '../../loja';
import{Router}  from '@angular/router';
import{LojaService}  from '../../shared-service/loja.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './loja-form.component.html',
  styleUrls: ['./loja-form.component.css']
})
export class LojaFormComponent implements OnInit {
  private loja:Loja;

  constructor(private _lojaService:LojaService,private _rotuer:Router) { }

  ngOnInit() {
    this.loja=this._lojaService.getter();
  }

  processForm(){
    if(this.loja.id==undefined){
        console.log(this.loja.id);

       this._lojaService.createLoja(this.loja).subscribe((loja)=>{
         console.log(loja);
         this._rotuer.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    }else{
       this._lojaService.updateLoja(this.loja).subscribe((loja)=>{
         console.log(loja);
         this._rotuer.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    }
  }

}
