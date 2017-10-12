webpackJsonp([0],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SumarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__single_single__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_variaveis_globais_variaveis_globais__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_edicao_edicao__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_share_service_share_service__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Paginas */

/* Provider */



var pag = 2;
var SumarioPage = (function () {
    function SumarioPage(navCtrl, navParams, nav, loadingCtrl, varGlobal, edicaoService, shareService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.varGlobal = varGlobal;
        this.edicaoService = edicaoService;
        this.shareService = shareService;
        this.idEdition = null;
        this.data = [];
        this.idEdition = this.shareService.getId();
        this.getLastEdition();
    }
    SumarioPage.prototype.getLastEdition = function () {
        var _this = this;
        if (this.data.length <= 0) {
            this.loading = this.loadingCtrl.create({
                content: 'Carregando, aguarde...'
            });
            this.loading.present();
            this.edicaoService.reqEditions().then(function (dataEdition) {
                if (_this.idEdition == null) {
                    _this.idEdition = dataEdition.issues[0].edition.id;
                }
                _this.loading.setContent(_this.varGlobal._tabSumEdicao + "...");
                _this.edicaoService.reqSummary(_this.idEdition).then(function (dataSummary) {
                    _this.data.push(dataSummary.summary);
                    console.log(_this.data[0]);
                    _this.loading.dismiss();
                }, function (erro) {
                    _this.loading.dismiss();
                }); // Fim sumario
            }, function (erro) {
                _this.loading.dismiss();
            });
        }
    };
    SumarioPage.prototype.doInfinite = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                _this.edicaoService.reqSummary(_this.idEdition, pag).then(function (dataSummary) {
                    if (dataSummary.length > 0) {
                        _this.data.push(dataSummary.summary);
                        pag++;
                    }
                });
                resolve();
            }, 500);
        });
    };
    // Abre artigo
    SumarioPage.prototype.goTo = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__single_single__["a" /* SinglePage */], { id: id });
    };
    return SumarioPage;
}());
SumarioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-sumario',template:/*ion-inline-start:"/Users/mac/Documents/Crea_ba/src/pages/tabs/edicao-atual-tab/sumario/sumario.html"*/'<ion-content padding>\n    <ion-list>\n\n        <ion-item *ngFor="let item of data[0]; let i = index">\n            <ion-thumbnail item-start (click)="goTo(item?.id)">\n                <div class="ThuSum">\n                    <img src="{{item?.img}}" >\n                </div>\n            </ion-thumbnail>\n            <div class="TitCat" (click)="goTo(item?.id)">\n                #{{item?.category}}\n            </div>\n            <div class="TitNot" (click)="goTo(item?.id)">\n                {{item?.title}}\n            </div>\n            <div class="SubTitNot" (click)="goTo(item?.id)">\n                <p>{{item?.caption}}</p>\n            </div>\n        </ion-item>\n    </ion-list>\n\n    <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())">\n            <ion-infinite-scroll-content loadingText="Carregando..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/Users/mac/Documents/Crea_ba/src/pages/tabs/edicao-atual-tab/sumario/sumario.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_variaveis_globais_variaveis_globais__["a" /* VariaveisGlobaisProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_edicao_edicao__["a" /* EdicaoProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_share_service_share_service__["a" /* ShareServiceProvider */]])
], SumarioPage);

//# sourceMappingURL=sumario.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PalavraPresidentePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_variaveis_globais_variaveis_globais__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_edicao_edicao__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Provider */


var PalavraPresidentePage = (function () {
    function PalavraPresidentePage(navCtrl, navParams, loadingCtrl, varGlobal, edicaoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.varGlobal = varGlobal;
        this.edicaoService = edicaoService;
        this.data = [];
        this.idEdition = this.navParams.get('id');
        this.getWordPresident();
    }
    PalavraPresidentePage.prototype.getWordPresident = function () {
        var _this = this;
        if (this.data.length <= 0) {
            this.loading = this.loadingCtrl.create({
                content: 'Carregando, aguarde...'
            });
            this.loading.present();
            this.edicaoService.reqOthers(this.idEdition, 'wordPresident').then(function (dataWordPresident) {
                _this.data.push(dataWordPresident.wordPresident);
                var inicio = _this.data[0].text.indexOf("<strong>Marco Amigo");
                var fim = _this.data[0].text.lastIndexOf("</p>");
                var resPre = _this.data[0].text.substring(inicio, fim);
                resPre = resPre.split("<br />");
                _this.data[0].author = resPre[0];
                _this.data[0].about = resPre[1];
                _this.loading.dismiss();
            }, function (erro) {
                console.log("Erro ao buscar ultima edição: " + erro);
                _this.loading.dismiss();
            });
        }
    };
    return PalavraPresidentePage;
}());
PalavraPresidentePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-palavra-presidente',template:/*ion-inline-start:"/Users/mac/Documents/Crea_ba/src/pages/tabs/edicao-atual-tab/palavra-presidente/palavra-presidente.html"*/'<ion-content>\n    <div class="TopInfo">\n        <div class="InfGer" padding>\n            <div class="TitCat">\n                #{{data[0]?.article}}\n            </div>\n            <div class="TitNot">\n               {{data[0]?.title}}\n            </div>\n            <div class="SubTitNot">\n                <p>{{data[0]?.caption}}</p>\n            </div>\n        </div>\n        <div class="InfSep"></div>\n        <div class="InfAut" padding>\n            <div class="InfAutAre">\n                <div class="InfAutThu">\n                     <img src="{{data[0]?.img}}" alt="" >\n                </div>\n            </div>\n            <div class="InfAutInf">\n                <div class="InfAutNom TitNot"  [innerHTML]="data[0]?.author">\n                    \n                </div>\n                <div class="InfAutRes SubTitNot" [innerHTML]="data[0]?.about">\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="ConGer" padding>\n        <div [innerHTML]="data[0]?.text"></div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/mac/Documents/Crea_ba/src/pages/tabs/edicao-atual-tab/palavra-presidente/palavra-presidente.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_variaveis_globais_variaveis_globais__["a" /* VariaveisGlobaisProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_edicao_edicao__["a" /* EdicaoProvider */]])
], PalavraPresidentePage);

//# sourceMappingURL=palavra-presidente.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EspacoLeitorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_variaveis_globais_variaveis_globais__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_edicao_edicao__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Provider */


var EspacoLeitorPage = (function () {
    function EspacoLeitorPage(navCtrl, navParams, loadingCtrl, varGlobal, edicaoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.varGlobal = varGlobal;
        this.edicaoService = edicaoService;
        this.data = [];
        this.idEdition = this.navParams.get('id');
        this.getReaderSpace();
    }
    EspacoLeitorPage.prototype.getReaderSpace = function () {
        var _this = this;
        if (this.data.length <= 0) {
            this.loading = this.loadingCtrl.create({
                content: 'Carregando, aguarde...'
            });
            this.loading.present();
            this.edicaoService.reqOthers(this.idEdition, 'readerSpace').then(function (dataReaderSpace) {
                _this.data.push(dataReaderSpace.readerSpace);
                _this.loading.dismiss();
            }, function (erro) {
                console.log("Erro ao buscar ultima edição: " + erro);
                _this.loading.dismiss();
            });
        }
    };
    return EspacoLeitorPage;
}());
EspacoLeitorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-espaco-leitor',template:/*ion-inline-start:"/Users/mac/Documents/Crea_ba/src/pages/tabs/edicao-atual-tab/espaco-leitor/espaco-leitor.html"*/'<ion-content padding>\n\n      <div class="TitCat">\n          #{{data[0]?.title}}\n      </div>\n  <div class="IteLei" [innerHtml]="data[0]?.text">\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/Crea_ba/src/pages/tabs/edicao-atual-tab/espaco-leitor/espaco-leitor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_variaveis_globais_variaveis_globais__["a" /* VariaveisGlobaisProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_edicao_edicao__["a" /* EdicaoProvider */]])
], EspacoLeitorPage);

//# sourceMappingURL=espaco-leitor.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpedienteEdicaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_variaveis_globais_variaveis_globais__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_edicao_edicao__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Provider */


var ExpedienteEdicaoPage = (function () {
    function ExpedienteEdicaoPage(navCtrl, navParams, loadingCtrl, varGlobal, edicaoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.varGlobal = varGlobal;
        this.edicaoService = edicaoService;
        this.data = [];
        this.idEdition = this.navParams.get('id');
        this.getEditExpedient();
    }
    ExpedienteEdicaoPage.prototype.getEditExpedient = function () {
        var _this = this;
        if (this.data.length <= 0) {
            this.loading = this.loadingCtrl.create({
                content: 'Carregando, aguarde...'
            });
            this.loading.present();
            this.edicaoService.reqOthers(this.idEdition, 'editExpedient').then(function (dataEditExpedient) {
                _this.data.push(dataEditExpedient.editExpedient);
                _this.loading.dismiss();
            }, function (erro) {
                console.log("Erro ao buscar ultima edição: " + erro);
                _this.loading.dismiss();
            });
        }
    };
    return ExpedienteEdicaoPage;
}());
ExpedienteEdicaoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-expediente-edicao',template:/*ion-inline-start:"/Users/mac/Documents/Crea_ba/src/pages/tabs/edicao-atual-tab/expediente-edicao/expediente-edicao.html"*/'<ion-content padding>\n    <div class="TitCat">\n        #{{data[0]?.title}}\n    </div>\n    <div class="ConGer" [innerHtml]="data[0]?.text">\n        \n    </div>\n</ion-content>'/*ion-inline-end:"/Users/mac/Documents/Crea_ba/src/pages/tabs/edicao-atual-tab/expediente-edicao/expediente-edicao.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_variaveis_globais_variaveis_globais__["a" /* VariaveisGlobaisProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_edicao_edicao__["a" /* EdicaoProvider */]])
], ExpedienteEdicaoPage);

//# sourceMappingURL=expediente-edicao.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariaveisGlobaisProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VariaveisGlobaisProvider = (function () {
    /* Títulos */
    function VariaveisGlobaisProvider() {
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
    return VariaveisGlobaisProvider;
}());
VariaveisGlobaisProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], VariaveisGlobaisProvider);

//# sourceMappingURL=variaveis-globais.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdicaoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__autentication_autentication__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EdicaoProvider = (function () {
    function EdicaoProvider(http, nativeStorage, autentication) {
        this.http = http;
        this.nativeStorage = nativeStorage;
        this.autentication = autentication;
        this.header = new Headers({ 'Access-Control-Allow-Origin': '*' });
    }
    /**
     * Requisita todas as edição
     */
    EdicaoProvider.prototype.reqEditions = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        return new Promise(function (resolve, reject) {
            // Checa autenticação  
            _this.autentication.autentictionToken().then(function (data) {
                _this.http.get("http://revistacreabahia.com.br/api/issues?token=" + _this.autentication.token + "&page=" + page, _this.header)
                    .map(function (res) { return res.json(); }).subscribe(function (data) {
                    resolve(data);
                }, function (erro) {
                    reject(erro);
                });
            });
        });
    };
    /**
     * Requisita o súmario
     * @param id Id da edição
     * @param page numero da página
     */
    EdicaoProvider.prototype.reqSummary = function (id, page) {
        var _this = this;
        if (id === void 0) { id = null; }
        if (page === void 0) { page = 1; }
        return new Promise(function (resolve, reject) {
            // Checa autenticação
            _this.autentication.autentictionToken().then(function (data) {
                _this.http.get("http://revistacreabahia.com.br/api/summary/" + id + "?token=" + _this.autentication.token + "&page=" + page, _this.header)
                    .map(function (res) { return res.json(); }).subscribe(function (data) {
                    resolve(data);
                }, function (erro) {
                    reject(erro);
                });
            });
        });
    };
    /**
     * Requisita Palavra do presidente, Espaço do leitor, expediente da edição
     * @param id Id da edição
     * @param type wordPresident, readerSpace e editExpedient
     */
    EdicaoProvider.prototype.reqOthers = function (id, type) {
        var _this = this;
        if (id === void 0) { id = null; }
        return new Promise(function (resolve, reject) {
            // Checa autenticação
            _this.autentication.autentictionToken().then(function (data) {
                _this.http.get("http://revistacreabahia.com.br/api/posttype/" + id + "?token=" + _this.autentication.token + "&type=" + type, _this.header)
                    .map(function (res) { return res.json(); }).subscribe(function (data) {
                    resolve(data);
                }, function (erro) {
                    reject(erro);
                });
            });
        });
    };
    EdicaoProvider.prototype.reqPost = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Checa autenticação
            _this.autentication.autentictionToken().then(function (data) {
                _this.http.get(" http://revistacreabahia.com.br/api/post/" + id + "?token=" + _this.autentication.token, _this.header)
                    .map(function (res) { return res.json(); }).subscribe(function (data) {
                    resolve(data);
                }, function (erro) {
                    reject(erro);
                });
            });
        });
    };
    return EdicaoProvider;
}());
EdicaoProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_4__autentication_autentication__["a" /* AutenticationProvider */]])
], EdicaoProvider);

//# sourceMappingURL=edicao.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdicaoAtualPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_edicao_atual_tab_sumario_sumario__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_edicao_atual_tab_palavra_presidente_palavra_presidente__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_edicao_atual_tab_espaco_leitor_espaco_leitor__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_edicao_atual_tab_expediente_edicao_expediente_edicao__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_variaveis_globais_variaveis_globais__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_edicao_edicao__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_share_service_share_service__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Tabs */




/* Providers */



var EdicaoAtualPage = (function () {
    function EdicaoAtualPage(navCtrl, varGlobal, loadingCtrl, edicaoService, shareService) {
        this.navCtrl = navCtrl;
        this.varGlobal = varGlobal;
        this.loadingCtrl = loadingCtrl;
        this.edicaoService = edicaoService;
        this.shareService = shareService;
        this.dataSummary = [];
        this.titulo = varGlobal._titCrea;
        this.SumEdicao = varGlobal._tabSumEdicao;
        this.PalPresidente = varGlobal._tabPalPresidente;
        this.EspLeitor = varGlobal._tabEspLeitor;
        this.ExpEdicao = varGlobal._tabExpEdicao;
        this.logoTopo = this.varGlobal._logoTopo;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_2__tabs_edicao_atual_tab_sumario_sumario__["a" /* SumarioPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_3__tabs_edicao_atual_tab_palavra_presidente_palavra_presidente__["a" /* PalavraPresidentePage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_4__tabs_edicao_atual_tab_espaco_leitor_espaco_leitor__["a" /* EspacoLeitorPage */];
        this.tab4 = __WEBPACK_IMPORTED_MODULE_5__tabs_edicao_atual_tab_expediente_edicao_expediente_edicao__["a" /* ExpedienteEdicaoPage */];
        this.getLastEdition();
    }
    EdicaoAtualPage.prototype.getLastEdition = function () {
        var _this = this;
        //console.log(this.idEdi);
        this.edicaoService.reqEditions().then(function (data) {
            if (_this.shareService.getId() == null) {
                _this.idEdi = data.issues[0].edition.id;
                _this.numEdicao = data.issues[0].edition.number;
                _this.edicao = _this.varGlobal._titRevista + _this.numEdicao;
                _this.shareService.setId(_this.idEdi);
                _this.shareService.setNumber(_this.numEdicao);
                console.log(_this.edicao);
            }
            else {
                _this.idEdi = _this.shareService.getId();
                _this.edicao = _this.varGlobal._titRevista + _this.shareService.getNumber();
            }
            // console.log(this.idEdi);
        }, function (erro) {
            console.log("Erro ao buscar ultima edição: " + erro);
        });
    };
    return EdicaoAtualPage;
}());
EdicaoAtualPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-edicao-atual',template:/*ion-inline-start:"/Users/mac/Documents/Crea_ba/src/pages/edicao-atual/edicao-atual.html"*/'<ion-header>\n    <ion-navbar color="primary" align-title="left">\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title><img src="{{logoTopo}}" height="30px" class="logo_topo"> <span>{{edicao}}</span></ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-tabs color="primary">\n        <ion-tab tabTitle="{{SumEdicao}}" [root]="tab1" [rootParams]="{id: idEdi}"></ion-tab>\n        <ion-tab tabTitle="{{PalPresidente}}" [root]="tab2" [rootParams]="{id: idEdi}"></ion-tab>\n        <ion-tab tabTitle="{{EspLeitor}}" [root]="tab3" [rootParams]="{id: idEdi}"></ion-tab>\n        <ion-tab tabTitle="{{ExpEdicao}}" [root]="tab4" [rootParams]="{id: idEdi}"></ion-tab>\n    </ion-tabs>\n</ion-content>'/*ion-inline-end:"/Users/mac/Documents/Crea_ba/src/pages/edicao-atual/edicao-atual.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_variaveis_globais_variaveis_globais__["a" /* VariaveisGlobaisProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7__providers_edicao_edicao__["a" /* EdicaoProvider */],
        __WEBPACK_IMPORTED_MODULE_8__providers_share_service_share_service__["a" /* ShareServiceProvider */]])
], EdicaoAtualPage);

//# sourceMappingURL=edicao-atual.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SinglePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_variaveis_globais_variaveis_globais__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_edicao_edicao__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Provider */


var SinglePage = (function () {
    function SinglePage(navCtrl, navParams, loadingCtrl, varGlobal, edicaoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.varGlobal = varGlobal;
        this.edicaoService = edicaoService;
        this.data = [];
        this.author = [];
        this.idEdition = this.navParams.get('id');
        this.logoTopo = this.varGlobal._logoTopo;
        this.getPost();
    }
    SinglePage.prototype.getPost = function () {
        var _this = this;
        if (this.data.length <= 0) {
            this.loading = this.loadingCtrl.create({
                content: 'Carregando, aguarde...'
            });
            this.loading.present();
            this.edicaoService.reqPost(this.idEdition).then(function (dataPost) {
                console.log("abriu artigo");
                _this.data.push(dataPost.article);
                if (_this.data[0].autor.name || _this.data[0].autor.info || _this.data[0].autor.photo) {
                    _this.author.push(_this.data[0].autor);
                    console.log(_this.author);
                }
                _this.loading.dismiss();
            }, function (erro) {
                console.log("Erro ao buscar ultima edição: " + erro);
                _this.loading.dismiss();
            });
        }
    };
    return SinglePage;
}());
SinglePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-single',template:/*ion-inline-start:"/Users/mac/Documents/Crea_ba/src/pages/single/single.html"*/'<ion-header>\n\n    <ion-navbar color="primary" align-title="left">\n        <ion-title><img src="{{logoTopo}}" height="30px" class="logo_topo"></ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="TopInfo">\n        <div class="TopImg">\n            <img src="{{data[0]?.img}}" >\n        </div>\n        <div class="InfGer" padding>\n            <div class="TitCat">\n                #{{data[0]?.category}}\n            </div>\n            <div class="TitNot">\n                {{data[0]?.title}}\n            </div>\n            <div class="SubTitNot">\n                <p>{{data[0]?.caption}}</p>\n            </div>\n        </div>\n        <div class="InfSep"></div>\n        <div class="InfAut" padding *ngIf="author[0]?.name">\n            <div class="InfAutAre">\n                \n                <div class="InfAutThu">\n                    <img src="{{author[0]?.photo}}" alt="">\n                </div>\n            </div>\n            <div class="InfAutInf">\n                <div class="InfAutNom TitNot">\n                    {{author[0]?.name}}\n                </div>\n                <div class="InfAutRes SubTitNot">\n                   {{author[0]?.info}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="ConGer" padding [innerHtml]="data[0]?.text"></div>\n</ion-content>'/*ion-inline-end:"/Users/mac/Documents/Crea_ba/src/pages/single/single.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_variaveis_globais_variaveis_globais__["a" /* VariaveisGlobaisProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_edicao_edicao__["a" /* EdicaoProvider */]])
], SinglePage);

//# sourceMappingURL=single.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodasEdicoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__outras_edicoes_outras_edicoes__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_variaveis_globais_variaveis_globais__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_edicao_edicao__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_share_service_share_service__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Paginas */

/* Providers */



var TodasEdicoesPage = (function () {
    function TodasEdicoesPage(navCtrl, varGlobal, loadingCtrl, edicaoServico, shareService) {
        this.navCtrl = navCtrl;
        this.varGlobal = varGlobal;
        this.loadingCtrl = loadingCtrl;
        this.edicaoServico = edicaoServico;
        this.shareService = shareService;
        this.titulo = varGlobal._todasAsEdicoes;
        this.getEditions();
    }
    /**
     * Monta o objeto das edições
     */
    TodasEdicoesPage.prototype.getEditions = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Carregando, aguarde...'
        });
        this.loading.present();
        this.edicaoServico.reqEditions().then(function (data) {
            // Ultima edição
            _this.firstEdition = data.issues[0].edition;
            // Todas edições exeto a ultima
            _this.editions = data.issues.splice(1, 1);
            _this.loading.dismiss();
        }, function (erro) {
            _this.loading.dismiss();
        });
    };
    // Abre edição
    TodasEdicoesPage.prototype.goTo = function (id, edition) {
        this.shareService.setId(id);
        this.shareService.setNumber(edition);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__outras_edicoes_outras_edicoes__["a" /* OutrasEdicoesPage */]);
    };
    return TodasEdicoesPage;
}());
TodasEdicoesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-todas-edicoes',template:/*ion-inline-start:"/Users/mac/Documents/Crea_ba/src/pages/todas-edicoes/todas-edicoes.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>{{titulo}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n    <div class="EdiTop" padding>\n        <div class="EdiThu" (click)="goTo(firstEdition?.id, firstEdition?.number)">\n            <img src="{{firstEdition?.cover}}" alt="">\n        </div>\n        <div class="EdiInf">\n            <div class="EdiTit" (click)="goTo(firstEdition?.id, firstEdition?.number)">\n                {{firstEdition?.title}}\n            </div>\n            <div class="EdiSubTit SubTitNot" (click)="goTo(firstEdition?.id, firstEdition?.number)">\n                {{firstEdition?.caption}}\n            </div>\n        </div>\n    </div>\n    <div class="InfSep"></div>\n    <div class="EdiAnt" padding>\n        <div class="TitEdiAnt">\n            Edições <strong>Anteriores</strong>\n        </div>\n        <ion-list>\n            <button ion-item detail-none *ngFor="let item of editions" (click)="goTo(item?.edition.id, item?.edition.number)">\n                <div clas="EdiAndThuAre">\n                <div class="EdiAndThu">\n                    <img src="{{item?.edition.cover}}" alt="">\n                </div>\n                    </div>\n                <div class="EdiAndTit">\n                    {{item?.edition.title}}\n                </div>\n        </button>\n        </ion-list>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/mac/Documents/Crea_ba/src/pages/todas-edicoes/todas-edicoes.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_variaveis_globais_variaveis_globais__["a" /* VariaveisGlobaisProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_edicao_edicao__["a" /* EdicaoProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_share_service_share_service__["a" /* ShareServiceProvider */]])
], TodasEdicoesPage);

//# sourceMappingURL=todas-edicoes.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutrasEdicoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_edicao_atual_tab_sumario_sumario__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_edicao_atual_tab_palavra_presidente_palavra_presidente__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_edicao_atual_tab_espaco_leitor_espaco_leitor__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_edicao_atual_tab_expediente_edicao_expediente_edicao__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_variaveis_globais_variaveis_globais__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_edicao_edicao__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_share_service_share_service__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Tabs */




/* Providers */



var OutrasEdicoesPage = (function () {
    function OutrasEdicoesPage(navCtrl, varGlobal, loadingCtrl, edicaoService, shareService) {
        this.navCtrl = navCtrl;
        this.varGlobal = varGlobal;
        this.loadingCtrl = loadingCtrl;
        this.edicaoService = edicaoService;
        this.shareService = shareService;
        this.idEdi = this.shareService.getId();
        this.numEdicao = this.shareService.getNumber();
        this.edicao = this.varGlobal._titRevista + this.numEdicao;
        this.titulo = varGlobal._titCrea;
        this.SumEdicao = varGlobal._tabSumEdicao;
        this.PalPresidente = varGlobal._tabPalPresidente;
        this.EspLeitor = varGlobal._tabEspLeitor;
        this.ExpEdicao = varGlobal._tabExpEdicao;
        this.logoTopo = this.varGlobal._logoTopo;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_2__tabs_edicao_atual_tab_sumario_sumario__["a" /* SumarioPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_3__tabs_edicao_atual_tab_palavra_presidente_palavra_presidente__["a" /* PalavraPresidentePage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_4__tabs_edicao_atual_tab_espaco_leitor_espaco_leitor__["a" /* EspacoLeitorPage */];
        this.tab4 = __WEBPACK_IMPORTED_MODULE_5__tabs_edicao_atual_tab_expediente_edicao_expediente_edicao__["a" /* ExpedienteEdicaoPage */];
    }
    return OutrasEdicoesPage;
}());
OutrasEdicoesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-edicao-atual',template:/*ion-inline-start:"/Users/mac/Documents/Crea_ba/src/pages/outras-edicoes/outras-edicoes.html"*/'<ion-header>\n    <ion-navbar color="primary" align-title="left">\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title><img src="{{logoTopo}}" height="30px" class="logo_topo"> <span>{{edicao}}</span></ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n\n    <ion-tabs color="primary">\n        <ion-tab tabTitle="{{SumEdicao}}" [root]="tab1" [rootParams]="{id: idEdi}"></ion-tab>\n        <ion-tab tabTitle="{{PalPresidente}}" [root]="tab2" [rootParams]="{id: idEdi}"></ion-tab>\n        <ion-tab tabTitle="{{EspLeitor}}" [root]="tab3" [rootParams]="{id: idEdi}"></ion-tab>\n        <ion-tab tabTitle="{{ExpEdicao}}" [root]="tab4" [rootParams]="{id: idEdi}"></ion-tab>\n    </ion-tabs>\n</ion-content>'/*ion-inline-end:"/Users/mac/Documents/Crea_ba/src/pages/outras-edicoes/outras-edicoes.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_variaveis_globais_variaveis_globais__["a" /* VariaveisGlobaisProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7__providers_edicao_edicao__["a" /* EdicaoProvider */],
        __WEBPACK_IMPORTED_MODULE_8__providers_share_service_share_service__["a" /* ShareServiceProvider */]])
], OutrasEdicoesPage);

//# sourceMappingURL=outras-edicoes.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContatoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_variaveis_globais_variaveis_globais__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_share_service_share_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_contato_service_contato_service__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* Providers */



var ContatoPage = (function () {
    function ContatoPage(navCtrl, navParams, varGlobal, shareService, formBuilder, loadingCtrl, contatoService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.varGlobal = varGlobal;
        this.shareService = shareService;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.contatoService = contatoService;
        this.alertCtrl = alertCtrl;
        this.contato = {};
        this.titulo = varGlobal._contato;
        this.shareService.setId("");
        this.contato = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].email]],
            phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            message: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
        });
    }
    ContatoPage.prototype.contForm = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Enviando, aguarde...'
        });
        this.loading.present();
        this.contatoService.data = this.contato.value;
        this.contatoService.sendContato().then(function (data) {
            _this.loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Mensagem',
                subTitle: 'Sua mensagem foi enviada com sucesso!',
                buttons: ['OK']
            });
            alert.present();
        }, function (erro) {
            _this.loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Mensagem',
                subTitle: 'Erro ao enviar mensagem. Tente novamente mais tarde.',
                buttons: ['OK']
            });
            alert.present();
            console.log("Erro no contato: " + erro);
        });
    };
    return ContatoPage;
}());
ContatoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contato',template:/*ion-inline-start:"/Users/mac/Documents/Crea_ba/src/pages/contato/contato.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>{{titulo}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <form [formGroup]="contato" (ngSubmit)="contForm()">\n        <ion-list>\n\n            <ion-item>\n                <ion-label floating>Nome</ion-label>\n                <ion-input type="text" name="name" formControlName="name"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>E-mail</ion-label>\n                <ion-input type="email" name="email" formControlName="email"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Telefone</ion-label>\n                    <ion-input type="tel"  name="phone" formControlName="phone" mask="(**)*****-****"></ion-input>      \n                </ion-item>\n\n            <ion-item>\n                <ion-label floating>Mensagem</ion-label>\n                <ion-textarea rows="5" name="message" formControlName="message"></ion-textarea>\n            </ion-item>\n\n        </ion-list>\n        <div padding>\n            <button [disabled]="contato.invalid" ion-button  block large icon-left color="primary" type="submit" >\n                <ion-icon name="paper-plane"></ion-icon>Enviar</button>\n        </div>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/mac/Documents/Crea_ba/src/pages/contato/contato.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_variaveis_globais_variaveis_globais__["a" /* VariaveisGlobaisProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_share_service_share_service__["a" /* ShareServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_contato_service_contato_service__["a" /* ContatoServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ContatoPage);

//# sourceMappingURL=contato.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContatoServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autentication_autentication__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContatoServiceProvider = (function () {
    function ContatoServiceProvider(http, autentication) {
        this.http = http;
        this.autentication = autentication;
        this.header = new Headers({ 'Access-Control-Allow-Origin': '*' });
    }
    ContatoServiceProvider.prototype.sendContato = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post("http://revistacreabahia.com.br/api/sendmessage?token=" + _this.autentication.token + "&name=" + _this.data.name + "&email=" + _this.data.email + "&phone=" + _this.data.phone + "&message=" + _this.data.message, _this.header)
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            }, function (erro) {
                reject(erro);
            });
        });
    };
    return ContatoServiceProvider;
}());
ContatoServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__autentication_autentication__["a" /* AutenticationProvider */]])
], ContatoServiceProvider);

//# sourceMappingURL=contato-service.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobreOAppPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_variaveis_globais_variaveis_globais__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_share_service_share_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sobre_sobre__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Providers */



var SobreOAppPage = (function () {
    function SobreOAppPage(navCtrl, navParams, varGlobal, shareService, loadingCtrl, sobreService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.varGlobal = varGlobal;
        this.shareService = shareService;
        this.loadingCtrl = loadingCtrl;
        this.sobreService = sobreService;
        this.alertCtrl = alertCtrl;
        this.data = [];
        this.titulo = varGlobal._sobre;
        this.shareService.setId("");
        this.loading = this.loadingCtrl.create({
            content: 'Carregando, aguarde...'
        });
    }
    SobreOAppPage.prototype.getAbout = function () {
        var _this = this;
        //console.log(this.idEdi);
        this.sobreService.getSobre().then(function (data) {
            _this.data = data;
        }, function (erro) {
            console.log("Erro ao buscar sobre o app: " + erro);
        });
    };
    SobreOAppPage.prototype.ionViewDidLoad = function () {
        this.getAbout();
        this.loading.dismiss();
    };
    return SobreOAppPage;
}());
SobreOAppPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-sobre-o-app',template:/*ion-inline-start:"/Users/mac/Documents/Crea_ba/src/pages/sobre-o-app/sobre-o-app.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n      <ion-title>{{data.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div [innerHtml]="data.content"></div>\n \n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/Crea_ba/src/pages/sobre-o-app/sobre-o-app.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_variaveis_globais_variaveis_globais__["a" /* VariaveisGlobaisProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_share_service_share_service__["a" /* ShareServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_sobre_sobre__["a" /* SobreProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], SobreOAppPage);

//# sourceMappingURL=sobre-o-app.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobreProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autentication_autentication__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SobreProvider = (function () {
    function SobreProvider(http, autentication) {
        this.http = http;
        this.autentication = autentication;
        this.header = new Headers({ 'Access-Control-Allow-Origin': '*' });
    }
    SobreProvider.prototype.getSobre = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Checa autenticação  
            _this.autentication.autentictionToken().then(function (data) {
                _this.http.get("http://revistacreabahia.com.br/api/pages/1?token=" + _this.autentication.token)
                    .map(function (res) { return res.json(); }).subscribe(function (data) {
                    resolve(data);
                }, function (erro) {
                    reject(erro);
                });
            });
        });
    };
    return SobreProvider;
}());
SobreProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__autentication_autentication__["a" /* AutenticationProvider */]])
], SobreProvider);

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_image_loader__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_email_composer__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_edicao_atual_edicao_atual__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_outras_edicoes_outras_edicoes__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_todas_edicoes_todas_edicoes__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contato_contato__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_sobre_o_app_sobre_o_app__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_edicao_atual_tab_sumario_sumario__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_edicao_atual_tab_palavra_presidente_palavra_presidente__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tabs_edicao_atual_tab_espaco_leitor_espaco_leitor__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_edicao_atual_tab_expediente_edicao_expediente_edicao__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_single_single__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_variaveis_globais_variaveis_globais__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_edicao_edicao__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_autentication_autentication__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_share_service_share_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_contato_service_contato_service__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__directives_mask_input_mask_input__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_sobre_sobre__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/* Páginas */













/* Providers */







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_edicao_atual_edicao_atual__["a" /* EdicaoAtualPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_todas_edicoes_todas_edicoes__["a" /* TodasEdicoesPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_outras_edicoes_outras_edicoes__["a" /* OutrasEdicoesPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_contato_contato__["a" /* ContatoPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_sobre_o_app_sobre_o_app__["a" /* SobreOAppPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tabs_edicao_atual_tab_sumario_sumario__["a" /* SumarioPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tabs_edicao_atual_tab_palavra_presidente_palavra_presidente__["a" /* PalavraPresidentePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_tabs_edicao_atual_tab_espaco_leitor_espaco_leitor__["a" /* EspacoLeitorPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_tabs_edicao_atual_tab_expediente_edicao_expediente_edicao__["a" /* ExpedienteEdicaoPage */],
            /*SumarioOutrasPage,
            PalavraPresidenteOutrasPage,
            EspacoLeitorOutrasPage,
            ExpedienteEdicaoOutrasPage,*/
            __WEBPACK_IMPORTED_MODULE_18__pages_single_single__["a" /* SinglePage */],
            __WEBPACK_IMPORTED_MODULE_26__directives_mask_input_mask_input__["a" /* MaskInputDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_image_loader__["a" /* IonicImageLoader */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__["TextMaskModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {
                backButtonText: '',
                //iconMode: 'ios',
                //modalEnter: 'modal-slide-in',
                //modalLeave: 'modal-slide-out',
                tabsPlacement: 'top',
                pageTransition: 'md-transition'
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_edicao_atual_edicao_atual__["a" /* EdicaoAtualPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_todas_edicoes_todas_edicoes__["a" /* TodasEdicoesPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_outras_edicoes_outras_edicoes__["a" /* OutrasEdicoesPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_contato_contato__["a" /* ContatoPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_sobre_o_app_sobre_o_app__["a" /* SobreOAppPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tabs_edicao_atual_tab_sumario_sumario__["a" /* SumarioPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tabs_edicao_atual_tab_palavra_presidente_palavra_presidente__["a" /* PalavraPresidentePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_tabs_edicao_atual_tab_espaco_leitor_espaco_leitor__["a" /* EspacoLeitorPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_tabs_edicao_atual_tab_expediente_edicao_expediente_edicao__["a" /* ExpedienteEdicaoPage */],
            /*SumarioOutrasPage,
            PalavraPresidenteOutrasPage,
            EspacoLeitorOutrasPage,
            ExpedienteEdicaoOutrasPage,*/
            __WEBPACK_IMPORTED_MODULE_18__pages_single_single__["a" /* SinglePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_21__providers_variaveis_globais_variaveis_globais__["a" /* VariaveisGlobaisProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_22__providers_edicao_edicao__["a" /* EdicaoProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_23__providers_autentication_autentication__["a" /* AutenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_24__providers_share_service_share_service__["a" /* ShareServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_25__providers_contato_service_contato_service__["a" /* ContatoServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_27__providers_sobre_sobre__["a" /* SobreProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShareServiceProvider = (function () {
    function ShareServiceProvider(http) {
        this.http = http;
        this.id = null;
    }
    ShareServiceProvider.prototype.setId = function (id) {
        this.id = id;
    };
    ShareServiceProvider.prototype.getId = function () {
        return this.id;
    };
    ShareServiceProvider.prototype.setNumber = function (number) {
        this.number = number;
    };
    ShareServiceProvider.prototype.getNumber = function () {
        return this.number;
    };
    ShareServiceProvider.prototype.setSummary = function (data) {
        this.summary = data;
    };
    ShareServiceProvider.prototype.getSummary = function () {
        return this.summary;
    };
    return ShareServiceProvider;
}());
ShareServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ShareServiceProvider);

//# sourceMappingURL=share-service.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_edicao_atual_edicao_atual__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_todas_edicoes_todas_edicoes__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contato_contato__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sobre_o_app_sobre_o_app__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_variaveis_globais_variaveis_globais__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_edicao_edicao__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_share_service_share_service__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/* Páginas */




/* Providers */



var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, varGlobal, edicao, shareService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.varGlobal = varGlobal;
        this.edicao = edicao;
        this.shareService = shareService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_edicao_atual_edicao_atual__["a" /* EdicaoAtualPage */];
        this.initializeApp();
        this.titMenu = this.varGlobal._titMenu;
        this.logoTopo = this.varGlobal._logoTopo;
        this.logoMenu = this.varGlobal._logoMenu;
        // Páginas
        this.pages = [
            { title: this.varGlobal._edicaoAtual, component: __WEBPACK_IMPORTED_MODULE_4__pages_edicao_atual_edicao_atual__["a" /* EdicaoAtualPage */] },
            { title: this.varGlobal._todasAsEdicoes, component: __WEBPACK_IMPORTED_MODULE_5__pages_todas_edicoes_todas_edicoes__["a" /* TodasEdicoesPage */] },
            { title: this.varGlobal._contato, component: __WEBPACK_IMPORTED_MODULE_6__pages_contato_contato__["a" /* ContatoPage */] },
            { title: this.varGlobal._sobre, component: __WEBPACK_IMPORTED_MODULE_7__pages_sobre_o_app_sobre_o_app__["a" /* SobreOAppPage */] }
        ];
    }
    /**
     * Inicializa o app
     */
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    /**
     * Método que abre página do menu
     * @param page Recebe a página que será aberta
     */
    MyApp.prototype.openPage = function (page) {
        if (page.component == __WEBPACK_IMPORTED_MODULE_4__pages_edicao_atual_edicao_atual__["a" /* EdicaoAtualPage */]) {
            //console.log("seta id");
            this.shareService.setId(null);
        }
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/mac/Documents/Crea_ba/src/app/app.html"*/'<ion-menu class="MeuMen" type="reveal" [content]="content">\n    <ion-header>\n        <ion-toolbar color="primary">\n            <ion-title>\n                <ion-icon menuClose name="arrow-back"></ion-icon> \n                \n                <img src="{{logoMenu}}" height="30px">\n            </ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n        </ion-list>\n    </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/mac/Documents/Crea_ba/src/app/app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_10__providers_share_service_share_service__["a" /* ShareServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_8__providers_variaveis_globais_variaveis_globais__["a" /* VariaveisGlobaisProvider */],
        __WEBPACK_IMPORTED_MODULE_9__providers_edicao_edicao__["a" /* EdicaoProvider */],
        __WEBPACK_IMPORTED_MODULE_10__providers_share_service_share_service__["a" /* ShareServiceProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaskInputDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MaskInputDirective = (function () {
    function MaskInputDirective(model, maskPattern) {
        this.model = model;
        this.dividers = maskPattern.replace(/\*/g, "").split("");
        this.dividers.push(" ");
        this.generatePattern(maskPattern);
    }
    MaskInputDirective.prototype.onInputChange = function (event) {
        this.modelValue = this.getModelValue(event);
        var stringToFormat = this.modelValue;
        if (stringToFormat.length < 10) {
            stringToFormat = this.padString(stringToFormat);
        }
        this.viewValue = this.format(stringToFormat);
        this.writeValue(event.target, this.viewValue);
    };
    MaskInputDirective.prototype.writeValue = function (target, value) {
        return target.value = value;
    };
    MaskInputDirective.prototype.generatePattern = function (patternString) {
        this.placeHolderCounts = (patternString.match(/\*/g) || []).length;
        for (var i = 0; i < this.placeHolderCounts; i++) {
            patternString = patternString.replace('*', "{" + i + "}");
        }
        this.maskPattern = patternString;
    };
    MaskInputDirective.prototype.format = function (s) {
        var formattedString = this.maskPattern;
        for (var i = 0; i < this.placeHolderCounts; i++) {
            formattedString = formattedString.replace("{" + i + "}", s.charAt(i));
        }
        return formattedString;
    };
    MaskInputDirective.prototype.padString = function (s) {
        var pad = "          ";
        return (s + pad).substring(0, pad.length);
    };
    MaskInputDirective.prototype.getModelValue = function (event) {
        var modelValue = event.target.value;
        for (var i = 0; i < this.dividers.length; i++) {
            while (modelValue.indexOf(this.dividers[i]) > -1) {
                modelValue = modelValue.replace(this.dividers[i], "");
            }
        }
        return modelValue;
    };
    return MaskInputDirective;
}());
MaskInputDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[mask]',
        host: {
            '(keyup)': 'onInputChange($event)'
        },
        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgModel"]]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])("mask")),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgModel"], String])
], MaskInputDirective);

//# sourceMappingURL=mask-input.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutenticationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AutenticationProvider = (function () {
    function AutenticationProvider(http, nativeStorage) {
        this.http = http;
        this.nativeStorage = nativeStorage;
        this.db = "crea_db";
        this.email = "api@agencianbz.com";
        this.password = "Spab@7";
        this.erro = false;
        this.header = new Headers({ 'Access-Control-Allow-Origin': '*' });
    }
    /**
     * Autentica token
     */
    AutenticationProvider.prototype.autentictionToken = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.checkToken().then(function (data) {
                _this.token = data;
            }, function (erro) {
                _this.reqAutentication().then(function (data) {
                    resolve(true);
                }, function (erro) {
                    reject(false);
                });
            });
        });
    };
    /**
     * Checa se existe o banco e se o token expirou
     */
    AutenticationProvider.prototype.checkToken = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.nativeStorage.getItem(_this.db).then(function (data) {
                var data_atual_unix_timestamp = Math.round(+new Date() / 1000);
                console.log('Atual convertida: ' + data_atual_unix_timestamp);
                console.log('Expires: ' + data.expires_in);
                /*if(data.expires_in <= this.dateNow.getTime()){
                  reject(data.expires_in);
                }else{
                  reject(false);
                } */
                reject(true);
            }, function (erro) {
                reject(false);
            });
        });
    };
    AutenticationProvider.prototype.reqAutentication = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post("http://revistacreabahia.com.br/api/gettoken?email=" + _this.email + "&password=" + _this.password, _this.header)
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.token = data.access_token;
                //this.setToken(data);
                resolve(true);
            }, function (erro) {
                reject(erro);
            });
        });
    };
    /**
     * Armazena o retorno quando é autenticado
     * @param obj Retorno da autenticação
     */
    AutenticationProvider.prototype.setToken = function (obj) {
        var _this = this;
        this.nativeStorage.setItem(this.db, obj)
            .then(function (data) {
            _this.token = data.access_token;
        });
    };
    return AutenticationProvider;
}());
AutenticationProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */]])
], AutenticationProvider);

//# sourceMappingURL=autentication.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map