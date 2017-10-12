import {
  Component
} from '@angular/core';
import {
  NavController,
  NavParams,
  LoadingController
} from 'ionic-angular';


/* Provider */
import {
  VariaveisGlobaisProvider
} from '../../../../providers/variaveis-globais/variaveis-globais';
import {
  EdicaoProvider
} from '../../../../providers/edicao/edicao';

@Component({
  selector: 'page-expediente-edicao',
  templateUrl: 'expediente-edicao.html',
})
export class ExpedienteEdicaoPage {

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

    this.getEditExpedient();

  }

  private getEditExpedient() {
    if (this.data.length <= 0) {
      this.loading = this.loadingCtrl.create({
        content: 'Carregando, aguarde...'
      });
      this.loading.present();
      this.edicaoService.reqOthers(this.idEdition, 'editExpedient').then(dataEditExpedient => {
        this.data.push(dataEditExpedient.editExpedient);

        this.loading.dismiss();

      }, erro => {
        console.log("Erro ao buscar ultima edição: " + erro);
        this.loading.dismiss();
      });
    }
  }


}
