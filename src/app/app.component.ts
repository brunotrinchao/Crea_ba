import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/* Páginas */
import { EdicaoAtualPage } from '../pages/edicao-atual/edicao-atual';
import { TodasEdicoesPage } from '../pages/todas-edicoes/todas-edicoes';
import { ContatoPage } from '../pages/contato/contato';
import { SobreOAppPage } from '../pages/sobre-o-app/sobre-o-app';

/* Providers */
import { VariaveisGlobaisProvider } from '../providers/variaveis-globais/variaveis-globais';
import { EdicaoProvider } from '../providers/edicao/edicao';
import { ShareServiceProvider } from '../providers/share-service/share-service';

@Component({
  templateUrl: 'app.html',
  providers: [ShareServiceProvider] 
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = EdicaoAtualPage;

  pages: Array<{title: string, component: any}>;

  titMenu : string;
  logoTopo : string;
  logoMenu : string;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public varGlobal: VariaveisGlobaisProvider,
    public edicao: EdicaoProvider,
    private shareService: ShareServiceProvider
  ) {
    this.initializeApp();
    
    this.titMenu = this.varGlobal._titMenu;
    this.logoTopo = this.varGlobal._logoTopo;
    this.logoMenu = this.varGlobal._logoMenu;

    // Páginas
    this.pages = [
      { title: this.varGlobal._edicaoAtual, component: EdicaoAtualPage },
      { title:  this.varGlobal._todasAsEdicoes, component: TodasEdicoesPage },
      { title:  this.varGlobal._contato, component: ContatoPage },
      { title:  this.varGlobal._sobre, component: SobreOAppPage }
    ];

  }

  /**
   * Inicializa o app
   */
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      


    });
  }

  

  /**
   * Método que abre página do menu
   * @param page Recebe a página que será aberta
   */
  openPage(page) {
    if(page.component == EdicaoAtualPage){
      //console.log("seta id");
      this.shareService.setId(null);
    }
    this.nav.setRoot(page.component);
  }
}
