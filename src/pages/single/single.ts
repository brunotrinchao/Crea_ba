import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

/* Provider */
import {
  VariaveisGlobaisProvider
} from '../../providers/variaveis-globais/variaveis-globais';
import {
  EdicaoProvider
} from '../../providers/edicao/edicao';


@Component({
  selector: 'page-single',
  templateUrl: 'single.html',
})
export class SinglePage {


  loading: any;
  logoTopo: string;
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
      this.logoTopo = this.varGlobal._logoTopo;
      this.getPost();
  }

  public getPost() {
    if (this.data.length <= 0) {
      this.loading = this.loadingCtrl.create({
        content: 'Carregando, aguarde...'
      });
      this.loading.present();
      this.edicaoService.reqPost(this.idEdition).then(dataPost => {
        console.log("abriu artigo");
        this.data.push(dataPost.article);    
        if(this.data[0].autor.name || this.data[0].autor.info || this.data[0].autor.photo){
          this.author.push(this.data[0].autor);
          console.log(this.author);
        }    
        
        this.loading.dismiss();

      }, erro => {
        console.log("Erro ao buscar ultima edição: " + erro);
        this.loading.dismiss();
      });
    }
  }

}
