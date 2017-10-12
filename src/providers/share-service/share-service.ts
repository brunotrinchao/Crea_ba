import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ShareServiceProvider {

  id: any;
  number: any;


  summary: any;

  constructor(public http: Http) {
    this.id = null;
  }

  public setId(id){
    this.id = id;
  }

  public getId(){
    return this.id;
  }

  public setNumber(number){
    this.number = number;
  }

  public getNumber(){
    return this.number;
  }

  public setSummary(data){
    this.summary = data;
  }

  public getSummary(){
    return this.summary;
  }

}
