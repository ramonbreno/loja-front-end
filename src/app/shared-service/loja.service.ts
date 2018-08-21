import { Injectable } from '@angular/core';
import{Http, Response, Headers, RequestOptions} from '@angular/http';
import{Observable}   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import{Loja}  from '../loja';



@Injectable()
export class LojaService {
  private baseUrl:string='http://localhost:8080/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private loja = new Loja();
  constructor(private _http:Http) { }

  getLojas(){
    return this._http.get(this.baseUrl+'/lojas',this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  getLoja(id:Number){
    return this._http.get(this.baseUrl+'/loja/'+id,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  deleteLoja(id:Number){
    return this._http.delete(this.baseUrl+'/loja/'+id,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  createLoja(loja:Loja){
    return this._http.post(this.baseUrl+'/loja',JSON.stringify(Loja),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
   updateLoja(Loja:Loja){
    return this._http.put(this.baseUrl+'/loja',JSON.stringify(Loja),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  errorHandler(error:Response){
     return Observable.throw(error||"SERVER ERROR");
  }
   setter(loja:Loja){
     this.loja=loja;
   }
  getter(){
    return this.loja;
  }
}
