import { Component, OnInit } from '@angular/core';
import{LojaService}  from '../../shared-service/loja.service';
import{Loja}  from '../../loja';
import{Router}  from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listloja.component.html',
  styleUrls: ['./listloja.component.css']
})
export class ListlojaComponent implements OnInit {
  private lojas:Loja[];
  constructor(private _lojaService:LojaService, private _router:Router) { }

  ngOnInit() {
      this._lojaService.getLojas().subscribe((lojas)=>{
        console.log(lojas.length);
        this.lojas=lojas;
      },(error)=>{
        console.log(error);
      })
  }
  deleteLoja(loja){
    this._lojaService.deleteLoja(loja.id).subscribe((data)=>{
        this.lojas.splice(this.lojas.indexOf(loja),1);
    },(error)=>{
      console.log(error);
    });
  }
   updateLoja(loja){
     this._lojaService.setter(loja);
     this._router.navigate(['/op']);
   }
   newLoja(increment){
   let loja = new Loja();
   loja.id = increment + 1;
    this._lojaService.setter(loja);
     this._router.navigate(['/op']);
   }
}
