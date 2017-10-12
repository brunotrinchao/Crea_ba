import {  Component} from '@angular/core';
import {  NavController,  NavParams,  Nav,  LoadingController} from 'ionic-angular';

/* Paginas */
import {  SinglePage} from '../../../single/single';

/* Provider */
import {  VariaveisGlobaisProvider} from '../../../../providers/variaveis-globais/variaveis-globais';
import {  EdicaoProvider} from '../../../../providers/edicao/edicao';
import { ShareServiceProvider } from '../../../../providers/share-service/share-service';



var pag = 2;

@Component({
  selector: 'page-sumario',
  templateUrl: 'sumario.html'
})

export class SumarioOutrasPage {

  loading: any;

  idEdition: number = null;
  data: any = [];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private nav: Nav,
    public loadingCtrl: LoadingController,
    public varGlobal: VariaveisGlobaisProvider,
    private edicaoService: EdicaoProvider,
    private shareService: ShareServiceProvider) {   
    
    this.idEdition = this.shareService.getId();

    this.getLastEdition();

  }

  public getLastEdition() {
    

    if (this.data.length <= 0) {
      this.loading = this.loadingCtrl.create({
        content: 'Carregando, aguarde...'
      });
       
      this.loading.present();
      console.log(this.idEdition);
      this.edicaoService.reqSummary(this.idEdition).then(dataSummary => {
        
          this.data.push(dataSummary.summary);
          this.loading.dismiss();

        }, erro => {
          console.log("Erro ao buscar sumario: " + erro);
          this.loading.dismiss();
        }); // Fim sumario


    }
  }

  doInfinite(): Promise<any> {
    console.log('Begin async operation');
    
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(pag);
        this.edicaoService.reqSummary(this.idEdition, pag).then(dataSummary => {
          if(dataSummary.length > 0){
            this.data.push(dataSummary.summary);          
            pag++;
          }
          
        });

        console.log('Async operation has ended');
        resolve();
      }, 500);
    })
  }


  // Abre artigo
  public goTo(id) {
    this.nav.push(
      SinglePage, {id: id});
  }

  ionViewWillEnter(){
    
  }


}
