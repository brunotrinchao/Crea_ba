import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

/* Paginas */
import { OutrasEdicoesPage } from '../outras-edicoes/outras-edicoes';

/* Providers */
import { VariaveisGlobaisProvider } from '../../providers/variaveis-globais/variaveis-globais';
import { EdicaoProvider } from '../../providers/edicao/edicao';
import { ShareServiceProvider } from '../../providers/share-service/share-service';

@Component({
  selector: 'page-todas-edicoes',
  templateUrl: 'todas-edicoes.html'
})
export class TodasEdicoesPage {

  titulo: string;
  loading: any;
  editions: any = [];
  firstEdition: any;

  constructor(
    public navCtrl: NavController,
    public varGlobal: VariaveisGlobaisProvider,
    public loadingCtrl: LoadingController,
    public edicaoServico: EdicaoProvider,
    private shareService: ShareServiceProvider
  ) {
    this.titulo = varGlobal._todasAsEdicoes;

    

   this.getEditions();
  }

/**
 * Monta o objeto das edições
 */
  private getEditions(){
     this.loading = this.loadingCtrl.create({
        content: 'Carregando, aguarde...'
      });
      this.loading.present();
      this.edicaoServico.reqEditions().then(data => {
    
      // Ultima edição
      this.firstEdition = data.issues[0].edition;
      // Todas edições exeto a ultima
      var array = [];
      data.issues.forEach(function(value, index) {
          if(index > 0){
            array.push(value);
          }
      });
      
      this.editions = array;
      console.log(this.editions);
      this.loading.dismiss();
    }, erro => {
      
      this.loading.dismiss();
    });
  }   

  // Abre edição
  public goTo(id, edition){
    this.shareService.setId(id);
    this.shareService.setNumber(edition);
    this.navCtrl.push(
      OutrasEdicoesPage);
  }
}
