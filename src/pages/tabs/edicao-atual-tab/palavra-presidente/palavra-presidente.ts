import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

/* Provider */
import { VariaveisGlobaisProvider } from '../../../../providers/variaveis-globais/variaveis-globais';
import { EdicaoProvider } from '../../../../providers/edicao/edicao';

@Component({
  selector: 'page-palavra-presidente',
  templateUrl: 'palavra-presidente.html',
})
export class PalavraPresidentePage {

  loading: any;
  
  idEdition: number;
  data: any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public varGlobal: VariaveisGlobaisProvider,
    private edicaoService: EdicaoProvider) {
    
    this.idEdition = this.navParams.get('id');

    this.getWordPresident();

  }


  private getWordPresident(){
    if(this.data.length <= 0){
      this.loading = this.loadingCtrl.create({
        content: 'Carregando, aguarde...'
      });
      this.loading.present();       
        this.edicaoService.reqOthers(this.idEdition, 'wordPresident').then(dataWordPresident => {
           this.data.push(dataWordPresident.wordPresident);
          
            var inicio = this.data[0].text.indexOf("<strong>Marco Amigo");
            var fim = this.data[0].text.lastIndexOf("</p>")   ;
            var resPre = this.data[0].text.substring(inicio, fim);
            resPre = resPre.split("<br />");
             this.data[0].author = resPre[0];
             this.data[0].about = resPre[1];

                 
          this.loading.dismiss();
          
        }, erro => {
        console.log("Erro ao buscar ultima edição: " + erro);
        this.loading.dismiss();
      });
    }
  }


}
