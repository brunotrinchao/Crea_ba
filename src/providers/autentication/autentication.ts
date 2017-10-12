import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NativeStorage } from '@ionic-native/native-storage';


@Injectable()
export class AutenticationProvider {

  db: string = "crea_db";
  email: string = "api@agencianbz.com";
  password: string = "Spab@7";
  dateNow: Date;
  token: string;
  erro: boolean;

  header: Headers;

  constructor(
    public http: Http,
    private nativeStorage: NativeStorage) {
    this.erro = false;

    this.header = new Headers({ 'Access-Control-Allow-Origin': '*' });
  }

  

  /**
   * Autentica token
   */
  public autentictionToken(): Promise<any>{   
    return new Promise((resolve, reject) => {
      this.checkToken().then((data) => {
        this.token = data;
      }, erro => {        
        this.reqAutentication().then((data) => {
          resolve(true);
        }, (erro) => {
          reject(false);
        });   
    });
    });
  }

/**
 * Checa se existe o banco e se o token expirou
 */
private checkToken(): Promise<any>{

  return new Promise((resolve, reject) => {
     this.nativeStorage.getItem(this.db).then((data) => {
       
       var data_atual_unix_timestamp = Math.round(+new Date()/1000);
       console.log('Atual convertida: '+data_atual_unix_timestamp);
       console.log('Expires: '+data.expires_in);
        /*if(data.expires_in <= this.dateNow.getTime()){
          reject(data.expires_in);
        }else{
          reject(false);
        } */
        reject(true);      
     },(erro) => {
        reject(false);
     })

  });
}

private reqAutentication(): Promise<any>{
  return new Promise((resolve, reject) => {
    this.http.post("http://revistacreabahia.com.br/api/gettoken?email="+this.email+"&password="+this.password, this.header)
        .map(res => res.json()).subscribe(data => {
          this.token = data.access_token;
          //this.setToken(data);
          resolve(true);
      }, erro => {
        reject(erro);
      });
    
  });
}

/**
 * Armazena o retorno quando é autenticado
 * @param obj Retorno da autenticação
 */
private setToken(obj){
  
  this.nativeStorage.setItem(this.db, obj)
  .then((data) => {
    this.token = data.access_token;
  },
  );
}



}
