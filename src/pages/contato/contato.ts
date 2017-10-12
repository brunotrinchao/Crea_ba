import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import {Validators, FormBuilder } from '@angular/forms';

/* Providers */
import { VariaveisGlobaisProvider } from '../../providers/variaveis-globais/variaveis-globais';
import { ShareServiceProvider } from '../../providers/share-service/share-service';
import { ContatoServiceProvider } from '../../providers/contato-service/contato-service';

@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html',
})
export class ContatoPage {
  titulo: string;
  contato : any = {};
  masks: any; 

  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public varGlobal: VariaveisGlobaisProvider,
    private shareService: ShareServiceProvider,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public contatoService: ContatoServiceProvider,
    public alertCtrl: AlertController
  ) {

    this.titulo = varGlobal._contato;
    
    this.shareService.setId("");

    this.contato = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        message: ['', Validators.required],
      });

      
  }


  public contForm(){

    this.loading = this.loadingCtrl.create({
        content: 'Enviando, aguarde...'
      });
      
      this.loading.present();


     this.contatoService.data = this.contato.value;

      this.contatoService.sendContato().then(data => {
          this.loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Mensagem',
            subTitle: 'Sua mensagem foi enviada com sucesso!',
            buttons: ['OK']
          });
          alert.present();
        }, erro => {
          this.loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Mensagem',
            subTitle: 'Erro ao enviar mensagem. Tente novamente mais tarde.',
            buttons: ['OK']
          });
          alert.present();
        console.log("Erro no contato: " + erro);
      });
    
  }

 
}
