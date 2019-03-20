webpackJsonp([0],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPage = /** @class */ (function () {
    function ForgotPage(navCtrl, loadingCtrl, navParams, network, zone, apiService, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.network = network;
        this.zone = zone;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.forgot = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        this.isDeviceOnline = true;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = false;
            });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = true;
            });
        });
    }
    ForgotPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPage');
    };
    ForgotPage.prototype.attemptUserForgot = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Espere un momento...'
        });
        loading.present();
        var formData = new FormData();
        formData.append('e', this.forgot.value.email);
        this.apiService.postData(formData, 'send_mail.php').then(function (result) {
            loading.dismiss();
            _this.responseData = result;
            if (_this.responseData.status == 'ok') {
                _this.showSent = true;
                _this.showForgotFailText = false;
            }
            else {
                _this.showForgotFailText = true;
                _this.forgotFailText = _this.responseData.msg == 'no user' ? 'Usuario no existe' : 'Error desconocido';
            }
        }, function (err) {
            // Error log
            loading.dismiss();
            _this.showForgotFailText = true;
            _this.forgotFailText = err;
        });
    };
    ForgotPage.prototype.loginPage = function () { this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]); };
    ForgotPage.prototype.signupPage = function () { this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]); };
    ForgotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\store\src\pages\forgot\forgot.html"*/'<!--\n  Generated template for the ForgotPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>forgot</ion-title>\n  </ion-navbar>\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n\n</ion-header>\n\n\n<ion-content padding class="masters">\n    <div text-center><img src="assets/imgs/forgotpwd.png" width="100" ></div>\n    <form [formGroup]="forgot" (ngSubmit)="attemptUserForgot()">\n      <ion-list no-lines padding-top>\n        <ion-item *ngIf="!showSent">\n          <ion-input type="email" placeholder="Email Address" formControlName="email"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button ion-button block round color="secondary" *ngIf="!showSent">Send</button>\n      <label class="lorems lorems-content" *ngIf="showSent">\n        Una nueva contraseña ha sido enviada a la direccion de correo que envio<br>Por favor, le recomendamos que la cambie tan pronto vuelva a entrar\n      </label>\n      <label class="error" *ngIf="showForgotFailText">{{ forgotFailText }} </label>\n    </form>\n\n    <div padding-top>\n    <button ion-button block color="light" clear (click)="loginPage();">If already have an account ? LOGIN</button>\n    <button ion-button block color="light" clear (click)="signupPage();">If new member ? SIGNUP</button>\n   </div>\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\store\src\pages\forgot\forgot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], ForgotPage);
    return ForgotPage;
}());

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__payment_payment__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScannerPage = /** @class */ (function () {
    function ScannerPage(navCtrl, navParams, qrScanner, helper, platform, events, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrScanner = qrScanner;
        this.helper = helper;
        this.platform = platform;
        this.events = events;
        this.toast = toast;
    }
    ScannerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Optionally request the permission early
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // camera permission was granted
                // start scanning
                window.document.querySelector('ion-app').classList.add('scanner_bg');
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    //- text debe tener un json con el id de la tienda y el nombre
                    try {
                        var scanInfo = JSON.parse(text);
                        _this.helper.userName = scanInfo.user;
                        _this.helper.userId = scanInfo.userId;
                        _this.qrScanner.hide(); // hide camera preview
                        scanSub_1.unsubscribe(); // stop scanning
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__payment_payment__["a" /* PaymentPage */]);
                    }
                    catch (e) {
                        if (_this.platform.is('cordova')) {
                            _this.toast.show('Ha ocurrido un error. Intente nuevamente (' + e + ')', '5000', 'center').subscribe(function (toast) {
                                _this.navCtrl.pop();
                            });
                        }
                        else {
                            alert('Ha ocurrido un error. Intente nuevamente (' + e + ')');
                        }
                    }
                });
            }
            else if (status.denied) {
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
            _this.qrScanner.show();
        })
            .catch(function (e) {
            if (_this.platform.is('cordova')) {
                _this.toast.show('Ha ocurrido un error. Intente nuevamente (' + e + ')', '10000', 'center');
            }
        });
    };
    ScannerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scanner',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\store\src\pages\scanner\scanner.html"*/'<!--\n  Generated template for the ScannerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Escanea el codigo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\store\src\pages\scanner\scanner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_3__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */]])
    ], ScannerPage);
    return ScannerPage;
}());

//# sourceMappingURL=scanner.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_toast__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_constants__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_service_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_helper__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { BarcodeScanner } from '@ionic-native/barcode-scanner';









/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, storage, navParams, network, formBuilder, toast, loadingCtrl, apiService, events, zone, platform, helper /*private barcodeScanner: BarcodeScanner,*/) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.network = network;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.events = events;
        this.zone = zone;
        this.platform = platform;
        this.helper = helper; /*private barcodeScanner: BarcodeScanner,*/
        this.clinets = [];
        this.clientFound = false;
        this.paid = false;
        this.pay = this.formBuilder.group({
            price: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            qty: ['1', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        this.isDeviceOnline = true;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = false;
            });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = true;
            });
        });
        this.userName = "Cual es la cantidad de su transaccion con " + helper.userName + "?";
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
    };
    PaymentPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
        this.navCtrl.popToRoot();
    };
    PaymentPage.prototype.attempToCharge = function () {
        var _this = this;
        this.showPaymentFailText = false;
        var loading = this.loadingCtrl.create({
            content: 'Espere un momento...'
        });
        loading.present();
        this.storage.get(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].userLoggedInKey).then(function (value) {
            _this.userInfo = value;
            var formData = new FormData();
            formData.append('p', _this.pay.value.price);
            formData.append('q', '1');
            formData.append('c', String(_this.helper.userId));
            formData.append('u', _this.userInfo.userId);
            //- al hacer submit debe de correr api para descontar cantidad en $$ de la cuenta del ususario logueado
            _this.apiService.postData(formData, 'paybill.php').then(function (result) {
                loading.dismiss();
                _this.responseData = result;
                _this.paid = true;
                if (_this.responseData.status == "ok") {
                    var total = _this.pay.value.qty * _this.pay.value.price;
                    if (_this.platform.is('cordova')) {
                        _this.toast.show('Su transaccion por $' + total +
                            ' a ' + _this.helper.userName +
                            ' se ha hecho con exito.\n' +
                            'Su balance actual es de $' +
                            _this.responseData.balance, '15000', 'center').subscribe(function (toast) {
                            _this.events.publish("setBalance", '$' + parseFloat(_this.responseData.balance).toFixed(2));
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
                            _this.navCtrl.popToRoot();
                        });
                    }
                    else {
                        _this.showPaymentFailText = true;
                        _this.payFailText = 'Su transaccion por $' + total +
                            ' de ' + _this.helper.userName +
                            ' se ha hecho con exito.\n' +
                            'Su balance actual es de $' +
                            _this.responseData.balance;
                    }
                    _this.events.publish('setBalance', '$' + parseFloat(_this.responseData.balance).toFixed(2));
                }
                else {
                    _this.showPaymentFailText = true;
                    _this.payFailText = _this.responseData.msg;
                }
            }, function (err) {
                loading.dismiss();
                _this.paid = true;
                _this.showPaymentFailText = true;
                _this.payFailText = 'error';
            });
        }, function (err) {
            loading.dismiss();
            _this.paid = true;
            _this.showPaymentFailText = true;
            _this.payFailText = err.msg;
        });
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\store\src\pages\payment\payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton>\n    <ion-title>Haz un pago</ion-title>\n  </ion-navbar>\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n\n</ion-header>\n\n\n<ion-content padding>\n    {{ storeName }}\n\n    <form [formGroup]="pay" (ngSubmit)="attempToCharge()">\n      <ion-list no-lines padding-top>\n        <ion-item>\n          <ion-input type="number" placeholder="Precio" formControlName="price"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button ion-button block round color="secondary" type="submit" *ngIf="!paid" [disabled]="!pay.valid">Cobrar</button>\n      <label class="error" *ngIf="showPaymentFailText">{{ payFailText }} </label>\n    </form>\n    <button ion-button block round color="secondary" *ngIf="paid" (click)="goBack()">Regresar</button>\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\store\src\pages\payment\payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__providers_helper__["a" /* HelperService */] /*private barcodeScanner: BarcodeScanner,*/])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_helper__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//import { Toast } from '@ionic-native/toast';
/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, storage, formBuilder, network, navParams, loadingCtrl, apiService, events, zone, helper /*, public barcoScanner: BarcodeScanner, private toast: Toast*/) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.network = network;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.events = events;
        this.zone = zone;
        this.helper = helper; /*, public barcoScanner: BarcodeScanner, private toast: Toast*/
        this.showForm = false;
        this.showPaymentResultText = false;
        this.payResultText = "";
        this.balance = this.helper.balance;
        this.balanceForm = this.formBuilder.group({
            amount: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.isDeviceOnline = true;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = false;
            });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = true;
            });
        });
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].userLoggedInKey).then(function (value) {
            _this.userInfo = value;
            _this.updateTransactions();
        });
    };
    AccountPage.prototype.updateTransactions = function () {
        var _this = this;
        this.items = [];
        var data = { 'u': this.userInfo.userId, t: 'buy' };
        this.apiService.getData(data, 'transactions.php').then(function (result) {
            _this.transactions = result;
            for (var i = 0; i < _this.transactions.length; i++) {
                var transaction = _this.transactions[i];
                var tdate = new Date(transaction.date_created);
                var name_1 = '';
                if (transaction.in_name.length < 7) {
                    name_1 = transaction.in_name;
                }
                else {
                    name_1 = transaction.in_name.substr(0, 7) + '...';
                }
                var priceFixed = transaction.transaction_type_id == 3 ? ('$' + parseFloat(transaction.price).toFixed(2)) : '($' + parseFloat(transaction.price).toFixed(2) + ')';
                _this.items.push({
                    id: transaction.id,
                    type: transaction.transaction_type_id == 3 ? 'D' : 'C',
                    store: transaction.transaction_type_id == 3 ? '-------' : name_1,
                    price: priceFixed,
                    date: tdate.getDate() + '-' + (tdate.getMonth() + 1) + ' ' + tdate.getHours() + ':' + tdate.getMinutes()
                });
            }
        });
    };
    AccountPage.prototype.showPayMoreBalanceForm = function () {
        this.showForm = true;
    };
    AccountPage.prototype.attempToPayMoreBalance = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Espere un momento...'
        });
        loading.present();
        this.showPaymentResultText = false;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].userLoggedInKey).then(function (value) {
            _this.userInfo = value;
            var formData = new FormData();
            formData.append('a', parseFloat(_this.balanceForm.value.amount).toFixed(2));
            formData.append('u', _this.userInfo.userId);
            _this.apiService.postData(formData, 'paymorebalance.php').then(function (result) {
                _this.responseData = result;
                _this.showPaymentResultText = true;
                loading.dismiss();
                if (_this.responseData.status == "ok") {
                    var balanceVal = '$' + parseFloat(_this.responseData.balance).toFixed(2);
                    _this.payResultText = 'Su transaccion se ha hecho con exito.\n' +
                        'Su nuevo saldo es ' + balanceVal;
                    _this.events.publish('setBalance', balanceVal);
                    _this.balance = balanceVal;
                    _this.updateTransactions();
                }
                else {
                    _this.payResultText = _this.responseData.msg;
                }
            }, function (err) {
                loading.dismiss();
                _this.showPaymentResultText = true;
                _this.payResultText = 'Ha ocurrido un error: ' + err.status;
            });
        });
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\store\src\pages\account\account.html"*/'<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mi cuenta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    Su balance actual es\n\n    <h1>{{ balance }}</h1>\n    <div *ngIf="showForm">\n      <form [formGroup]="balanceForm" (ngSubmit)="attempToPayMoreBalance()">\n        <ion-list no-lines padding-top>\n          <ion-item>\n            <ion-input type="number" placeholder="Monto" formControlName="amount"></ion-input>\n          </ion-item>\n        </ion-list>\n        <button ion-button full round color="secondary" type="submit" [disabled]="!balanceForm.valid">Pagar</button>\n        <label class="error" *ngIf="showPaymentResultText">{{ payResultText }} </label>\n      </form>\n    </div>\n  </ion-item>\n  <h1>Transacciones</h1>\n  <ion-grid>\n    <ion-row ion-item *ngFor="let item of items">\n      <ion-col col-2>\n        {{item.type}}\n      </ion-col>\n      <ion-col col-4>\n        {{item.store}}\n      </ion-col>\n      <ion-col col-2>\n        {{item.price}}\n      </ion-col>\n      <ion-col col-4>\n        {{item.date}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\store\src\pages\account\account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_7__providers_helper__["a" /* HelperService */] /*, public barcoScanner: BarcodeScanner, private toast: Toast*/])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_helper__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionsPage = /** @class */ (function () {
    function TransactionsPage(navCtrl, storage, apiService, navParams, zone, network, helper) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.apiService = apiService;
        this.navParams = navParams;
        this.zone = zone;
        this.network = network;
        this.helper = helper;
        this.balance = this.helper.balance;
        this.isDeviceOnline = true;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = false;
            });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = true;
            });
        });
    }
    TransactionsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.items = [];
        this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].userLoggedInKey).then(function (value) {
            _this.userInfo = value;
            var data = { 'u': _this.userInfo.userId, type: 'sell' };
            _this.apiService.getData(data, 'transactions.php').then(function (result) {
                _this.transactions = result;
                for (var i = 0; i < _this.transactions.length; i++) {
                    var transaction = _this.transactions[i];
                    var tdate = new Date(transaction.date_created);
                    var name_1 = '';
                    if (transaction.out_name.length < 10) {
                        name_1 = transaction.out_name;
                    }
                    else {
                        name_1 = transaction.out_name.substr(0, 10) + '...';
                    }
                    var priceFixed = '$' + parseFloat(transaction.price).toFixed(2);
                    _this.items.push({
                        id: transaction.id,
                        user: name_1,
                        price: priceFixed,
                        date: tdate.getDate() + '-' + (tdate.getMonth() + 1) + ' ' + tdate.getHours() + ':' + tdate.getMinutes()
                    });
                }
            });
        });
    };
    TransactionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transactions',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\store\src\pages\transactions\transactions.html"*/'<!--\n  Generated template for the TransactionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Transacciones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  Su balance actual es\n  \n  <h1>{{ balance }}</h1>\n  <ion-grid>\n    <ion-row ion-item *ngFor="let item of items">\n      <ion-col col-2>\n        {{item.type}}\n      </ion-col>\n      <ion-col col-4>\n        {{item.user}}\n      </ion-col>\n      <ion-col col-2>\n        {{item.price}}\n      </ion-col>\n      <ion-col col-4>\n        {{item.date}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\store\src\pages\transactions\transactions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_6__providers_helper__["a" /* HelperService */]])
    ], TransactionsPage);
    return TransactionsPage;
}());

//# sourceMappingURL=transactions.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = {
    API_ENDPOINT: 'https://www.esferasoluciones.com/api/payment/api/',
    LOCAL_API_ENDPOINT: 'http://localhost:8099/',
    userLoggedInKey: 'userLoggedIn',
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(244);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_constants__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiServiceProvider = /** @class */ (function () {
    function ApiServiceProvider(http, platform) {
        this.http = http;
        this.platform = platform;
        console.log('Hello ApiServiceProvider Provider');
    }
    ApiServiceProvider.prototype.postData = function (data, url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var endpoint = __WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].API_ENDPOINT;
            if (!_this.platform.is('cordova')) {
                endpoint = __WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].LOCAL_API_ENDPOINT;
            }
            _this.http.post(endpoint + url, data)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiServiceProvider.prototype.getData = function (data, url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var str = [];
            for (var p in data) {
                if (data.hasOwnProperty(p)) {
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
                }
            }
            var endpoint = __WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].API_ENDPOINT;
            if (!_this.platform.is('cordova')) {
                endpoint = __WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].LOCAL_API_ENDPOINT;
            }
            _this.http.get(endpoint + url + '?' + str.join("&"))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */]])
    ], ApiServiceProvider);
    return ApiServiceProvider;
}());

//# sourceMappingURL=api-service.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_qr_scanner__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_account__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_payment_payment__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_scanner_scanner__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_transactions_transactions__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_helper__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_api_service_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_qrcode2__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_nfc__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_in_app_purchase__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { Facebook } from '@ionic-native/facebook';





















//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_scanner_scanner__["a" /* ScannerPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_transactions_transactions__["a" /* TransactionsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_22_ngx_qrcode2__["a" /* NgxQRCodeModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_scanner_scanner__["a" /* ScannerPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_transactions_transactions__["a" /* TransactionsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__providers_helper__["a" /* HelperService */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_network__["a" /* Network */],
                //Facebook,
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_api_service_api_service__["a" /* ApiServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_qr_scanner__["a" /* QRScanner */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_nfc__["a" /* NFC */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_nfc__["b" /* Ndef */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_in_app_purchase__["a" /* InAppPurchase */]
                //BarcodeScanner
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_constants__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HelperService = /** @class */ (function () {
    function HelperService(storage) {
        this.storage = storage;
        this.balance = '----';
    }
    HelperService.prototype.setBalance = function (actualBalance) {
        this.balance = actualBalance;
    };
    HelperService.prototype.setUserInfo = function (actualUserName, actualUserId) {
        this.userName = actualUserName;
        this.userId = actualUserId;
    };
    HelperService.prototype.logout = function () {
        this.balance = '----';
        this.storage.set(__WEBPACK_IMPORTED_MODULE_1__services_constants__["a" /* Constants */].userLoggedInKey, null);
    };
    HelperService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HelperService);
    return HelperService;
}());

//# sourceMappingURL=helper.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_helper__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_account_account__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_transactions_transactions__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage, apiService, loadingCtrl, events, helper) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.helper = helper;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */], type: 'root', icon: '' },
            { title: 'Mi cuenta', component: __WEBPACK_IMPORTED_MODULE_9__pages_account_account__["a" /* AccountPage */], type: 'push', icon: '' },
            { title: 'Mis Ventas', component: __WEBPACK_IMPORTED_MODULE_12__pages_transactions_transactions__["a" /* TransactionsPage */], type: 'push', icon: '' },
            { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */], type: 'root', icon: '' },
            { title: 'Logout', component: null, type: 'logout', icon: 'log-out' }
        ];
        platform.ready().then(function () {
            _this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].userLoggedInKey).then(function (value) {
                if (value == null) {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */]);
                }
                else {
                    var loading_1 = _this.loadingCtrl.create({
                        content: 'Espere un momento...'
                    });
                    loading_1.present();
                    _this.userInfo = value;
                    var data = { 'id': _this.userInfo.userId, 'type': 'user' };
                    _this.apiService.getData(data, 'users.php').then(function (result) {
                        loading_1.dismiss();
                        _this.responseData = result;
                        _this.events.publish("setBalance", '$' + _this.responseData.user.amount);
                    });
                }
            })
                .catch(function (err) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */]);
            });
            ;
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.type == 'logout')
            this.events.publish('logout');
        else if (page.type == 'root')
            this.nav.setRoot(page.component);
        else
            this.nav.push(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\store\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\store\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_7__providers_helper__["a" /* HelperService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\store\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\store\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__scanner_scanner__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import { PaymentPage } from '../payment/payment';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, network, events, zone, storage, apiService, loadingCtrl, helper) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.network = network;
        this.events = events;
        this.zone = zone;
        this.storage = storage;
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.helper = helper;
        this.showQRCode = false;
        this.balance = this.helper.balance;
        events.subscribe('setBalance', function (actualBalance) {
            _this.balance = actualBalance;
            _this.helper.setBalance(actualBalance);
        });
        this.events.subscribe('logout', function () {
            //call method to refresh content
            _this.logout();
        });
        this.isDeviceOnline = true;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = false;
            });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = true;
            });
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].userLoggedInKey).then(function (value) {
            if (value != null) {
                _this.userInfo = value;
                _this.showQRCode = true;
                _this.createdCode = "{\"store\":\"" + _this.userInfo.userName + "\",\"storeId\":\"" + _this.userInfo.userId + "\"}";
            }
        });
    };
    HomePage.prototype.logout = function () {
        this.helper.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.refreshBalance = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].userLoggedInKey).then(function (value) {
            if (value == null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
            }
            else {
                var loading_1 = _this.loadingCtrl.create({
                    content: 'Espere un momento...'
                });
                loading_1.present();
                _this.userInfo = value;
                var data = { 'id': _this.userInfo.userId, 'type': 'user' };
                _this.apiService.getData(data, 'users.php').then(function (result) {
                    loading_1.dismiss();
                    _this.responseData = result;
                    _this.events.publish("setBalance", '$' + parseFloat(_this.responseData.user.amount).toFixed(2));
                }, function (err) {
                    loading_1.dismiss();
                });
            }
        })
            .catch(function (err) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
        });
    };
    HomePage.prototype.takePayment = function () {
        /*this.helper.storeName = 'Cerveceria Artesanal S.A.';
        this.helper.storeId = 2;
        this.navCtrl.push(PaymentPage);*/
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__scanner_scanner__["a" /* ScannerPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\store\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n</ion-header>\n\n\n<ion-content padding>\n  <p class="balance-title">Saldo actual</p>\n  <p class="balance-number">{{ balance }}</p>\n  \n  <ion-item *ngIf="showQRCode">\n    <h1>Código de venta</h1>\n    <div>\n      <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n    </div>\n  </ion-item>\n    <button ion-button end color="primary" (click)="refreshBalance();"> RECARGAR BALANCE </button>\n    \n    <button ion-button end color="primary" (click)="takePayment();"> RECIBIR PAGO </button>\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\store\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_helper__["a" /* HelperService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_constants__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_signup__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forgot_forgot__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Facebook } from '@ionic-native/facebook';







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, storage, navParams, network, zone, 
        /*private fb: Facebook,*/ formBuilder, events, apiService, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.network = network;
        this.zone = zone;
        this.formBuilder = formBuilder;
        this.events = events;
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.showLoginFailText = false;
        this.userInfo = {};
        this.login = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            pwd: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
        this.isDeviceOnline = true;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = false;
            });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = true;
            });
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.signupPage = function () { this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__signup_signup__["a" /* SignupPage */]); };
    LoginPage.prototype.forgotPasswordPage = function () { this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__forgot_forgot__["a" /* ForgotPage */]); };
    LoginPage.prototype.attemptUserLogin = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Espere un momento...'
        });
        loading.present();
        var formData = new FormData();
        formData.append('u', this.login.value.email);
        formData.append('p', this.login.value.pwd);
        formData.append('t', '1');
        this.apiService.postData(formData, 'access.php').then(function (result) {
            loading.dismiss();
            _this.responseData = result;
            if (_this.responseData.status == "ok") {
                var userArray = {
                    userId: _this.responseData.user.id,
                    userEmail: _this.responseData.user.email,
                    userName: _this.responseData.user.name
                };
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].userLoggedInKey, userArray);
                _this.showLoginFailText = false;
                _this.events.publish('setBalance', '$' + parseFloat(_this.responseData.user.amount).toFixed(2));
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
            }
            else {
                _this.showLoginFailText = true;
                _this.loginFailText = (_this.responseData.msg == 'no password' ?
                    'Contraseña incorrecta' : (_this.responseData.msg == 'no user' ?
                    'Este usuario no existe' : (_this.responseData.msg == 'no platform' ? 'Plataforma incorrecta' : 'Error desconocido')));
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\store\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n\n</ion-header>\n\n\n<ion-content padding class="masters">\n\n    <form [formGroup]="login" (ngSubmit)="attemptUserLogin()">\n      <ion-list no-lines padding-top>\n        <ion-item>\n          <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="password" placeholder="Password" formControlName="pwd"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button ion-button block round color="secondary" type="submit" [disabled]="!login.valid">Login</button>\n      <label class="error" *ngIf="showLoginFailText">{{ loginFailText }} </label>\n    </form>\n\n    <div padding-top>\n    <button ion-button block color="light" clear (click)="signupPage();">If new member ? SIGNUP</button>\n    <button ion-button block color="light" clear (click)="forgotPasswordPage();">Forgot Password</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\store\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_constants__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_helper__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_nfc__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_toast__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__forgot_forgot__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, storage, navParams, network, zone, apiService, nfc, ndef, loadingCtrl, formBuilder, helper, events, platform, toast) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.network = network;
        this.zone = zone;
        this.apiService = apiService;
        this.nfc = nfc;
        this.ndef = ndef;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.helper = helper;
        this.events = events;
        this.platform = platform;
        this.toast = toast;
        this.showDuplicateText = false;
        this.isUserLoggedIn = false;
        this.isDeviceOnline = true;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = false;
            });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = true;
            });
        });
        this.register = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            name: [''],
            pwd: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6)])],
            group: ['']
        });
        var $view = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].userLoggedInKey).then(function (value) {
            if (value != null) {
                _this.isUserLoggedIn = true;
                _this.userInfo = value;
                var loading_1 = _this.loadingCtrl.create({
                    content: 'Espere un momento...'
                });
                loading_1.present();
                $view.register = $view.formBuilder.group({
                    email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
                    name: [''],
                    pwd: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6)],
                    group: ['']
                });
                _this.userInfo = value;
                _this.apiService.getData({ 'id': _this.userInfo.userId, 'type': 'user' }, 'users.php').then(function (result) {
                    loading_1.dismiss();
                    _this.responseData = result;
                    _this.nameValue = _this.responseData.user.name;
                    _this.emailValue = _this.responseData.user.email;
                });
            }
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.logout = function () {
        this.helper.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.cancel = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
    };
    SignupPage.prototype.loginPage = function () { this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__login_login__["a" /* LoginPage */]); };
    SignupPage.prototype.forgotPasswordPage = function () { this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__forgot_forgot__["a" /* ForgotPage */]); };
    SignupPage.prototype.linkTag = function () {
        var _this = this;
        this.nfc.addNdefListener(function () {
            if (_this.platform.is('cordova')) {
                _this.toast.show('successfully attached ndef listener', '5000', 'center');
            }
            else {
                alert('successfully attached ndef listener');
            }
        }, function (err) {
            if (_this.platform.is('cordova')) {
                _this.toast.show('error attaching ndef listener' + err, '5000', 'center');
            }
            else {
                alert('error attaching ndef listener' + err);
            }
        }).subscribe(function (event) {
            if (_this.platform.is('cordova')) {
                _this.toast.show('received ndef message. the tag contains: ' + event.tag, '5000', 'center');
                _this.toast.show('decoded tag id' + _this.nfc.bytesToHexString(event.tag.id), '5000', 'center');
            }
            else {
                alert('received ndef message. the tag contains: ' + event.tag);
                alert('decoded tag id' + _this.nfc.bytesToHexString(event.tag.id));
            }
            var message = _this.ndef.textRecord(_this.userInfo.userEmail);
            _this.nfc.share([message]).then(function (success) {
                console.log(success);
            }).catch(function (err) {
                console.log(err);
            });
        });
    };
    SignupPage.prototype.attemptUserRegister = function () {
        var _this = this;
        this.showDuplicateText = false;
        var loading = this.loadingCtrl.create({
            content: 'Espere un momento...'
        });
        loading.present();
        var formData = new FormData();
        this.storage.get(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].userLoggedInKey).then(function (value) {
            _this.userInfo = value;
            formData.append('userId', _this.userInfo.userId);
            formData.append('name', _this.register.value.name);
            formData.append('email', _this.register.value.email);
            formData.append('user_type_id', '1');
            formData.append('uid', '1234567890');
            if (value != null) {
                formData.append('type', 'save');
                if (_this.register.value.pwd)
                    formData.append('password', _this.register.value.pwd);
            }
            else {
                formData.append('type', 'new');
                formData.append('password', _this.register.value.pwd);
            }
            _this.apiService.postData(formData, 'users.php').then(function (result) {
                loading.dismiss();
                _this.responseData = result;
                if (_this.responseData.status == "ok") {
                    var userArray = {
                        userId: _this.responseData.id,
                        userName: _this.responseData.user.name,
                        userEmail: _this.responseData.user.email
                    };
                    _this.storage.set(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].userLoggedInKey, userArray);
                    _this.events.publish('setBalance', '$' + parseFloat(_this.responseData.user.amount).toFixed(2));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
                }
                else if (_this.responseData.msg == "duplicate") {
                    _this.showDuplicateText = true;
                }
            });
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\store\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n        <ion-buttons end *ngIf="isUserLoggedIn">\n          <button id="logout" (click)="logout()">\n            Logout\n          </button>\n        </ion-buttons>\n  </ion-navbar>\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n\n</ion-header>\n\n\n<ion-content padding class="masters">\n\n    <ion-grid>\n      <ion-row *ngIf="!isUserLoggedIn">\n        <ion-col><button ion-button block class="facebookButton"> Facebook</button></ion-col>\n        <ion-col><button ion-button block class="instagramButton"> Instagram</button></ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button block (click)="linkTag()">Enlazar Tag</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class="hrLine" *ngIf="!isUserLoggedIn"><span>Or</span></div>\n    <form [formGroup]="register" (ngSubmit)="attemptUserRegister()">\n      <ion-list no-lines padding-top>\n        <ion-item>\n          <ion-input type="text" placeholder="Nombre" value="{{ nameValue }}" formControlName="name"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="email" placeholder="Email" value="{{ emailValue }}" formControlName="email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="password" placeholder="Password" formControlName="pwd"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button ion-button block round color="secondary" type="submit" [disabled]="!register.valid" *ngIf="!isUserLoggedIn">Signup</button>\n      <button ion-button block round color="secondary" type="submit" [disabled]="!register.valid" *ngIf="isUserLoggedIn">Guardar</button>\n      <label class="error" *ngIf="showDuplicateText">Este correo ya existe, intente otro</label>\n      <ion-row><a center ion-link color="primary" (click)="cancel();" *ngIf="isUserLoggedIn">Cancel</a></ion-row>\n    </form>\n    <div padding *ngIf="!isUserLoggedIn">\n      <button ion-button block color="light" clear (click)="loginPage();">If already have an account ? LOGIN</button>\n      <button ion-button block color="light" clear (click)="forgotPasswordPage();">Forgot Password</button>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\store\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_nfc__["a" /* NFC */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_nfc__["b" /* Ndef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_toast__["a" /* Toast */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

},[224]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9mb3Jnb3QvZm9yZ290LnRzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvZXNtNSBsYXp5IiwiLi4vLi4vc3JjIGxhenkiLCIuLi8uLi9zcmMvcGFnZXMvc2Nhbm5lci9zY2FubmVyLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL3BheW1lbnQvcGF5bWVudC50cyIsIi4uLy4uL3NyYy9wYWdlcy9hY2NvdW50L2FjY291bnQudHMiLCIuLi8uLi9zcmMvcGFnZXMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy50cyIsIi4uLy4uL3NyYy9zZXJ2aWNlcy9jb25zdGFudHMudHMiLCIuLi8uLi9zcmMvYXBwL21haW4udHMiLCIuLi8uLi9zcmMvcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlLnRzIiwiLi4vLi4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwiLi4vLi4vc3JjL3Byb3ZpZGVycy9oZWxwZXIudHMiLCIuLi8uLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCIuLi8uLi9zcmMvcGFnZXMvbGlzdC9saXN0LnRzIiwiLi4vLi4vc3JjL3BhZ2VzL2hvbWUvaG9tZS50cyIsIi4uLy4uL3NyYy9wYWdlcy9sb2dpbi9sb2dpbi50cyIsIi4uLy4uL3NyYy9wYWdlcy9zaWdudXAvc2lnbnVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQzBCO0FBQzVCO0FBQ29CO0FBQ1M7QUFFbEM7QUFDRztBQUU5Qzs7Ozs7R0FLRztBQU1IO0lBUUUsb0JBQW1CLE9BQXNCLEVBQVMsV0FBOEIsRUFBUyxTQUFvQixFQUFVLE9BQWdCLEVBQVUsSUFBWSxFQUNwSixVQUErQixFQUFVLFdBQXdCO1FBRDFFLGlCQWtCQztRQWxCa0IsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxZ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O0lBQUQsQ0FBQztBQUFBO1NBN0pZLFVBQVUsZSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgTG9hZGluZ0NvbnRyb2xsZXIgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFwaVNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZSc7XG5cbmltcG9ydCB7IExvZ2luUGFnZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luJztcbmltcG9ydCB7IFNpZ251cFBhZ2UgfSBmcm9tICcuLi9zaWdudXAvc2lnbnVwJztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBGb3Jnb3RQYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWZvcmdvdCcsXG4gIHRlbXBsYXRlVXJsOiAnZm9yZ290Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBGb3Jnb3RQYWdlIHtcbiAgcHJpdmF0ZSBmb3Jnb3QgOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBpc0RldmljZU9ubGluZSA6IGJvb2xlYW47XG4gIHB1YmxpYyBzaG93Rm9yZ290RmFpbFRleHQgOiBib29sZWFuO1xuICBwdWJsaWMgZm9yZ290RmFpbFRleHQgOiBzdHJpbmc7XG4gIHB1YmxpYyByZXNwb25zZURhdGEgOiBhbnk7XG4gIHB1YmxpYyBzaG93U2VudCA6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHB1YmxpYyBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JrLCBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwdWJsaWMgYXBpU2VydmljZSA6IEFwaVNlcnZpY2VQcm92aWRlciwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgICB0aGlzLmZvcmdvdCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3RcbiAgICB0aGlzLm5ldHdvcmsub25EaXNjb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ2lvblZpZXdEaWRMb2FkIEZvcmdvdFBhZ2UnKTtcbiAgfVxuXG4gIGF0dGVtcHRVc2VyRm9yZ290KCkge1xuICAgIGxldCBsb2FkaW5nID0gdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgY29udGVudDogJ0VzcGVyZSB1biBtb21lbnRvLi4uJ1xuICAgIH0pO1xuICAgIGxvYWRpbmcucHJlc2VudCgpO1xuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnZScsIHRoaXMuZm9yZ290LnZhbHVlLmVtYWlsKTtcbiAgICB0aGlzLmFwaVNlcnZpY2UucG9zdERhdGEoZm9ybURhdGEsJ3NlbmRfbWFpbC5waHAnKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzdWx0O1xuICAgICAgICBpZih0aGlzLnJlc3BvbnNlRGF0YS5zdGF0dXMgPT0gJ29rJyl7XG4gICAgICAgICAgdGhpcy5zaG93U2VudCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zaG93Rm9yZ290RmFpbFRleHQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNob3dGb3Jnb3RGYWlsVGV4dCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5mb3Jnb3RGYWlsVGV4dCA9IHRoaXMucmVzcG9uc2VEYXRhLm1zZyA9PSAnbm8gdXNlcicgPyAnVXN1YXJpbyBubyBleGlzdGUnIDogJ0Vycm9yIGRlc2Nvbm9jaWRvJztcbiAgICAgICAgfVxuICAgIH0sIChlcnIpID0+IHtcbiAgICAgIC8vIEVycm9yIGxvZ1xuICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICB0aGlzLnNob3dGb3Jnb3RGYWlsVGV4dCA9IHRydWU7XG4gICAgICB0aGlzLmZvcmdvdEZhaWxUZXh0ID0gZXJyO1xuICAgIH0pO1xuICB9XG5cbiAgbG9naW5QYWdlKCl7IHRoaXMubmF2Q3RybC5zZXRSb290KExvZ2luUGFnZSk7IH1cbiAgc2lnbnVwUGFnZSgpeyB0aGlzLm5hdkN0cmwuc2V0Um9vdChTaWdudXBQYWdlKTsgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvZm9yZ290L2ZvcmdvdC50cyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdGNoZWQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IDEyNztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2VzbTUgbGF6eVxuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdGNoZWQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IDE3MDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYyBsYXp5XG4vLyBtb2R1bGUgaWQgPSAxNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMsIEV2ZW50cywgUGxhdGZvcm0gfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFFSU2Nhbm5lciwgUVJTY2FubmVyU3RhdHVzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9xci1zY2FubmVyJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvaGVscGVyJztcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS90b2FzdCc7XG5cbmltcG9ydCB7IFBheW1lbnRQYWdlIH0gZnJvbSAnLi4vcGF5bWVudC9wYXltZW50JztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBTY2FubmVyUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1zY2FubmVyJyxcbiAgdGVtcGxhdGVVcmw6ICdzY2FubmVyLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTY2FubmVyUGFnZSB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHJpdmF0ZSBxclNjYW5uZXI6IFFSU2Nhbm5lcixcbiAgICBwdWJsaWMgaGVscGVyIDogSGVscGVyU2VydmljZSwgcHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSwgcHVibGljIGV2ZW50cyA6IEV2ZW50cywgcHJpdmF0ZSB0b2FzdDogVG9hc3QpIHtcblxuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgLy8gT3B0aW9uYWxseSByZXF1ZXN0IHRoZSBwZXJtaXNzaW9uIGVhcmx5XG4gICAgdGhpcy5xclNjYW5uZXIucHJlcGFyZSgpXG4gICAgICAgIC50aGVuKChzdGF0dXM6IFFSU2Nhbm5lclN0YXR1cykgPT4ge1xuICAgICAgICAgICAgIGlmIChzdGF0dXMuYXV0aG9yaXplZCkge1xuICAgICAgICAgICAgICAgLy8gY2FtZXJhIHBlcm1pc3Npb24gd2FzIGdyYW50ZWRcblxuXG4gICAgICAgICAgICAgICAvLyBzdGFydCBzY2FubmluZ1xuICAgICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tYXBwJykuY2xhc3NMaXN0LmFkZCgnc2Nhbm5lcl9iZycpO1xuICAgICAgICAgICAgICAgIGxldCBzY2FuU3ViID0gdGhpcy5xclNjYW5uZXIuc2NhbigpLnN1YnNjcmliZSgodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vLSB0ZXh0IGRlYmUgdGVuZXIgdW4ganNvbiBjb24gZWwgaWQgZGUgbGEgdGllbmRhIHkgZWwgbm9tYnJlXG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgc2NhbkluZm8gPSBKU09OLnBhcnNlKHRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVscGVyLnVzZXJOYW1lID0gc2NhbkluZm8udXNlcjtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlbHBlci51c2VySWQgPSBzY2FuSW5mby51c2VySWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnFyU2Nhbm5lci5oaWRlKCk7IC8vIGhpZGUgY2FtZXJhIHByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICBzY2FuU3ViLnVuc3Vic2NyaWJlKCk7IC8vIHN0b3Agc2Nhbm5pbmdcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdkN0cmwucHVzaChQYXltZW50UGFnZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucGxhdGZvcm0uaXMoJ2NvcmRvdmEnKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0LnNob3coJ0hhIG9jdXJyaWRvIHVuIGVycm9yLiBJbnRlbnRlIG51ZXZhbWVudGUgKCcrZSsnKScsICc1MDAwJywgJ2NlbnRlcicpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdkN0cmwucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0hhIG9jdXJyaWRvIHVuIGVycm9yLiBJbnRlbnRlIG51ZXZhbWVudGUgKCcrZSsnKScpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cy5kZW5pZWQpIHtcbiAgICAgICAgICAgICAgIC8vIGNhbWVyYSBwZXJtaXNzaW9uIHdhcyBwZXJtYW5lbnRseSBkZW5pZWRcbiAgICAgICAgICAgICAgIC8vIHlvdSBtdXN0IHVzZSBRUlNjYW5uZXIub3BlblNldHRpbmdzKCkgbWV0aG9kIHRvIGd1aWRlIHRoZSB1c2VyIHRvIHRoZSBzZXR0aW5ncyBwYWdlXG4gICAgICAgICAgICAgICAvLyB0aGVuIHRoZXkgY2FuIGdyYW50IHRoZSBwZXJtaXNzaW9uIGZyb20gdGhlcmVcbiAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgLy8gcGVybWlzc2lvbiB3YXMgZGVuaWVkLCBidXQgbm90IHBlcm1hbmVudGx5LiBZb3UgY2FuIGFzayBmb3IgcGVybWlzc2lvbiBhZ2FpbiBhdCBhIGxhdGVyIHRpbWUuXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIHRoaXMucXJTY2FubmVyLnNob3coKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZTogYW55KSA9PiB7XG4gICAgICBpZih0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpe1xuICAgICAgICB0aGlzLnRvYXN0LnNob3coJ0hhIG9jdXJyaWRvIHVuIGVycm9yLiBJbnRlbnRlIG51ZXZhbWVudGUgKCcrZSsnKScsICcxMDAwMCcsICdjZW50ZXInKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3NjYW5uZXIvc2Nhbm5lci50cyIsImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iYXJjb2RlLXNjYW5uZXInO1xuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3RvYXN0JztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgTG9hZGluZ0NvbnRyb2xsZXIsIEV2ZW50cywgUGxhdGZvcm0gfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgQXBpU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvaGVscGVyJztcbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi4vaG9tZS9ob21lJztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBQYXltZW50UGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1wYXltZW50JyxcbiAgdGVtcGxhdGVVcmw6ICdwYXltZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50UGFnZSB7XG4gIHByaXZhdGUgcGF5IDogRm9ybUdyb3VwO1xuICBwdWJsaWMgaXNEZXZpY2VPbmxpbmUgOiBib29sZWFuO1xuICBwdWJsaWMgc2hvd1BheW1lbnRGYWlsVGV4dCA6IGJvb2xlYW47XG4gIHB1YmxpYyBwYXlGYWlsVGV4dCA6IHN0cmluZztcbiAgcHVibGljIHVzZXJOYW1lIDogc3RyaW5nO1xuICBwdWJsaWMgdXNlcklkIDogc3RyaW5nO1xuICBwdWJsaWMgcmVzcG9uc2VEYXRhIDogYW55O1xuICBwdWJsaWMgY2xpbmV0czogYW55W10gPSBbXTtcbiAgcHVibGljIHNlbGVjdGVkQ2xpZW50OiBhbnk7XG4gIHB1YmxpYyBjbGllbnRGb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgcGFpZCA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHVzZXJJbmZvOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmssIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgdG9hc3Q6IFRvYXN0LCBwdWJsaWMgbG9hZGluZ0N0cmw6IExvYWRpbmdDb250cm9sbGVyLCBwdWJsaWMgYXBpU2VydmljZSA6IEFwaVNlcnZpY2VQcm92aWRlciwgcHVibGljIGV2ZW50cyA6IEV2ZW50cyxcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSwgcHVibGljIGhlbHBlciA6IEhlbHBlclNlcnZpY2UvKnByaXZhdGUgYmFyY29kZVNjYW5uZXI6IEJhcmNvZGVTY2FubmVyLCovKSB7XG4gICAgdGhpcy5wYXkgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgcHJpY2U6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgIHF0eTogWycxJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3RcbiAgICB0aGlzLm5ldHdvcmsub25EaXNjb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMudXNlck5hbWUgPSBcIkN1YWwgZXMgbGEgY2FudGlkYWQgZGUgc3UgdHJhbnNhY2Npb24gY29uIFwiICsgaGVscGVyLnVzZXJOYW1lICsgXCI/XCI7XG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygnaW9uVmlld0RpZExvYWQgUGF5bWVudFBhZ2UnKTtcbiAgfVxuXG4gIGdvQmFjaygpe1xuICAgIHRoaXMubmF2Q3RybC5zZXRSb290KEhvbWVQYWdlKTtcbiAgICB0aGlzLm5hdkN0cmwucG9wVG9Sb290KCk7XG4gIH1cblxuICBhdHRlbXBUb0NoYXJnZSgpe1xuICAgIHRoaXMuc2hvd1BheW1lbnRGYWlsVGV4dCA9IGZhbHNlO1xuICAgIGxldCBsb2FkaW5nID0gdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgY29udGVudDogJ0VzcGVyZSB1biBtb21lbnRvLi4uJ1xuICAgIH0pO1xuICAgIGxvYWRpbmcucHJlc2VudCgpO1xuXG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMudXNlckxvZ2dlZEluS2V5KS50aGVuKHZhbHVlID0+IHtcbiAgICAgIHRoaXMudXNlckluZm8gPSB2YWx1ZTtcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncCcsIHRoaXMucGF5LnZhbHVlLnByaWNlKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdxJywgJzEnKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdjJywgU3RyaW5nKHRoaXMuaGVscGVyLnVzZXJJZCkpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3UnLCB0aGlzLnVzZXJJbmZvLnVzZXJJZCk7XG5cbiAgICAgICAgLy8tIGFsIGhhY2VyIHN1Ym1pdCBkZWJlIGRlIGNvcnJlciBhcGkgcGFyYSBkZXNjb250YXIgY2FudGlkYWQgZW4gJCQgZGUgbGEgY3VlbnRhIGRlbCB1c3VzYXJpbyBsb2d1ZWFkb1xuICAgICAgICB0aGlzLmFwaVNlcnZpY2UucG9zdERhdGEoZm9ybURhdGEsICdwYXliaWxsLnBocCcpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXN1bHQ7XG4gICAgICAgICAgICB0aGlzLnBhaWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMucmVzcG9uc2VEYXRhLnN0YXR1cyA9PSBcIm9rXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG90YWwgPSB0aGlzLnBheS52YWx1ZS5xdHkgKiB0aGlzLnBheS52YWx1ZS5wcmljZTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpe1xuICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdC5zaG93KCdTdSB0cmFuc2FjY2lvbiBwb3IgJCcgKyB0b3RhbCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyBhICcgKyB0aGlzLmhlbHBlci51c2VyTmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyBzZSBoYSBoZWNobyBjb24gZXhpdG8uXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1N1IGJhbGFuY2UgYWN0dWFsIGVzIGRlICQnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEuYmFsYW5jZSwgJzE1MDAwJywgJ2NlbnRlcicpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goXCJzZXRCYWxhbmNlXCIsICckJyArIHBhcnNlRmxvYXQodGhpcy5yZXNwb25zZURhdGEuYmFsYW5jZSkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoSG9tZVBhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2Q3RybC5wb3BUb1Jvb3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BheW1lbnRGYWlsVGV4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICB0aGlzLnBheUZhaWxUZXh0ID0gJ1N1IHRyYW5zYWNjaW9uIHBvciAkJyArIHRvdGFsICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIGRlICcgKyB0aGlzLmhlbHBlci51c2VyTmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyBzZSBoYSBoZWNobyBjb24gZXhpdG8uXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1N1IGJhbGFuY2UgYWN0dWFsIGVzIGRlICQnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEuYmFsYW5jZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMucHVibGlzaCgnc2V0QmFsYW5jZScsICckJyArIHBhcnNlRmxvYXQodGhpcy5yZXNwb25zZURhdGEuYmFsYW5jZSkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zaG93UGF5bWVudEZhaWxUZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5wYXlGYWlsVGV4dCA9IHRoaXMucmVzcG9uc2VEYXRhLm1zZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICAgIHRoaXMucGFpZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zaG93UGF5bWVudEZhaWxUZXh0ID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnBheUZhaWxUZXh0ID0gJ2Vycm9yJztcbiAgICAgIH0pO1xuICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgIHRoaXMucGFpZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd1BheW1lbnRGYWlsVGV4dCA9IHRydWU7XG4gICAgICAgIHRoaXMucGF5RmFpbFRleHQgPSBlcnIubXNnO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvcGF5bWVudC9wYXltZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgTG9hZGluZ0NvbnRyb2xsZXIsIEV2ZW50cyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9oZWxwZXInO1xuLy9pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmFyY29kZS1zY2FubmVyJztcblxuLy9pbXBvcnQgeyBUb2FzdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdG9hc3QnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIEFjY291bnRQYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWFjY291bnQnLFxuICB0ZW1wbGF0ZVVybDogJ2FjY291bnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFjY291bnRQYWdlIHtcbiAgcHVibGljIGJhbGFuY2VGb3JtIDogRm9ybUdyb3VwO1xuICBwdWJsaWMgYmFsYW5jZSA6IHN0cmluZztcbiAgcHVibGljIHNob3dGb3JtIDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNEZXZpY2VPbmxpbmUgOiBib29sZWFuO1xuICBwdWJsaWMgcmVzcG9uc2VEYXRhIDogYW55O1xuICBwdWJsaWMgcGF5UmVzdWx0VGV4dCA6IHN0cmluZztcbiAgcHVibGljIHNob3dQYXltZW50UmVzdWx0VGV4dCA6IGJvb2xlYW47XG4gIHB1YmxpYyB0cmFuc2FjdGlvbnMgOiBhbnk7XG4gIHB1YmxpYyB1c2VySW5mbzogYW55O1xuICBwdWJsaWMgaXRlbXM6IEFycmF5PHtpZDogbnVtYmVyLCB0eXBlOiBzdHJpbmcsIHN0b3JlOiBzdHJpbmcsIHByaWNlOiBzdHJpbmcsIGRhdGU6IHN0cmluZ30+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmssIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcyxcbiAgICBwdWJsaWMgbG9hZGluZ0N0cmw6IExvYWRpbmdDb250cm9sbGVyLCBwdWJsaWMgYXBpU2VydmljZSA6IEFwaVNlcnZpY2VQcm92aWRlciwgcHVibGljIGV2ZW50cyA6IEV2ZW50cyxcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBoZWxwZXI6IEhlbHBlclNlcnZpY2UgLyosIHB1YmxpYyBiYXJjb1NjYW5uZXI6IEJhcmNvZGVTY2FubmVyLCBwcml2YXRlIHRvYXN0OiBUb2FzdCovKSB7XG4gICAgdGhpcy5zaG93UGF5bWVudFJlc3VsdFRleHQgPSBmYWxzZTtcbiAgICB0aGlzLnBheVJlc3VsdFRleHQgPSBcIlwiO1xuXG4gICAgdGhpcy5iYWxhbmNlID0gdGhpcy5oZWxwZXIuYmFsYW5jZTtcbiAgICB0aGlzLmJhbGFuY2VGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgIGFtb3VudDpbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBkaXNjb25uZWN0XG4gICAgdGhpcy5uZXR3b3JrLm9uRGlzY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBjb25uZWN0aW9uXG4gICAgdGhpcy5uZXR3b3JrLm9uQ29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnVzZXJMb2dnZWRJbktleSkudGhlbigodmFsdWUpPT57XG4gICAgICB0aGlzLnVzZXJJbmZvID0gdmFsdWU7XG4gICAgICB0aGlzLnVwZGF0ZVRyYW5zYWN0aW9ucygpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlVHJhbnNhY3Rpb25zKCl7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHZhciBkYXRhID0geyAndSc6IHRoaXMudXNlckluZm8udXNlcklkLCB0OiAnYnV5JyB9XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGEoZGF0YSwgJ3RyYW5zYWN0aW9ucy5waHAnKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICB0aGlzLnRyYW5zYWN0aW9ucyA9IHJlc3VsdDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmFuc2FjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gdGhpcy50cmFuc2FjdGlvbnNbaV07XG4gICAgICAgIGxldCB0ZGF0ZSA9IG5ldyBEYXRlKHRyYW5zYWN0aW9uLmRhdGVfY3JlYXRlZCk7XG5cbiAgICAgICAgbGV0IG5hbWUgPSAnJztcbiAgICAgICAgaWYodHJhbnNhY3Rpb24uaW5fbmFtZS5sZW5ndGggPCA3KXtcbiAgICAgICAgICBuYW1lID0gdHJhbnNhY3Rpb24uaW5fbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIG5hbWUgPSB0cmFuc2FjdGlvbi5pbl9uYW1lLnN1YnN0cigwLCA3KSArICcuLi4nXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByaWNlRml4ZWQgPSB0cmFuc2FjdGlvbi50cmFuc2FjdGlvbl90eXBlX2lkID09IDMgPyAoJyQnICsgcGFyc2VGbG9hdCh0cmFuc2FjdGlvbi5wcmljZSkudG9GaXhlZCgyKSkgOiAnKCQnICsgcGFyc2VGbG9hdCh0cmFuc2FjdGlvbi5wcmljZSkudG9GaXhlZCgyKSArICcpJztcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICBpZDogdHJhbnNhY3Rpb24uaWQsXG4gICAgICAgICAgdHlwZTogdHJhbnNhY3Rpb24udHJhbnNhY3Rpb25fdHlwZV9pZCA9PSAzID8gJ0QnIDogJ0MnLFxuICAgICAgICAgIHN0b3JlOiB0cmFuc2FjdGlvbi50cmFuc2FjdGlvbl90eXBlX2lkID09IDMgPyAnLS0tLS0tLScgOiBuYW1lLFxuICAgICAgICAgIHByaWNlOiBwcmljZUZpeGVkLFxuICAgICAgICAgIGRhdGU6IHRkYXRlLmdldERhdGUoKSArICctJyArICh0ZGF0ZS5nZXRNb250aCgpICsgMSkgKyAnICcgKyB0ZGF0ZS5nZXRIb3VycygpICsgJzonICsgdGRhdGUuZ2V0TWludXRlcygpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvd1BheU1vcmVCYWxhbmNlRm9ybSgpe1xuICAgIHRoaXMuc2hvd0Zvcm0gPSB0cnVlO1xuICB9XG5cbiAgYXR0ZW1wVG9QYXlNb3JlQmFsYW5jZSgpe1xuICAgIGxldCBsb2FkaW5nID0gdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgY29udGVudDogJ0VzcGVyZSB1biBtb21lbnRvLi4uJ1xuICAgIH0pO1xuICAgIGxvYWRpbmcucHJlc2VudCgpO1xuICAgIHRoaXMuc2hvd1BheW1lbnRSZXN1bHRUZXh0ID0gZmFsc2U7XG5cbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXkpLnRoZW4odmFsdWUgPT4ge1xuICAgICAgdGhpcy51c2VySW5mbyA9IHZhbHVlO1xuICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2EnLCBwYXJzZUZsb2F0KHRoaXMuYmFsYW5jZUZvcm0udmFsdWUuYW1vdW50KS50b0ZpeGVkKDIpKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgndScsIHRoaXMudXNlckluZm8udXNlcklkKTtcblxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnBvc3REYXRhKGZvcm1EYXRhLCAncGF5bW9yZWJhbGFuY2UucGhwJykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzdWx0O1xuICAgICAgICAgIHRoaXMuc2hvd1BheW1lbnRSZXN1bHRUZXh0ID0gdHJ1ZTtcblxuICAgICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICAgIGlmICh0aGlzLnJlc3BvbnNlRGF0YS5zdGF0dXMgPT0gXCJva1wiKSB7XG4gICAgICAgICAgICB2YXIgYmFsYW5jZVZhbCA9ICckJyArIHBhcnNlRmxvYXQodGhpcy5yZXNwb25zZURhdGEuYmFsYW5jZSkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIHRoaXMucGF5UmVzdWx0VGV4dCA9ICdTdSB0cmFuc2FjY2lvbiBzZSBoYSBoZWNobyBjb24gZXhpdG8uXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU3UgbnVldm8gc2FsZG8gZXMgJyArIGJhbGFuY2VWYWw7XG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKCdzZXRCYWxhbmNlJywgYmFsYW5jZVZhbCk7XG4gICAgICAgICAgICB0aGlzLmJhbGFuY2UgPSBiYWxhbmNlVmFsO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUcmFuc2FjdGlvbnMoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgdGhpcy5wYXlSZXN1bHRUZXh0ID0gdGhpcy5yZXNwb25zZURhdGEubXNnO1xuICAgICAgICAgIH1cbiAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICBsb2FkaW5nLmRpc21pc3MoKTtcbiAgICAgICAgICB0aGlzLnNob3dQYXltZW50UmVzdWx0VGV4dCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5wYXlSZXN1bHRUZXh0ID0gJ0hhIG9jdXJyaWRvIHVuIGVycm9yOiAnICsgZXJyLnN0YXR1cztcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvYWNjb3VudC9hY2NvdW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgQXBpU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2hlbHBlcic7XG5cbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgVHJhbnNhY3Rpb25zUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS10cmFuc2FjdGlvbnMnLFxuICB0ZW1wbGF0ZVVybDogJ3RyYW5zYWN0aW9ucy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb25zUGFnZSB7XG4gIHB1YmxpYyBpc0RldmljZU9ubGluZSA6IGJvb2xlYW47XG4gIHB1YmxpYyBiYWxhbmNlIDogc3RyaW5nO1xuICBwdWJsaWMgdHJhbnNhY3Rpb25zIDogYW55O1xuICBwdWJsaWMgdXNlckluZm86IGFueTtcbiAgcHVibGljIGl0ZW1zOiBBcnJheTx7aWQ6IG51bWJlciwgdXNlcjogc3RyaW5nLCBwcmljZTogc3RyaW5nLCBkYXRlOiBzdHJpbmd9PjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLCBwdWJsaWMgYXBpU2VydmljZSA6IEFwaVNlcnZpY2VQcm92aWRlciwgXG4gIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgbmV0d29yazogTmV0d29yaywgcHJpdmF0ZSBoZWxwZXI6IEhlbHBlclNlcnZpY2UpIHtcbiAgICBcbiAgICB0aGlzLmJhbGFuY2UgPSB0aGlzLmhlbHBlci5iYWxhbmNlO1xuICAgIFxuICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgZGlzY29ubmVjdFxuICAgIHRoaXMubmV0d29yay5vbkRpc2Nvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgIHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMudXNlckxvZ2dlZEluS2V5KS50aGVuKCh2YWx1ZSk9PntcbiAgICAgIHRoaXMudXNlckluZm8gPSB2YWx1ZTtcbiAgICAgIHZhciBkYXRhID0geyAndSc6IHRoaXMudXNlckluZm8udXNlcklkLCB0eXBlOiAnc2VsbCcgfVxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGEoZGF0YSwgJ3RyYW5zYWN0aW9ucy5waHAnKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zID0gcmVzdWx0O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJhbnNhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gdGhpcy50cmFuc2FjdGlvbnNbaV07XG4gICAgICAgICAgbGV0IHRkYXRlID0gbmV3IERhdGUodHJhbnNhY3Rpb24uZGF0ZV9jcmVhdGVkKTtcbiAgICAgICAgICBcbiAgICAgICAgICBsZXQgbmFtZSA9ICcnO1xuICAgICAgICAgIGlmKHRyYW5zYWN0aW9uLm91dF9uYW1lLmxlbmd0aCA8IDEwKXtcbiAgICAgICAgICAgIG5hbWUgPSB0cmFuc2FjdGlvbi5vdXRfbmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIG5hbWUgPSB0cmFuc2FjdGlvbi5vdXRfbmFtZS5zdWJzdHIoMCwgMTApICsgJy4uLidcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHByaWNlRml4ZWQgPSAnJCcgKyBwYXJzZUZsb2F0KHRyYW5zYWN0aW9uLnByaWNlKS50b0ZpeGVkKDIpO1xuICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICBpZDogdHJhbnNhY3Rpb24uaWQsXG4gICAgICAgICAgICB1c2VyOiBuYW1lLFxuICAgICAgICAgICAgcHJpY2U6IHByaWNlRml4ZWQsXG4gICAgICAgICAgICBkYXRlOiB0ZGF0ZS5nZXREYXRlKCkgKyAnLScgKyAodGRhdGUuZ2V0TW9udGgoKSArIDEpICsgJyAnICsgdGRhdGUuZ2V0SG91cnMoKSArICc6JyArIHRkYXRlLmdldE1pbnV0ZXMoKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy50cyIsImV4cG9ydCB2YXIgQ29uc3RhbnRzID0ge1xyXG4gICAgQVBJX0VORFBPSU5UIDogJ2h0dHBzOi8vd3d3LmVzZmVyYXNvbHVjaW9uZXMuY29tL2FwaS9wYXltZW50L2FwaS8nLFxyXG4gICAgTE9DQUxfQVBJX0VORFBPSU5UOiAnaHR0cDovL2xvY2FsaG9zdDo4MDk5LycsXHJcbiAgICB1c2VyTG9nZ2VkSW5LZXkgOiAndXNlckxvZ2dlZEluJyxcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9jb25zdGFudHMudHMiLCJpbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAubW9kdWxlJztcblxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tYWluLnRzIiwiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuXG4vKlxuICBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBBcGlTZXJ2aWNlUHJvdmlkZXIgcHJvdmlkZXIuXG5cbiAgU2VlIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9kZXBlbmRlbmN5LWluamVjdGlvbiBmb3IgbW9yZSBpbmZvIG9uIHByb3ZpZGVyc1xuICBhbmQgQW5ndWxhciBESS5cbiovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZVByb3ZpZGVyIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgcHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSkge1xuICAgIGNvbnNvbGUubG9nKCdIZWxsbyBBcGlTZXJ2aWNlUHJvdmlkZXIgUHJvdmlkZXInKTtcbiAgfVxuXG4gIHBvc3REYXRhKGRhdGEsIHVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgZW5kcG9pbnQgPSBDb25zdGFudHMuQVBJX0VORFBPSU5UO1xuICAgICAgaWYoIXRoaXMucGxhdGZvcm0uaXMoJ2NvcmRvdmEnKSl7XG4gICAgICAgIGVuZHBvaW50ID0gQ29uc3RhbnRzLkxPQ0FMX0FQSV9FTkRQT0lOVDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5odHRwLnBvc3QoZW5kcG9pbnQgKyB1cmwsIGRhdGEpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXREYXRhKGRhdGEsIHVybCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgdmFyIHN0ciA9IFtdO1xuICAgICAgZm9yICh2YXIgcCBpbiBkYXRhKXtcbiAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICBzdHIucHVzaChlbmNvZGVVUklDb21wb25lbnQocCkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW3BdKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGVuZHBvaW50ID0gQ29uc3RhbnRzLkFQSV9FTkRQT0lOVDtcbiAgICAgIGlmKCF0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpe1xuICAgICAgICBlbmRwb2ludCA9IENvbnN0YW50cy5MT0NBTF9BUElfRU5EUE9JTlQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaHR0cC5nZXQoZW5kcG9pbnQgKyB1cmwrJz8nK3N0ci5qb2luKFwiJlwiKSlcbiAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZS50cyIsImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEVycm9ySGFuZGxlciwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbmljU3RvcmFnZU1vZHVsZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IElvbmljQXBwLCBJb25pY0Vycm9ySGFuZGxlciwgSW9uaWNNb2R1bGUgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbi8vaW1wb3J0IHsgRmFjZWJvb2sgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZhY2Vib29rJztcbmltcG9ydCB7IFFSU2Nhbm5lciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvcXItc2Nhbm5lcic7XG5cbmltcG9ydCB7IFRvYXN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS90b2FzdCc7XG5cbmltcG9ydCB7IE15QXBwIH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi4vcGFnZXMvaG9tZS9ob21lJztcbmltcG9ydCB7IExpc3RQYWdlIH0gZnJvbSAnLi4vcGFnZXMvbGlzdC9saXN0JztcbmltcG9ydCB7IExvZ2luUGFnZSB9IGZyb20gJy4uL3BhZ2VzL2xvZ2luL2xvZ2luJztcbmltcG9ydCB7IFNpZ251cFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9zaWdudXAvc2lnbnVwJztcbmltcG9ydCB7IEZvcmdvdFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9mb3Jnb3QvZm9yZ290JztcbmltcG9ydCB7IEFjY291bnRQYWdlIH0gZnJvbSAnLi4vcGFnZXMvYWNjb3VudC9hY2NvdW50JztcbmltcG9ydCB7IFBheW1lbnRQYWdlIH0gZnJvbSAnLi4vcGFnZXMvcGF5bWVudC9wYXltZW50JztcbmltcG9ydCB7IFNjYW5uZXJQYWdlIH0gZnJvbSAnLi4vcGFnZXMvc2Nhbm5lci9zY2FubmVyJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uc1BhZ2UgfSBmcm9tICcuLi9wYWdlcy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zJztcblxuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zdGF0dXMtYmFyJztcbmltcG9ydCB7IFNwbGFzaFNjcmVlbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3BsYXNoLXNjcmVlbic7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2hlbHBlcic7XG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrJztcbmltcG9ydCB7IEFwaVNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4uL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmd4UVJDb2RlTW9kdWxlIH0gZnJvbSAnbmd4LXFyY29kZTInO1xuaW1wb3J0IHsgTkZDLCBOZGVmIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZmMnO1xuaW1wb3J0IHsgSW5BcHBQdXJjaGFzZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW4tYXBwLXB1cmNoYXNlJztcbi8vaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2JhcmNvZGUtc2Nhbm5lcic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE15QXBwLFxuICAgIEhvbWVQYWdlLFxuICAgIExpc3RQYWdlLFxuICAgIExvZ2luUGFnZSxcbiAgICBTaWdudXBQYWdlLFxuICAgIEZvcmdvdFBhZ2UsXG4gICAgQWNjb3VudFBhZ2UsXG4gICAgUGF5bWVudFBhZ2UsXG4gICAgU2Nhbm5lclBhZ2UsXG4gICAgVHJhbnNhY3Rpb25zUGFnZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBJb25pY01vZHVsZS5mb3JSb290KE15QXBwKSxcbiAgICBJb25pY1N0b3JhZ2VNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTmd4UVJDb2RlTW9kdWxlXG4gIF0sXG4gIGJvb3RzdHJhcDogW0lvbmljQXBwXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgTXlBcHAsXG4gICAgSG9tZVBhZ2UsXG4gICAgTGlzdFBhZ2UsXG4gICAgTG9naW5QYWdlLFxuICAgIFNpZ251cFBhZ2UsXG4gICAgRm9yZ290UGFnZSxcbiAgICBBY2NvdW50UGFnZSxcbiAgICBQYXltZW50UGFnZSxcbiAgICBTY2FubmVyUGFnZSxcbiAgICBUcmFuc2FjdGlvbnNQYWdlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFN0YXR1c0JhcixcbiAgICBTcGxhc2hTY3JlZW4sXG4gICAgSGVscGVyU2VydmljZSxcbiAgICBOZXR3b3JrLFxuICAgIC8vRmFjZWJvb2ssXG4gICAge3Byb3ZpZGU6IEVycm9ySGFuZGxlciwgdXNlQ2xhc3M6IElvbmljRXJyb3JIYW5kbGVyfSxcbiAgICBBcGlTZXJ2aWNlUHJvdmlkZXIsXG4gICAgUVJTY2FubmVyLFxuICAgIFRvYXN0LFxuICAgIE5GQyxcbiAgICBOZGVmLFxuICAgIEluQXBwUHVyY2hhc2VcbiAgICAvL0JhcmNvZGVTY2FubmVyXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5tb2R1bGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcblxyXG5leHBvcnQgY2xhc3MgSGVscGVyU2VydmljZSB7XHJcbiAgICBwdWJsaWMgYmFsYW5jZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdXNlcklkOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlKXtcclxuICAgICAgICB0aGlzLmJhbGFuY2UgPSAnLS0tLSc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QmFsYW5jZShhY3R1YWxCYWxhbmNlKXtcclxuICAgICAgICB0aGlzLmJhbGFuY2UgPSBhY3R1YWxCYWxhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFVzZXJJbmZvKGFjdHVhbFVzZXJOYW1lLCBhY3R1YWxVc2VySWQpe1xyXG4gICAgICAgIHRoaXMudXNlck5hbWUgPSBhY3R1YWxVc2VyTmFtZTtcclxuICAgICAgICB0aGlzLnVzZXJJZCA9IGFjdHVhbFVzZXJJZDtcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKXtcclxuICAgICAgICB0aGlzLmJhbGFuY2UgPSAnLS0tLSc7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMudXNlckxvZ2dlZEluS2V5LCBudWxsKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm92aWRlcnMvaGVscGVyLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdiwgUGxhdGZvcm0sIExvYWRpbmdDb250cm9sbGVyLCBFdmVudHMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3RhdHVzLWJhcic7XG5pbXBvcnQgeyBTcGxhc2hTY3JlZW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NwbGFzaC1zY3JlZW4nO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuLi9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy9oZWxwZXInO1xuXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4uL3BhZ2VzL2hvbWUvaG9tZSc7XG5pbXBvcnQgeyBBY2NvdW50UGFnZSB9IGZyb20gJy4uL3BhZ2VzL2FjY291bnQvYWNjb3VudCc7XG5pbXBvcnQgeyBMb2dpblBhZ2UgfSBmcm9tICcuLi9wYWdlcy9sb2dpbi9sb2dpbic7XG5pbXBvcnQgeyBTaWdudXBQYWdlIH0gZnJvbSAnLi4vcGFnZXMvc2lnbnVwL3NpZ251cCc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbnNQYWdlIH0gZnJvbSAnLi4vcGFnZXMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJ2FwcC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIE15QXBwIHtcbiAgQFZpZXdDaGlsZChOYXYpIG5hdjogTmF2O1xuXG4gIHJvb3RQYWdlOiBhbnkgPSBIb21lUGFnZTtcbiAgdXNlckluZm86IGFueTtcbiAgcmVzcG9uc2VEYXRhOmFueTtcblxuICBwYWdlczogQXJyYXk8e3RpdGxlOiBzdHJpbmcsIGNvbXBvbmVudDogYW55LCB0eXBlOiBzdHJpbmcsIGljb246IHN0cmluZ30+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0sIHB1YmxpYyBzdGF0dXNCYXI6IFN0YXR1c0JhciwgcHVibGljIHNwbGFzaFNjcmVlbjogU3BsYXNoU2NyZWVuLCBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsXG4gICAgcHVibGljIGFwaVNlcnZpY2UgOiBBcGlTZXJ2aWNlUHJvdmlkZXIsIHB1YmxpYyBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsIHB1YmxpYyBldmVudHMgOiBFdmVudHMsIHB1YmxpYyBoZWxwZXIgOiBIZWxwZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy5pbml0aWFsaXplQXBwKCk7XG5cbiAgICAvLyB1c2VkIGZvciBhbiBleGFtcGxlIG9mIG5nRm9yIGFuZCBuYXZpZ2F0aW9uXG4gICAgdGhpcy5wYWdlcyA9IFtcbiAgICAgIHsgdGl0bGU6ICdIb21lJywgY29tcG9uZW50OiBIb21lUGFnZSwgdHlwZTogJ3Jvb3QnLCBpY29uOiAnJyB9LFxuICAgICAgeyB0aXRsZTogJ01pIGN1ZW50YScsIGNvbXBvbmVudDogQWNjb3VudFBhZ2UsIHR5cGU6ICdwdXNoJywgaWNvbjogJycgfSxcbiAgICAgIHsgdGl0bGU6ICdNaXMgVmVudGFzJywgY29tcG9uZW50OiBUcmFuc2FjdGlvbnNQYWdlLCB0eXBlOiAncHVzaCcsIGljb246ICcnIH0sXG4gICAgICB7IHRpdGxlOiAnUGVyZmlsJywgY29tcG9uZW50OiBTaWdudXBQYWdlLCB0eXBlOiAncm9vdCcsIGljb246ICcnIH0sXG4gICAgICB7IHRpdGxlOiAnTG9nb3V0JywgY29tcG9uZW50OiBudWxsLCB0eXBlOiAnbG9nb3V0JywgaWNvbjogJ2xvZy1vdXQnIH1cbiAgICBdO1xuICAgIHBsYXRmb3JtLnJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnVzZXJMb2dnZWRJbktleSkudGhlbigodmFsdWUpPT57XG4gICAgICAgICAgaWYodmFsdWUgPT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLm5hdi5zZXRSb290KExvZ2luUGFnZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBsZXQgbG9hZGluZyA9IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgICAgICAgICAgY29udGVudDogJ0VzcGVyZSB1biBtb21lbnRvLi4uJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsb2FkaW5nLnByZXNlbnQoKTtcbiAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSB2YWx1ZTtcbiAgICAgICAgICAgIHZhciBkYXRhID0geyAnaWQnOiB0aGlzLnVzZXJJbmZvLnVzZXJJZCwgJ3R5cGUnOiAndXNlcicgfVxuICAgICAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGEoZGF0YSwgJ3VzZXJzLnBocCcpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzdWx0O1xuICAgICAgICAgICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKFwic2V0QmFsYW5jZVwiLCAnJCcgKyB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLmFtb3VudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgdGhpcy5uYXYuc2V0Um9vdChMb2dpblBhZ2UpO1xuICAgICAgICB9KTs7XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXplQXBwKCkge1xuICAgIHRoaXMucGxhdGZvcm0ucmVhZHkoKS50aGVuKCgpID0+IHtcbiAgICAgIC8vIE9rYXksIHNvIHRoZSBwbGF0Zm9ybSBpcyByZWFkeSBhbmQgb3VyIHBsdWdpbnMgYXJlIGF2YWlsYWJsZS5cbiAgICAgIC8vIEhlcmUgeW91IGNhbiBkbyBhbnkgaGlnaGVyIGxldmVsIG5hdGl2ZSB0aGluZ3MgeW91IG1pZ2h0IG5lZWQuXG4gICAgICB0aGlzLnN0YXR1c0Jhci5zdHlsZURlZmF1bHQoKTtcbiAgICAgIHRoaXMuc3BsYXNoU2NyZWVuLmhpZGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5QYWdlKHBhZ2UpIHtcbiAgICAvLyBSZXNldCB0aGUgY29udGVudCBuYXYgdG8gaGF2ZSBqdXN0IHRoaXMgcGFnZVxuICAgIC8vIHdlIHdvdWxkbid0IHdhbnQgdGhlIGJhY2sgYnV0dG9uIHRvIHNob3cgaW4gdGhpcyBzY2VuYXJpb1xuICAgIGlmKHBhZ2UudHlwZSA9PSAnbG9nb3V0JylcbiAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goJ2xvZ291dCcpO1xuICAgIGVsc2UgaWYocGFnZS50eXBlID09ICdyb290JylcbiAgICAgIHRoaXMubmF2LnNldFJvb3QocGFnZS5jb21wb25lbnQpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMubmF2LnB1c2gocGFnZS5jb21wb25lbnQpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJ2xpc3QuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFBhZ2Uge1xuICBzZWxlY3RlZEl0ZW06IGFueTtcbiAgaWNvbnM6IHN0cmluZ1tdO1xuICBpdGVtczogQXJyYXk8e3RpdGxlOiBzdHJpbmcsIG5vdGU6IHN0cmluZywgaWNvbjogc3RyaW5nfT47XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcykge1xuICAgIC8vIElmIHdlIG5hdmlnYXRlZCB0byB0aGlzIHBhZ2UsIHdlIHdpbGwgaGF2ZSBhbiBpdGVtIGF2YWlsYWJsZSBhcyBhIG5hdiBwYXJhbVxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbmF2UGFyYW1zLmdldCgnaXRlbScpO1xuXG4gICAgLy8gTGV0J3MgcG9wdWxhdGUgdGhpcyBwYWdlIHdpdGggc29tZSBmaWxsZXIgY29udGVudCBmb3IgZnVuemllc1xuICAgIHRoaXMuaWNvbnMgPSBbJ2ZsYXNrJywgJ3dpZmknLCAnYmVlcicsICdmb290YmFsbCcsICdiYXNrZXRiYWxsJywgJ3BhcGVyLXBsYW5lJyxcbiAgICAnYW1lcmljYW4tZm9vdGJhbGwnLCAnYm9hdCcsICdibHVldG9vdGgnLCAnYnVpbGQnXTtcblxuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDExOyBpKyspIHtcbiAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgIHRpdGxlOiAnSXRlbSAnICsgaSxcbiAgICAgICAgbm90ZTogJ1RoaXMgaXMgaXRlbSAjJyArIGksXG4gICAgICAgIGljb246IHRoaXMuaWNvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5pY29ucy5sZW5ndGgpXVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaXRlbVRhcHBlZChldmVudCwgaXRlbSkge1xuICAgIC8vIFRoYXQncyByaWdodCwgd2UncmUgcHVzaGluZyB0byBvdXJzZWx2ZXMhXG4gICAgdGhpcy5uYXZDdHJsLnB1c2goTGlzdFBhZ2UsIHtcbiAgICAgIGl0ZW06IGl0ZW1cbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL2xpc3QvbGlzdC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBFdmVudHMsIExvYWRpbmdDb250cm9sbGVyIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvaGVscGVyJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcblxuaW1wb3J0IHsgTG9naW5QYWdlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4nO1xuaW1wb3J0IHsgU2Nhbm5lclBhZ2UgfSBmcm9tICcuLi9zY2FubmVyL3NjYW5uZXInO1xuLy9pbXBvcnQgeyBQYXltZW50UGFnZSB9IGZyb20gJy4uL3BheW1lbnQvcGF5bWVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnaG9tZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBIb21lUGFnZSB7XG4gIHB1YmxpYyBpc0RldmljZU9ubGluZSA6IGJvb2xlYW47XG4gIHB1YmxpYyBiYWxhbmNlIDogc3RyaW5nO1xuICBwdWJsaWMgc2hvd1FSQ29kZSA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGNyZWF0ZWRDb2RlOiBhbnk7XG4gIHB1YmxpYyB1c2VySW5mbzogYW55O1xuICByZXNwb25zZURhdGE6YW55O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmssIHB1YmxpYyBldmVudHMgOiBFdmVudHMsIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSwgcHVibGljIGFwaVNlcnZpY2UgOiBBcGlTZXJ2aWNlUHJvdmlkZXIsIHB1YmxpYyBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsIHB1YmxpYyBoZWxwZXIgOiBIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICB0aGlzLmJhbGFuY2UgPSB0aGlzLmhlbHBlci5iYWxhbmNlO1xuICAgICAgZXZlbnRzLnN1YnNjcmliZSgnc2V0QmFsYW5jZScsIGFjdHVhbEJhbGFuY2UgPT4ge1xuICAgICAgICB0aGlzLmJhbGFuY2UgPSBhY3R1YWxCYWxhbmNlO1xuICAgICAgICB0aGlzLmhlbHBlci5zZXRCYWxhbmNlKGFjdHVhbEJhbGFuY2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZXZlbnRzLnN1YnNjcmliZSgnbG9nb3V0JywoKSA9PiB7XG4gICAgICAgICAgLy9jYWxsIG1ldGhvZCB0byByZWZyZXNoIGNvbnRlbnRcbiAgICAgICAgICB0aGlzLmxvZ291dCgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBkaXNjb25uZWN0XG4gICAgICB0aGlzLm5ldHdvcmsub25EaXNjb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBjb25uZWN0aW9uXG4gICAgICB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXkpLnRoZW4oKHZhbHVlKT0+e1xuICAgICAgaWYodmFsdWUgIT0gbnVsbCl7XG4gICAgICAgIHRoaXMudXNlckluZm8gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5zaG93UVJDb2RlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jcmVhdGVkQ29kZSA9IFwie1xcXCJzdG9yZVxcXCI6XFxcIlwiICsgdGhpcy51c2VySW5mby51c2VyTmFtZSArIFwiXFxcIixcXFwic3RvcmVJZFxcXCI6XFxcIlwiICsgdGhpcy51c2VySW5mby51c2VySWQgKyBcIlxcXCJ9XCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgbG9nb3V0KCl7XG4gICAgdGhpcy5oZWxwZXIubG9nb3V0KCk7XG4gICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoTG9naW5QYWdlKTtcbiAgfVxuXG4gIHJlZnJlc2hCYWxhbmNlKCl7XG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMudXNlckxvZ2dlZEluS2V5KS50aGVuKCh2YWx1ZSk9PntcbiAgICAgIGlmKHZhbHVlID09IG51bGwpe1xuICAgICAgICB0aGlzLm5hdkN0cmwuc2V0Um9vdChMb2dpblBhZ2UpO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgbGV0IGxvYWRpbmcgPSB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZSh7XG4gICAgICAgICAgY29udGVudDogJ0VzcGVyZSB1biBtb21lbnRvLi4uJ1xuICAgICAgICB9KTtcbiAgICAgICAgbG9hZGluZy5wcmVzZW50KCk7XG4gICAgICAgIHRoaXMudXNlckluZm8gPSB2YWx1ZTtcbiAgICAgICAgdmFyIGRhdGEgPSB7ICdpZCc6IHRoaXMudXNlckluZm8udXNlcklkLCAndHlwZSc6ICd1c2VyJyB9XG4gICAgICAgIHRoaXMuYXBpU2VydmljZS5nZXREYXRhKGRhdGEsICd1c2Vycy5waHAnKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXN1bHQ7XG4gICAgICAgICAgdGhpcy5ldmVudHMucHVibGlzaChcInNldEJhbGFuY2VcIiwgJyQnICsgcGFyc2VGbG9hdCh0aGlzLnJlc3BvbnNlRGF0YS51c2VyLmFtb3VudCkudG9GaXhlZCgyKSk7XG4gICAgICAgIH0sIGVyciA9PiB7XG4gICAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRoaXMubmF2Q3RybC5zZXRSb290KExvZ2luUGFnZSk7XG4gICAgfSk7XG4gIH1cblxuICB0YWtlUGF5bWVudCgpe1xuICAgIC8qdGhpcy5oZWxwZXIuc3RvcmVOYW1lID0gJ0NlcnZlY2VyaWEgQXJ0ZXNhbmFsIFMuQS4nO1xuICAgIHRoaXMuaGVscGVyLnN0b3JlSWQgPSAyO1xuICAgIHRoaXMubmF2Q3RybC5wdXNoKFBheW1lbnRQYWdlKTsqL1xuICAgIHRoaXMubmF2Q3RybC5wdXNoKFNjYW5uZXJQYWdlKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL2hvbWUvaG9tZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMsIEV2ZW50cywgTG9hZGluZ0NvbnRyb2xsZXIgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xuLy9pbXBvcnQgeyBGYWNlYm9vayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmFjZWJvb2snO1xuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcblxuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuLi9ob21lL2hvbWUnO1xuaW1wb3J0IHsgU2lnbnVwUGFnZSB9IGZyb20gJy4uL3NpZ251cC9zaWdudXAnO1xuaW1wb3J0IHsgRm9yZ290UGFnZSB9IGZyb20gJy4uL2ZvcmdvdC9mb3Jnb3QnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIExvZ2luUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnbG9naW4uaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luUGFnZSB7XG4gIHByaXZhdGUgbG9naW4gOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBpc0RldmljZU9ubGluZSA6IGJvb2xlYW47XG4gIHB1YmxpYyBzaG93TG9naW5GYWlsVGV4dCA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHVzZXJJbmZvIDogYW55ID0ge307XG4gIHB1YmxpYyByZXNwb25zZURhdGEgOiBhbnk7XG4gIHB1YmxpYyBsb2dpbkZhaWxUZXh0IDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JrLCBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICAvKnByaXZhdGUgZmI6IEZhY2Vib29rLCovIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgZXZlbnRzIDogRXZlbnRzLCBwdWJsaWMgYXBpU2VydmljZSA6IEFwaVNlcnZpY2VQcm92aWRlciwgcHVibGljIGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlcikge1xuICAgIHRoaXMubG9naW4gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgcHdkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIH0pO1xuICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuXG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBkaXNjb25uZWN0XG4gICAgdGhpcy5uZXR3b3JrLm9uRGlzY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBjb25uZWN0aW9uXG4gICAgdGhpcy5uZXR3b3JrLm9uQ29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCdpb25WaWV3RGlkTG9hZCBMb2dpblBhZ2UnKTtcbiAgfVxuXG4gIHNpZ251cFBhZ2UoKXsgdGhpcy5uYXZDdHJsLnNldFJvb3QoU2lnbnVwUGFnZSk7IH1cbiAgZm9yZ290UGFzc3dvcmRQYWdlKCl7IHRoaXMubmF2Q3RybC5zZXRSb290KEZvcmdvdFBhZ2UpOyB9XG5cbiAgYXR0ZW1wdFVzZXJMb2dpbigpe1xuICAgIGxldCBsb2FkaW5nID0gdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgY29udGVudDogJ0VzcGVyZSB1biBtb21lbnRvLi4uJ1xuICAgIH0pO1xuICAgIGxvYWRpbmcucHJlc2VudCgpO1xuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgndScsIHRoaXMubG9naW4udmFsdWUuZW1haWwpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgncCcsIHRoaXMubG9naW4udmFsdWUucHdkKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3QnLCAnMScpO1xuICAgIHRoaXMuYXBpU2VydmljZS5wb3N0RGF0YShmb3JtRGF0YSwgJ2FjY2Vzcy5waHAnKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3VsdDtcbiAgICAgICAgaWYgKHRoaXMucmVzcG9uc2VEYXRhLnN0YXR1cyA9PSBcIm9rXCIpIHtcbiAgICAgICAgICBsZXQgdXNlckFycmF5ID0ge1xuICAgICAgICAgICAgdXNlcklkOiB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLmlkLFxuICAgICAgICAgICAgdXNlckVtYWlsOiB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLmVtYWlsLFxuICAgICAgICAgICAgdXNlck5hbWU6IHRoaXMucmVzcG9uc2VEYXRhLnVzZXIubmFtZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXksIHVzZXJBcnJheSk7XG4gICAgICAgICAgdGhpcy5zaG93TG9naW5GYWlsVGV4dCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goJ3NldEJhbGFuY2UnLCAnJCcgKyBwYXJzZUZsb2F0KHRoaXMucmVzcG9uc2VEYXRhLnVzZXIuYW1vdW50KS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICB0aGlzLm5hdkN0cmwuc2V0Um9vdChIb21lUGFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5zaG93TG9naW5GYWlsVGV4dCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5sb2dpbkZhaWxUZXh0ID0gKHRoaXMucmVzcG9uc2VEYXRhLm1zZyA9PSAnbm8gcGFzc3dvcmQnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udHJhc2XDsWEgaW5jb3JyZWN0YScgOiAodGhpcy5yZXNwb25zZURhdGEubXNnID09ICdubyB1c2VyJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0VzdGUgdXN1YXJpbyBubyBleGlzdGUnIDogKHRoaXMucmVzcG9uc2VEYXRhLm1zZyA9PSAnbm8gcGxhdGZvcm0nID8gJ1BsYXRhZm9ybWEgaW5jb3JyZWN0YScgOiAnRXJyb3IgZGVzY29ub2NpZG8nKSkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9sb2dpbi9sb2dpbi50cyIsImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMsIExvYWRpbmdDb250cm9sbGVyLCBFdmVudHMsIFBsYXRmb3JtIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrJztcbmltcG9ydCB7IFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2hlbHBlcic7XG5pbXBvcnQgeyBORkMsIE5kZWYgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25mYyc7XG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdG9hc3QnO1xuXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4uL2hvbWUvaG9tZSc7XG5pbXBvcnQgeyBMb2dpblBhZ2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbic7XG5pbXBvcnQgeyBGb3Jnb3RQYWdlIH0gZnJvbSAnLi4vZm9yZ290L2ZvcmdvdCc7XG5cbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgU2lnbnVwUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1zaWdudXAnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZ251cC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwUGFnZSB7XG4gIHB1YmxpYyBpc0RldmljZU9ubGluZSA6IGJvb2xlYW47XG4gIHByaXZhdGUgcmVnaXN0ZXIgOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyByZXNwb25zZURhdGEgOiBhbnk7XG4gIHB1YmxpYyBzaG93RHVwbGljYXRlVGV4dDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgbmFtZVZhbHVlIDogc3RyaW5nO1xuICBwdWJsaWMgZW1haWxWYWx1ZSA6IHN0cmluZztcbiAgcHVibGljIGlzVXNlckxvZ2dlZEluIDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgdXNlckluZm86IGFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsIHByaXZhdGUgbmV0d29yazogTmV0d29yaywgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgcHVibGljIGFwaVNlcnZpY2UgOiBBcGlTZXJ2aWNlUHJvdmlkZXIsIHByaXZhdGUgbmZjOiBORkMsIHByaXZhdGUgbmRlZjogTmRlZiwgcHVibGljIGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlciwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHVibGljIGhlbHBlcjogSGVscGVyU2VydmljZSwgcHVibGljIGV2ZW50czogRXZlbnRzLCBwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLCBwcml2YXRlIHRvYXN0OiBUb2FzdCkge1xuICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgZGlzY29ubmVjdFxuICAgIHRoaXMubmV0d29yay5vbkRpc2Nvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgIHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICBuYW1lOiBbJyddLFxuICAgICAgICBwd2Q6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV0pXSxcbiAgICAgICAgZ3JvdXAgOiBbJyddXG4gICAgfSk7XG4gICAgdmFyICR2aWV3ID0gdGhpcztcbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXkpLnRoZW4odmFsdWUgPT4ge1xuICAgICAgaWYodmFsdWUgIT0gbnVsbCl7XG4gICAgICAgIHRoaXMuaXNVc2VyTG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnVzZXJJbmZvID0gdmFsdWU7XG4gICAgICAgIGxldCBsb2FkaW5nID0gdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgICAgICAgY29udGVudDogJ0VzcGVyZSB1biBtb21lbnRvLi4uJ1xuICAgICAgICB9KTtcbiAgICAgICAgbG9hZGluZy5wcmVzZW50KCk7XG4gICAgICAgICR2aWV3LnJlZ2lzdGVyID0gJHZpZXcuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBuYW1lOiBbJyddLFxuICAgICAgICAgICAgcHdkOiBbJycsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSxcbiAgICAgICAgICAgIGdyb3VwIDogWycnXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVzZXJJbmZvID0gdmFsdWU7XG4gICAgICAgIHRoaXMuYXBpU2VydmljZS5nZXREYXRhKHsgJ2lkJzogdGhpcy51c2VySW5mby51c2VySWQsICd0eXBlJzogJ3VzZXInIH0sICd1c2Vycy5waHAnKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXN1bHQ7XG4gICAgICAgICAgdGhpcy5uYW1lVmFsdWUgPSB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLm5hbWU7XG4gICAgICAgICAgdGhpcy5lbWFpbFZhbHVlID0gdGhpcy5yZXNwb25zZURhdGEudXNlci5lbWFpbDtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCdpb25WaWV3RGlkTG9hZCBTaWdudXBQYWdlJyk7XG4gIH1cblxuICBsb2dvdXQoKXtcbiAgICAgIHRoaXMuaGVscGVyLmxvZ291dCgpO1xuICAgICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoTG9naW5QYWdlKTtcbiAgfVxuXG4gIGNhbmNlbCgpe1xuICAgICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoSG9tZVBhZ2UpO1xuICB9XG5cbiAgbG9naW5QYWdlKCl7IHRoaXMubmF2Q3RybC5zZXRSb290KExvZ2luUGFnZSk7IH1cbiAgZm9yZ290UGFzc3dvcmRQYWdlKCl7IHRoaXMubmF2Q3RybC5zZXRSb290KEZvcmdvdFBhZ2UpOyB9XG5cbiAgbGlua1RhZygpe1xuICAgIHRoaXMubmZjLmFkZE5kZWZMaXN0ZW5lcigoKSA9PiB7XG4gICAgICBpZih0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpe1xuICAgICAgICB0aGlzLnRvYXN0LnNob3coJ3N1Y2Nlc3NmdWxseSBhdHRhY2hlZCBuZGVmIGxpc3RlbmVyJywgJzUwMDAnLCAnY2VudGVyJyk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBhbGVydCgnc3VjY2Vzc2Z1bGx5IGF0dGFjaGVkIG5kZWYgbGlzdGVuZXInKTtcbiAgICAgIH1cbiAgICB9LCAoZXJyKSA9PiB7XG4gICAgICBpZih0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpe1xuICAgICAgICB0aGlzLnRvYXN0LnNob3coJ2Vycm9yIGF0dGFjaGluZyBuZGVmIGxpc3RlbmVyJyArIGVyciwgJzUwMDAnLCAnY2VudGVyJyk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBhbGVydCgnZXJyb3IgYXR0YWNoaW5nIG5kZWYgbGlzdGVuZXInICsgZXJyKTtcbiAgICAgIH1cbiAgICB9KS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICBpZih0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpe1xuICAgICAgICB0aGlzLnRvYXN0LnNob3coJ3JlY2VpdmVkIG5kZWYgbWVzc2FnZS4gdGhlIHRhZyBjb250YWluczogJyArIGV2ZW50LnRhZywgJzUwMDAnLCAnY2VudGVyJyk7XG4gICAgICAgIHRoaXMudG9hc3Quc2hvdygnZGVjb2RlZCB0YWcgaWQnICsgdGhpcy5uZmMuYnl0ZXNUb0hleFN0cmluZyhldmVudC50YWcuaWQpLCAnNTAwMCcsICdjZW50ZXInKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGFsZXJ0KCdyZWNlaXZlZCBuZGVmIG1lc3NhZ2UuIHRoZSB0YWcgY29udGFpbnM6ICcgKyBldmVudC50YWcpO1xuICAgICAgICBhbGVydCgnZGVjb2RlZCB0YWcgaWQnICsgdGhpcy5uZmMuYnl0ZXNUb0hleFN0cmluZyhldmVudC50YWcuaWQpKTtcbiAgICAgIH1cblxuICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzLm5kZWYudGV4dFJlY29yZCh0aGlzLnVzZXJJbmZvLnVzZXJFbWFpbCk7XG4gICAgICB0aGlzLm5mYy5zaGFyZShbbWVzc2FnZV0pLnRoZW4oc3VjY2VzcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGF0dGVtcHRVc2VyUmVnaXN0ZXIoKXtcbiAgICB0aGlzLnNob3dEdXBsaWNhdGVUZXh0ID0gZmFsc2U7XG4gICAgbGV0IGxvYWRpbmcgPSB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZSh7XG4gICAgICAgIGNvbnRlbnQ6ICdFc3BlcmUgdW4gbW9tZW50by4uLidcbiAgICB9KTtcbiAgICBsb2FkaW5nLnByZXNlbnQoKTtcblxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnVzZXJMb2dnZWRJbktleSkudGhlbih2YWx1ZSA9PiB7XG4gICAgICB0aGlzLnVzZXJJbmZvID0gdmFsdWU7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VzZXJJZCcsIHRoaXMudXNlckluZm8udXNlcklkICk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ25hbWUnLCB0aGlzLnJlZ2lzdGVyLnZhbHVlLm5hbWUpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCdlbWFpbCcsIHRoaXMucmVnaXN0ZXIudmFsdWUuZW1haWwpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCd1c2VyX3R5cGVfaWQnLCAnMScpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCd1aWQnLCcxMjM0NTY3ODkwJyk7XG4gICAgICBpZih2YWx1ZSAhPSBudWxsKXtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0eXBlJywgJ3NhdmUnKTtcbiAgICAgICAgaWYodGhpcy5yZWdpc3Rlci52YWx1ZS5wd2QpXG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwYXNzd29yZCcsIHRoaXMucmVnaXN0ZXIudmFsdWUucHdkKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndHlwZScsICduZXcnKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwYXNzd29yZCcsIHRoaXMucmVnaXN0ZXIudmFsdWUucHdkKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnBvc3REYXRhKGZvcm1EYXRhLCAndXNlcnMucGhwJykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBsb2FkaW5nLmRpc21pc3MoKTtcbiAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXN1bHQ7XG4gICAgICAgIGlmICh0aGlzLnJlc3BvbnNlRGF0YS5zdGF0dXMgPT0gXCJva1wiKSB7XG4gICAgICAgICAgbGV0IHVzZXJBcnJheSA9IHtcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy5yZXNwb25zZURhdGEuaWQsXG4gICAgICAgICAgICB1c2VyTmFtZTogdGhpcy5yZXNwb25zZURhdGEudXNlci5uYW1lLFxuICAgICAgICAgICAgdXNlckVtYWlsOiB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLmVtYWlsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoQ29uc3RhbnRzLnVzZXJMb2dnZWRJbktleSwgdXNlckFycmF5KTtcbiAgICAgICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKCdzZXRCYWxhbmNlJywgJyQnICsgcGFyc2VGbG9hdCh0aGlzLnJlc3BvbnNlRGF0YS51c2VyLmFtb3VudCkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoSG9tZVBhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5yZXNwb25zZURhdGEubXNnID09IFwiZHVwbGljYXRlXCIpe1xuICAgICAgICAgIHRoaXMuc2hvd0R1cGxpY2F0ZVRleHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3NpZ251cC9zaWdudXAudHMiXSwic291cmNlUm9vdCI6IiJ9