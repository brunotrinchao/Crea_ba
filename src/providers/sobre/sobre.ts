import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AutenticationProvider } from '../autentication/autentication';

@Injectable()
export class SobreProvider {

  header: Headers;

  constructor(
    public http: Http,
    private autentication: AutenticationProvider 
  ) {
    this.header = new Headers({ 'Access-Control-Allow-Origin': '*' });
  }

  

  public getSobre(): Promise<any>{
    
      return new Promise((resolve, reject) => {
      // Checa autenticação  
      this.autentication.autentictionToken().then((data) => {
        
        this.http.get("http://revistacreabahia.com.br/api/pages/1?token="+this.autentication.token)
        .map(res => res.json()).subscribe(data => {
            resolve(data);
        }, erro => {
          reject(erro);
        });
      })        
      });
  }

}
