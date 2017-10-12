import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NativeStorage } from '@ionic-native/native-storage';

import { AutenticationProvider } from '../autentication/autentication';


@Injectable()
export class EdicaoProvider {
  
header: Headers;

summary: any;

  constructor(
    public http: Http,
    private nativeStorage: NativeStorage,
    private autentication: AutenticationProvider ) {
    
    this.header = new Headers({ 'Access-Control-Allow-Origin': '*' });
    
  }



  /**
   * Requisita todas as edição
   */
  public reqEditions(page: number = 1): Promise<any>{
    
      return new Promise((resolve, reject) => {
      // Checa autenticação  
      this.autentication.autentictionToken().then((data) => {
        
        this.http.get("http://revistacreabahia.com.br/api/issues?token="+this.autentication.token+"&page="+page, this.header)
        .map(res => res.json()).subscribe(data => {
            resolve(data);
        }, erro => {
          reject(erro);
        });
      })        
      });
  }

  /**
   * Requisita o súmario
   * @param id Id da edição
   * @param page numero da página
   */
  public reqSummary(id: number =  null, page: number = 1): Promise<any>{

    return new Promise((resolve, reject) => {
      // Checa autenticação
      this.autentication.autentictionToken().then((data) => {
        this.http.get("http://revistacreabahia.com.br/api/summary/"+id+"?token="+this.autentication.token+"&page="+page, this.header)
          .map(res => res.json()).subscribe(data => {
            resolve(data);
        }, erro => {
          reject(erro);
        });
      });
    });
  }

  
  /**
   * Requisita Palavra do presidente, Espaço do leitor, expediente da edição
   * @param id Id da edição
   * @param type wordPresident, readerSpace e editExpedient 
   */
  public reqOthers(id: number =  null, type: string): Promise<any>{
    return new Promise((resolve, reject) => {
      // Checa autenticação
      this.autentication.autentictionToken().then((data) => {
        this.http.get("http://revistacreabahia.com.br/api/posttype/"+id+"?token="+this.autentication.token+"&type="+type, this.header)
        .map(res => res.json()).subscribe(data => {
            resolve(data);
        }, erro => {
          reject(erro);
        });
     });
    });
  }

  public reqPost(id): Promise<any>{
     return new Promise((resolve, reject) => {
      // Checa autenticação
      this.autentication.autentictionToken().then((data) => {
        this.http.get(" http://revistacreabahia.com.br/api/post/"+id+"?token="+this.autentication.token, this.header)
        .map(res => res.json()).subscribe(data => {
            resolve(data);
        }, erro => {
          reject(erro);
        });
      });
  });
  }
  
}
