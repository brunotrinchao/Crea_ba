import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AutenticationProvider } from '../autentication/autentication';


@Injectable()
export class ContatoServiceProvider {

  name: any;
  email: any;
  phone: any;
  message: any;

  header: Headers;
  data: any;

  constructor(
    public http: Http,
    private autentication: AutenticationProvider 
  ) {
    this.header = new Headers({ 'Access-Control-Allow-Origin': '*' });
  }

   public sendContato(): Promise<any>{

      return new Promise((resolve, reject) => {
        
        this.http.post("http://revistacreabahia.com.br/api/sendmessage?token="+this.autentication.token+"&name="+this.data.name+"&email="+this.data.email+"&phone="+this.data.phone+"&message="+this.data.message, this.header)
        .map(res => res.json()).subscribe(data => {
            resolve(data);
        }, erro => {
          reject(erro);
        });

      });

   }

}
