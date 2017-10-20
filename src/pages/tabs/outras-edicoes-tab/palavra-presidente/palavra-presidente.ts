import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

/* Provider */
import { VariaveisGlobaisProvider } from '../../../../providers/variaveis-globais/variaveis-globais';
import { EdicaoProvider } from '../../../../providers/edicao/edicao';

@Component({
  selector: 'page-palavra-presidente',
  templateUrl: 'palavra-presidente.html',
})
export class PalavraPresidenteOutrasPage {

  loading: any;
  
  idEdition: number;
  data: any = [];
  author: any = [];

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
          
           if(this.data[0].author){
            this.author.push({
              name : this.data[0].author.name,
              info : this.data[0].author.info,
              photo : this.data[0].author.photo
            })
          }
                 
          this.loading.dismiss();
          
        }, erro => {
        console.log("Erro ao buscar ultima edição: " + erro);
        this.loading.dismiss();
      });
    }
  }


}
