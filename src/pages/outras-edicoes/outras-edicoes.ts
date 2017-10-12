import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController   } from 'ionic-angular';

/* Tabs */
import { SumarioPage } from '../tabs/edicao-atual-tab/sumario/sumario';
import { PalavraPresidentePage } from '../tabs/edicao-atual-tab/palavra-presidente/palavra-presidente';
import { EspacoLeitorPage } from '../tabs/edicao-atual-tab/espaco-leitor/espaco-leitor';
import { ExpedienteEdicaoPage } from '../tabs/edicao-atual-tab/expediente-edicao/expediente-edicao';

/* Providers */
import {  VariaveisGlobaisProvider } from '../../providers/variaveis-globais/variaveis-globais';
import {  EdicaoProvider} from '../../providers/edicao/edicao';
import { ShareServiceProvider } from '../../providers/share-service/share-service';

@Component({
  selector: 'page-edicao-atual',
  templateUrl: 'outras-edicoes.html'
})
export class OutrasEdicoesPage {
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

  idEdi: any;

  constructor(
    public navCtrl: NavController,
    public varGlobal: VariaveisGlobaisProvider,
    public loadingCtrl: LoadingController,
    public edicaoService: EdicaoProvider,
    private shareService: ShareServiceProvider
  ) {

    this.idEdi = this.shareService.getId();
    this.numEdicao =  this.shareService.getNumber();
    this.edicao = this.varGlobal._titRevista + this.numEdicao;

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

    
    
    

  }


}
