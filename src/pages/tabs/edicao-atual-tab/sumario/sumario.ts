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

export class SumarioPage {

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
      this.edicaoService.reqEditions().then(dataEdition => {
         
        if(this.idEdition == null){
          this.idEdition = dataEdition.issues[0].edition.id;
        }
        
          
        this.loading.setContent(this.varGlobal._tabSumEdicao + "...");
        this.edicaoService.reqSummary(this.idEdition).then(dataSummary => {
        
          this.data.push(dataSummary.summary);
          console.log(this.data[0]);
          this.loading.dismiss();

        }, erro => {
          
          this.loading.dismiss();
        }); // Fim sumario

      }, erro => {
        
        this.loading.dismiss();
      });
    }
  }

  doInfinite(): Promise<any> {
    
    
    return new Promise((resolve) => {
      setTimeout(() => {
        
        this.edicaoService.reqSummary(this.idEdition, pag).then(dataSummary => {
          if(dataSummary.length > 0){
            this.data.push(dataSummary.summary);          
            pag++;
          }
          
        });

        
        resolve();
      }, 500);
    })
  }


  // Abre artigo
  public goTo(id) {
    this.nav.push(
      SinglePage, {id: id});
  }


}
