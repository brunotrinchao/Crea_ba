import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class VariaveisGlobaisProvider {


  _edicaoAtual : string;
  _titCrea : string;
  _titRevista : string;
  _todasAsEdicoes : string;
  _contato : string;
  _sobre : string;
  _titMenu: string;
  _tabSumEdicao: string;
  _tabPalPresidente: string;
  _tabEspLeitor: string;
  _tabExpEdicao: string;
  _logoTopo : string;
  _logoMenu : string;

  /* Títulos */

  constructor() {
    this._titCrea = "CREA-Ba";
    this._titRevista = "Revista ";
    this._edicaoAtual = "Edição atual";
    this._todasAsEdicoes = "Todas Edições";
    this._contato = "Contato";
    this._sobre = "Sobre o app";
    this._titMenu = "CREA-Ba";
    this._tabSumEdicao = "Sumário da edição";
    this._tabPalPresidente = "Palavra do presidente";
    this._tabEspLeitor = "Espaço do leitor";
    this._tabExpEdicao = "Expediente da edição";
    this._logoTopo = "assets/logo_ico_topo.svg";
    this._logoMenu = "assets/logo_topo.svg";
  }

}
