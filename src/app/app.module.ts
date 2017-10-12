import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { HttpModule } from "@angular/http";
import { IonicImageLoader } from 'ionic-image-loader';
import { EmailComposer } from '@ionic-native/email-composer';
import { TextMaskModule } from 'angular2-text-mask';

/* Páginas */
import { MyApp } from './app.component';
import { EdicaoAtualPage } from '../pages/edicao-atual/edicao-atual';
import { OutrasEdicoesPage } from '../pages/outras-edicoes/outras-edicoes';
import { TodasEdicoesPage } from '../pages/todas-edicoes/todas-edicoes';
import { ContatoPage } from '../pages/contato/contato';
import { SobreOAppPage } from '../pages/sobre-o-app/sobre-o-app';
import { SumarioPage } from '../pages/tabs/edicao-atual-tab/sumario/sumario';
import { PalavraPresidentePage } from '../pages/tabs/edicao-atual-tab/palavra-presidente/palavra-presidente';
import { EspacoLeitorPage } from '../pages/tabs/edicao-atual-tab/espaco-leitor/espaco-leitor';
import { ExpedienteEdicaoPage } from '../pages/tabs/edicao-atual-tab/expediente-edicao/expediente-edicao';
import { SinglePage } from '../pages/single/single';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/* Providers */
import { VariaveisGlobaisProvider } from '../providers/variaveis-globais/variaveis-globais';
import { EdicaoProvider } from '../providers/edicao/edicao';
import { AutenticationProvider } from '../providers/autentication/autentication';
import { ShareServiceProvider } from '../providers/share-service/share-service';
import { ContatoServiceProvider } from '../providers/contato-service/contato-service';
import { MaskInputDirective } from '../directives/mask-input/mask-input';
import { SobreProvider } from '../providers/sobre/sobre';


@NgModule({
  declarations: [
    MyApp,
    EdicaoAtualPage,
    TodasEdicoesPage,
    OutrasEdicoesPage,
    ContatoPage,
    SobreOAppPage,
    SumarioPage,
    PalavraPresidentePage,
    EspacoLeitorPage,
    ExpedienteEdicaoPage,
    /*SumarioOutrasPage,
    PalavraPresidenteOutrasPage,
    EspacoLeitorOutrasPage,
    ExpedienteEdicaoOutrasPage,*/
    SinglePage,
    MaskInputDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicImageLoader.forRoot(),
    TextMaskModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      //iconMode: 'ios',
      //modalEnter: 'modal-slide-in',
      //modalLeave: 'modal-slide-out',
      tabsPlacement: 'top',
      pageTransition: 'md-transition'
    }
  )],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EdicaoAtualPage,
    TodasEdicoesPage,
    OutrasEdicoesPage,
    ContatoPage,
    SobreOAppPage,
    SumarioPage,
    PalavraPresidentePage,
    EspacoLeitorPage,
    ExpedienteEdicaoPage,
    /*SumarioOutrasPage,
    PalavraPresidenteOutrasPage,
    EspacoLeitorOutrasPage,
    ExpedienteEdicaoOutrasPage,*/
    SinglePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    VariaveisGlobaisProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EdicaoProvider,
    NativeStorage,
    AutenticationProvider,
    ShareServiceProvider,
    EmailComposer,
    ContatoServiceProvider,
    SobreProvider
  ]
})
export class AppModule {}
