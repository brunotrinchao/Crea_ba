import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular'

/* Providers */
import { VariaveisGlobaisProvider } from '../../providers/variaveis-globais/variaveis-globais';
import { ShareServiceProvider } from '../../providers/share-service/share-service';
import { SobreProvider } from '../../providers/sobre/sobre';

@Component({
  selector: 'page-sobre-o-app',
  templateUrl: 'sobre-o-app.html',
})
export class SobreOAppPage {

  titulo: string;
  data: any = [];
  loading: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public varGlobal: VariaveisGlobaisProvider,
    private shareService: ShareServiceProvider,
    public loadingCtrl: LoadingController,
    public sobreService: SobreProvider,
    public alertCtrl: AlertController
  ) {
    this.titulo = varGlobal._sobre;
    
    this.shareService.setId("");

    this.loading = this.loadingCtrl.create({
      content: 'Carregando, aguarde...'
    });
  }

  public getAbout() {
    //console.log(this.idEdi);
    this.sobreService.getSobre().then(data => {
     
      this.data = data;

    }, erro => {
      console.log("Erro ao buscar sobre o app: " + erro);
    });

  }


  ionViewDidLoad() {
    this.getAbout();
    this.loading.dismiss();
  }

}
