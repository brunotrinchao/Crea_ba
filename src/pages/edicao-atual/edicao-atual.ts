import {  Component} from '@angular/core';
import {  NavController,  NavParams,  LoadingController} from 'ionic-angular';

/* Tabs */
import {  SumarioPage} from '../tabs/edicao-atual-tab/sumario/sumario';
import {  PalavraPresidentePage} from '../tabs/edicao-atual-tab/palavra-presidente/palavra-presidente';
import {  EspacoLeitorPage} from '../tabs/edicao-atual-tab/espaco-leitor/espaco-leitor';
import {  ExpedienteEdicaoPage} from '../tabs/edicao-atual-tab/expediente-edicao/expediente-edicao';


/* Providers */
import {  VariaveisGlobaisProvider} from '../../providers/variaveis-globais/variaveis-globais';
import {  EdicaoProvider} from '../../providers/edicao/edicao';

import { ShareServiceProvider } from '../../providers/share-service/share-service';

@Component({
  selector: 'page-edicao-atual',
  templateUrl: 'edicao-atual.html'
})
export class EdicaoAtualPage {


  loading: any;

  titulo: string;
  logoTopo: string;
  edicao: any;
  SumEdicao: string;
  PalPresidente: string;
  EspLeitor: string;
  ExpEdicao: string;
  numEdicao: number;

  // Tabs
  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;

  // Is da última edição
  idEdi: any;


  dataSummary: any = [];

  constructor(
    public navCtrl: NavController,
    public varGlobal: VariaveisGlobaisProvider,
    public loadingCtrl: LoadingController,
    public edicaoService: EdicaoProvider,
    private shareService: ShareServiceProvider
  ) {


    this.titulo = varGlobal._titCrea;
    this.SumEdicao = varGlobal._tabSumEdicao;
    this.PalPresidente = varGlobal._tabPalPresidente;
    this.EspLeitor = varGlobal._tabEspLeitor;
    this.ExpEdicao = varGlobal._tabExpEdicao;
    this.logoTopo = this.varGlobal._logoTopo;

    this.tab1 = SumarioPage;
    this.tab2 = PalavraPresidentePage;
    this.tab3 = EspacoLeitorPage;
    this.tab4 = ExpedienteEdicaoPage;

    this.getLastEdition();

  }

  public getLastEdition() {
        //console.log(this.idEdi);
        this.edicaoService.reqEditions().then(data => {
         
          if(this.shareService.getId() == null){
               this.idEdi = data.issues[0].edition.id;
              this.numEdicao = data.issues[0].edition.number;
              this.edicao = this.varGlobal._titRevista + this.numEdicao;
              this.shareService.setId(this.idEdi);
              this.shareService.setNumber(this.numEdicao);
              console.log(this.edicao);
          }else{
              this.idEdi = this.shareService.getId();
              this.edicao = this.varGlobal._titRevista + this.shareService.getNumber();
          }
         // console.log(this.idEdi);

      }, erro => {
        console.log("Erro ao buscar ultima edição: " + erro);
      });
    
   
    
  }





}
