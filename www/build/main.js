webpackJsonp([0],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */]) === "function" && _b || Object])
    ], ApiServiceProvider);
    return ApiServiceProvider;
    var _a, _b;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
    LoginPage.prototype.fbLogin = function () {
        /*this.fb.login(['public_profile', 'email'])
          .then(res => {
            this.fb.api('me/?fields=id,email,first_name', ['public_profile', 'email']).then(apiRes => {
              this.userInfo = apiRes;
              this.isDeviceOnline = true;
              alert('Logged into Facebook!')
            }).catch(e => alert('Error api into Facebook'));
        }).catch(e => alert('Error logging into Facebook'  + e));*/
    };
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
                    userName: _this.responseData.user.name,
                    userType: _this.responseData.user.user_type_id
                };
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].userLoggedInKey, userArray);
                _this.showLoginFailText = false;
                _this.events.publish('setBalance', '$' + parseFloat(_this.responseData.user.amount).toFixed(2));
                _this.events.publish('setMenuItems', _this.responseData.user.user_type_id == 2 ? 'user' : 'store');
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
            selector: 'page-login',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\store\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n\n</ion-header>\n\n\n<ion-content padding class="masters">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col ><button ion-button block class="facebookButton" (click)="fbLogin();">Login With Facebook</button></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col><button ion-button block class="instagramButton">Login With Instagram</button></ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class="hrLine"><span>Or</span></div>\n\n    <form [formGroup]="login" (ngSubmit)="attemptUserLogin()">\n      <ion-list no-lines padding-top>\n        <ion-item>\n          <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="password" placeholder="Password" formControlName="pwd"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button ion-button block round color="secondary" type="submit" [disabled]="!login.valid">Login</button>\n      <label class="error" *ngIf="showLoginFailText">{{ loginFailText }} </label>\n    </form>\n\n    <div padding-top>\n    <button ion-button block color="light" clear (click)="signupPage();">If new member ? SIGNUP</button>\n    <button ion-button block color="light" clear (click)="forgotPasswordPage();">Forgot Password</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\store\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_service__["a" /* ApiServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_service__["a" /* ApiServiceProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _j || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
                if (value.userType == 2)
                    _this.showLinkTagButton = true;
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
            formData.append('user_type_id', '2');
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
                        userEmail: _this.responseData.user.email,
                        userType: _this.responseData.user.user_type_id
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
            selector: 'page-signup',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\store\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n        <ion-buttons end *ngIf="isUserLoggedIn">\n          <button id="logout" (click)="logout()">\n            Logout\n          </button>\n        </ion-buttons>\n  </ion-navbar>\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n\n</ion-header>\n\n\n<ion-content padding class="masters">\n\n    <ion-grid>\n      <ion-row *ngIf="!isUserLoggedIn">\n        <ion-col><button ion-button block class="facebookButton"> Facebook</button></ion-col>\n        <ion-col><button ion-button block class="instagramButton"> Instagram</button></ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button block *ngIf="showLinkTagButton" (click)="linkTag()">Enlazar Tag</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class="hrLine" *ngIf="!isUserLoggedIn"><span>Or</span></div>\n    <form [formGroup]="register" (ngSubmit)="attemptUserRegister()">\n      <ion-list no-lines padding-top>\n        <ion-item>\n          <ion-input type="text" placeholder="Nombre" value="{{ nameValue }}" formControlName="name"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="email" placeholder="Email" value="{{ emailValue }}" formControlName="email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="password" placeholder="Password" formControlName="pwd"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button ion-button block round color="secondary" type="submit" [disabled]="!register.valid" *ngIf="!isUserLoggedIn">Signup</button>\n      <button ion-button block round color="secondary" type="submit" [disabled]="!register.valid" *ngIf="isUserLoggedIn">Guardar</button>\n      <label class="error" *ngIf="showDuplicateText">Este correo ya existe, intente otro</label>\n      <ion-row><a center ion-link color="primary" (click)="cancel();" *ngIf="isUserLoggedIn">Cancel</a></ion-row>\n    </form>\n    <div padding *ngIf="!isUserLoggedIn">\n      <button ion-button block color="light" clear (click)="loginPage();">If already have an account ? LOGIN</button>\n      <button ion-button block color="light" clear (click)="forgotPasswordPage();">Forgot Password</button>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\store\src\pages\signup\signup.html"*/,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9mb3Jnb3QvZm9yZ290LnRzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvZXNtNSBsYXp5IiwiLi4vLi4vc3JjIGxhenkiLCIuLi8uLi9zcmMvcGFnZXMvc2Nhbm5lci9zY2FubmVyLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL3BheW1lbnQvcGF5bWVudC50cyIsIi4uLy4uL3NyYy9wYWdlcy9hY2NvdW50L2FjY291bnQudHMiLCIuLi8uLi9zcmMvcGFnZXMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy50cyIsIi4uLy4uL3NyYy9zZXJ2aWNlcy9jb25zdGFudHMudHMiLCIuLi8uLi9zcmMvYXBwL21haW4udHMiLCIuLi8uLi9zcmMvcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlLnRzIiwiLi4vLi4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwiLi4vLi4vc3JjL3Byb3ZpZGVycy9oZWxwZXIudHMiLCIuLi8uLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCIuLi8uLi9zcmMvcGFnZXMvbGlzdC9saXN0LnRzIiwiLi4vLi4vc3JjL3BhZ2VzL2hvbWUvaG9tZS50cyIsIi4uLy4uL3NyYy9wYWdlcy9sb2dpbi9sb2dpbi50cyIsIi4uLy4uL3NyYy9wYWdlcy9zaWdudXAvc2lnbnVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQzBCO0FBQzVCO0FBQ29CO0FBQ1M7QUFFbEM7QUFDRztBQUU5Qzs7Ozs7R0FLRztBQU1IO0lBUUUsb0JBQW1CLE9BQXNCLEVBQVMsV0FBOEIsRUFBUyxTQUFvQixFQUFVLE9BQWdCLEVBQVUsSUFBWSxFQUNwSixVQUErQixFQUFVLFdBQXdCO1FBRDFFLGlCQWtCQztRQWxCa0IsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxZ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LEVBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUM7b0JBQzVDLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7Z0JBQ2hDLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxhQUFHO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFoS1UsVUFBVTtRQUp0Qix3RUFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7V0FDRztTQUMzQixDQUFDOzJPQVk0QiwwRUFBZ0MscUVBQTJCLENBQXlEO1lBQzFILHVJQUFpQyxFQUFHLCtEQUEwQyxzRUFBbUQ7WUFDdEksT0FBcUY7T0FiM0YsVUFBVSxDQWlLdEI7SUFBRCxDQUFDO0FBQUE7U0FqS1ksVUFBVSxlIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zLCBMb2FkaW5nQ29udHJvbGxlciB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXBpU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcblxuaW1wb3J0IHsgTG9naW5QYWdlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4nO1xuaW1wb3J0IHsgU2lnbnVwUGFnZSB9IGZyb20gJy4uL3NpZ251cC9zaWdudXAnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIEZvcmdvdFBhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtZm9yZ290JyxcbiAgdGVtcGxhdGVVcmw6ICdmb3Jnb3QuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEZvcmdvdFBhZ2Uge1xuICBwcml2YXRlIGZvcmdvdCA6IEZvcm1Hcm91cDtcbiAgcHVibGljIGlzRGV2aWNlT25saW5lIDogYm9vbGVhbjtcbiAgcHVibGljIHNob3dGb3Jnb3RGYWlsVGV4dCA6IGJvb2xlYW47XG4gIHB1YmxpYyBmb3Jnb3RGYWlsVGV4dCA6IHN0cmluZztcbiAgcHVibGljIHJlc3BvbnNlRGF0YSA6IGFueTtcbiAgcHVibGljIHNob3dTZW50IDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHVibGljIGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlciwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmssIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHB1YmxpYyBhcGlTZXJ2aWNlIDogQXBpU2VydmljZVByb3ZpZGVyLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICAgIHRoaXMuZm9yZ290ID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgZGlzY29ubmVjdFxuICAgIHRoaXMubmV0d29yay5vbkRpc2Nvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgIHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygnaW9uVmlld0RpZExvYWQgRm9yZ290UGFnZScpO1xuICB9XG5cbiAgYXR0ZW1wdFVzZXJGb3Jnb3QoKSB7XG4gICAgbGV0IGxvYWRpbmcgPSB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZSh7XG4gICAgICBjb250ZW50OiAnRXNwZXJlIHVuIG1vbWVudG8uLi4nXG4gICAgfSk7XG4gICAgbG9hZGluZy5wcmVzZW50KCk7XG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdlJywgdGhpcy5mb3Jnb3QudmFsdWUuZW1haWwpO1xuICAgIHRoaXMuYXBpU2VydmljZS5wb3N0RGF0YShmb3JtRGF0YSwnc2VuZF9tYWlsLnBocCcpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBsb2FkaW5nLmRpc21pc3MoKTtcbiAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXN1bHQ7XG4gICAgICAgIGlmKHRoaXMucmVzcG9uc2VEYXRhLnN0YXR1cyA9PSAnb2snKXtcbiAgICAgICAgICB0aGlzLnNob3dTZW50ID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnNob3dGb3Jnb3RGYWlsVGV4dCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2hvd0ZvcmdvdEZhaWxUZXh0ID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmZvcmdvdEZhaWxUZXh0ID0gdGhpcy5yZXNwb25zZURhdGEubXNnID09ICdubyB1c2VyJyA/ICdVc3VhcmlvIG5vIGV4aXN0ZScgOiAnRXJyb3IgZGVzY29ub2NpZG8nO1xuICAgICAgICB9XG4gICAgfSwgKGVycikgPT4ge1xuICAgICAgLy8gRXJyb3IgbG9nXG4gICAgICBsb2FkaW5nLmRpc21pc3MoKTtcbiAgICAgIHRoaXMuc2hvd0ZvcmdvdEZhaWxUZXh0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuZm9yZ290RmFpbFRleHQgPSBlcnI7XG4gICAgfSk7XG4gIH1cblxuICBsb2dpblBhZ2UoKXsgdGhpcy5uYXZDdHJsLnNldFJvb3QoTG9naW5QYWdlKTsgfVxuICBzaWdudXBQYWdlKCl7IHRoaXMubmF2Q3RybC5zZXRSb290KFNpZ251cFBhZ2UpOyB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9mb3Jnb3QvZm9yZ290LnRzIiwiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F0Y2hlZCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gMTI3O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvZXNtNSBsYXp5XG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F0Y2hlZCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gMTcwO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjIGxhenlcbi8vIG1vZHVsZSBpZCA9IDE3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgRXZlbnRzLCBQbGF0Zm9ybSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgUVJTY2FubmVyLCBRUlNjYW5uZXJTdGF0dXMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3FyLXNjYW5uZXInO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9oZWxwZXInO1xuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3RvYXN0JztcblxuaW1wb3J0IHsgUGF5bWVudFBhZ2UgfSBmcm9tICcuLi9wYXltZW50L3BheW1lbnQnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIFNjYW5uZXJQYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLXNjYW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJ3NjYW5uZXIuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNjYW5uZXJQYWdlIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwcml2YXRlIHFyU2Nhbm5lcjogUVJTY2FubmVyLFxuICAgIHB1YmxpYyBoZWxwZXIgOiBIZWxwZXJTZXJ2aWNlLCBwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLCBwdWJsaWMgZXZlbnRzIDogRXZlbnRzLCBwcml2YXRlIHRvYXN0OiBUb2FzdCkge1xuXG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICAvLyBPcHRpb25hbGx5IHJlcXVlc3QgdGhlIHBlcm1pc3Npb24gZWFybHlcbiAgICB0aGlzLnFyU2Nhbm5lci5wcmVwYXJlKClcbiAgICAgICAgLnRoZW4oKHN0YXR1czogUVJTY2FubmVyU3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgaWYgKHN0YXR1cy5hdXRob3JpemVkKSB7XG4gICAgICAgICAgICAgICAvLyBjYW1lcmEgcGVybWlzc2lvbiB3YXMgZ3JhbnRlZFxuXG5cbiAgICAgICAgICAgICAgIC8vIHN0YXJ0IHNjYW5uaW5nXG4gICAgICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1hcHAnKS5jbGFzc0xpc3QuYWRkKCdzY2FubmVyX2JnJyk7XG4gICAgICAgICAgICAgICAgbGV0IHNjYW5TdWIgPSB0aGlzLnFyU2Nhbm5lci5zY2FuKCkuc3Vic2NyaWJlKCh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8tIHRleHQgZGViZSB0ZW5lciB1biBqc29uIGNvbiBlbCBpZCBkZSBsYSB0aWVuZGEgeSBlbCBub21icmVcblxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBzY2FuSW5mbyA9IEpTT04ucGFyc2UodGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWxwZXIudXNlck5hbWUgPSBzY2FuSW5mby51c2VyO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVscGVyLnVzZXJJZCA9IHNjYW5JbmZvLnVzZXJJZDtcblxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXJTY2FubmVyLmhpZGUoKTsgLy8gaGlkZSBjYW1lcmEgcHJldmlld1xuICAgICAgICAgICAgICAgICAgICAgIHNjYW5TdWIudW5zdWJzY3JpYmUoKTsgLy8gc3RvcCBzY2FubmluZ1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2Q3RybC5wdXNoKFBheW1lbnRQYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5wbGF0Zm9ybS5pcygnY29yZG92YScpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9hc3Quc2hvdygnSGEgb2N1cnJpZG8gdW4gZXJyb3IuIEludGVudGUgbnVldmFtZW50ZSAoJytlKycpJywgJzUwMDAnLCAnY2VudGVyJykuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2Q3RybC5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnSGEgb2N1cnJpZG8gdW4gZXJyb3IuIEludGVudGUgbnVldmFtZW50ZSAoJytlKycpJyk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzLmRlbmllZCkge1xuICAgICAgICAgICAgICAgLy8gY2FtZXJhIHBlcm1pc3Npb24gd2FzIHBlcm1hbmVudGx5IGRlbmllZFxuICAgICAgICAgICAgICAgLy8geW91IG11c3QgdXNlIFFSU2Nhbm5lci5vcGVuU2V0dGluZ3MoKSBtZXRob2QgdG8gZ3VpZGUgdGhlIHVzZXIgdG8gdGhlIHNldHRpbmdzIHBhZ2VcbiAgICAgICAgICAgICAgIC8vIHRoZW4gdGhleSBjYW4gZ3JhbnQgdGhlIHBlcm1pc3Npb24gZnJvbSB0aGVyZVxuICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAvLyBwZXJtaXNzaW9uIHdhcyBkZW5pZWQsIGJ1dCBub3QgcGVybWFuZW50bHkuIFlvdSBjYW4gYXNrIGZvciBwZXJtaXNzaW9uIGFnYWluIGF0IGEgbGF0ZXIgdGltZS5cbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgdGhpcy5xclNjYW5uZXIuc2hvdygpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlOiBhbnkpID0+IHtcbiAgICAgIGlmKHRoaXMucGxhdGZvcm0uaXMoJ2NvcmRvdmEnKSl7XG4gICAgICAgIHRoaXMudG9hc3Quc2hvdygnSGEgb2N1cnJpZG8gdW4gZXJyb3IuIEludGVudGUgbnVldmFtZW50ZSAoJytlKycpJywgJzEwMDAwJywgJ2NlbnRlcicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvc2Nhbm5lci9zY2FubmVyLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2JhcmNvZGUtc2Nhbm5lcic7XG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdG9hc3QnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zLCBMb2FkaW5nQ29udHJvbGxlciwgRXZlbnRzLCBQbGF0Zm9ybSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9oZWxwZXInO1xuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuLi9ob21lL2hvbWUnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIFBheW1lbnRQYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLXBheW1lbnQnLFxuICB0ZW1wbGF0ZVVybDogJ3BheW1lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRQYWdlIHtcbiAgcHJpdmF0ZSBwYXkgOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBpc0RldmljZU9ubGluZSA6IGJvb2xlYW47XG4gIHB1YmxpYyBzaG93UGF5bWVudEZhaWxUZXh0IDogYm9vbGVhbjtcbiAgcHVibGljIHBheUZhaWxUZXh0IDogc3RyaW5nO1xuICBwdWJsaWMgdXNlck5hbWUgOiBzdHJpbmc7XG4gIHB1YmxpYyB1c2VySWQgOiBzdHJpbmc7XG4gIHB1YmxpYyByZXNwb25zZURhdGEgOiBhbnk7XG4gIHB1YmxpYyBjbGluZXRzOiBhbnlbXSA9IFtdO1xuICBwdWJsaWMgc2VsZWN0ZWRDbGllbnQ6IGFueTtcbiAgcHVibGljIGNsaWVudEZvdW5kOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBwYWlkIDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgdXNlckluZm86IGFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsIHByaXZhdGUgbmV0d29yazogTmV0d29yaywgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSB0b2FzdDogVG9hc3QsIHB1YmxpYyBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsIHB1YmxpYyBhcGlTZXJ2aWNlIDogQXBpU2VydmljZVByb3ZpZGVyLCBwdWJsaWMgZXZlbnRzIDogRXZlbnRzLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLCBwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLCBwdWJsaWMgaGVscGVyIDogSGVscGVyU2VydmljZS8qcHJpdmF0ZSBiYXJjb2RlU2Nhbm5lcjogQmFyY29kZVNjYW5uZXIsKi8pIHtcbiAgICB0aGlzLnBheSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICBwcmljZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgcXR5OiBbJzEnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgZGlzY29ubmVjdFxuICAgIHRoaXMubmV0d29yay5vbkRpc2Nvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgIHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy51c2VyTmFtZSA9IFwiQ3VhbCBlcyBsYSBjYW50aWRhZCBkZSBzdSB0cmFuc2FjY2lvbiBjb24gXCIgKyBoZWxwZXIudXNlck5hbWUgKyBcIj9cIjtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCdpb25WaWV3RGlkTG9hZCBQYXltZW50UGFnZScpO1xuICB9XG5cbiAgZ29CYWNrKCl7XG4gICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoSG9tZVBhZ2UpO1xuICAgIHRoaXMubmF2Q3RybC5wb3BUb1Jvb3QoKTtcbiAgfVxuXG4gIGF0dGVtcFRvQ2hhcmdlKCl7XG4gICAgdGhpcy5zaG93UGF5bWVudEZhaWxUZXh0ID0gZmFsc2U7XG4gICAgbGV0IGxvYWRpbmcgPSB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZSh7XG4gICAgICBjb250ZW50OiAnRXNwZXJlIHVuIG1vbWVudG8uLi4nXG4gICAgfSk7XG4gICAgbG9hZGluZy5wcmVzZW50KCk7XG5cbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXkpLnRoZW4odmFsdWUgPT4ge1xuICAgICAgdGhpcy51c2VySW5mbyA9IHZhbHVlO1xuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwJywgdGhpcy5wYXkudmFsdWUucHJpY2UpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3EnLCAnMScpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2MnLCBTdHJpbmcodGhpcy5oZWxwZXIudXNlcklkKSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndScsIHRoaXMudXNlckluZm8udXNlcklkKTtcblxuICAgICAgICAvLy0gYWwgaGFjZXIgc3VibWl0IGRlYmUgZGUgY29ycmVyIGFwaSBwYXJhIGRlc2NvbnRhciBjYW50aWRhZCBlbiAkJCBkZSBsYSBjdWVudGEgZGVsIHVzdXNhcmlvIGxvZ3VlYWRvXG4gICAgICAgIHRoaXMuYXBpU2VydmljZS5wb3N0RGF0YShmb3JtRGF0YSwgJ3BheWJpbGwucGhwJykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3VsdDtcbiAgICAgICAgICAgIHRoaXMucGFpZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXNwb25zZURhdGEuc3RhdHVzID09IFwib2tcIikge1xuICAgICAgICAgICAgICAgIHZhciB0b3RhbCA9IHRoaXMucGF5LnZhbHVlLnF0eSAqIHRoaXMucGF5LnZhbHVlLnByaWNlO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMucGxhdGZvcm0uaXMoJ2NvcmRvdmEnKSl7XG4gICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0LnNob3coJ1N1IHRyYW5zYWNjaW9uIHBvciAkJyArIHRvdGFsICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIGEgJyArIHRoaXMuaGVscGVyLnVzZXJOYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIHNlIGhhIGhlY2hvIGNvbiBleGl0by5cXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU3UgYmFsYW5jZSBhY3R1YWwgZXMgZGUgJCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YS5iYWxhbmNlLCAnMTUwMDAnLCAnY2VudGVyJykuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICB0b2FzdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudHMucHVibGlzaChcInNldEJhbGFuY2VcIiwgJyQnICsgcGFyc2VGbG9hdCh0aGlzLnJlc3BvbnNlRGF0YS5iYWxhbmNlKS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdkN0cmwuc2V0Um9vdChIb21lUGFnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZDdHJsLnBvcFRvUm9vdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UGF5bWVudEZhaWxUZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIHRoaXMucGF5RmFpbFRleHQgPSAnU3UgdHJhbnNhY2Npb24gcG9yICQnICsgdG90YWwgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgZGUgJyArIHRoaXMuaGVscGVyLnVzZXJOYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIHNlIGhhIGhlY2hvIGNvbiBleGl0by5cXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU3UgYmFsYW5jZSBhY3R1YWwgZXMgZGUgJCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YS5iYWxhbmNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKCdzZXRCYWxhbmNlJywgJyQnICsgcGFyc2VGbG9hdCh0aGlzLnJlc3BvbnNlRGF0YS5iYWxhbmNlKS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnNob3dQYXltZW50RmFpbFRleHQgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLnBheUZhaWxUZXh0ID0gdGhpcy5yZXNwb25zZURhdGEubXNnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgICAgdGhpcy5wYWlkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnNob3dQYXltZW50RmFpbFRleHQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMucGF5RmFpbFRleHQgPSAnZXJyb3InO1xuICAgICAgfSk7XG4gICAgfSwgKGVycikgPT4ge1xuICAgICAgICBsb2FkaW5nLmRpc21pc3MoKTtcbiAgICAgICAgdGhpcy5wYWlkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93UGF5bWVudEZhaWxUZXh0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYXlGYWlsVGV4dCA9IGVyci5tc2c7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9wYXltZW50L3BheW1lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zLCBMb2FkaW5nQ29udHJvbGxlciwgRXZlbnRzIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcbmltcG9ydCB7IEFwaVNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2hlbHBlcic7XG4vL2ltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iYXJjb2RlLXNjYW5uZXInO1xuXG4vL2ltcG9ydCB7IFRvYXN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS90b2FzdCc7XG5cbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgQWNjb3VudFBhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtYWNjb3VudCcsXG4gIHRlbXBsYXRlVXJsOiAnYWNjb3VudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQWNjb3VudFBhZ2Uge1xuICBwdWJsaWMgYmFsYW5jZUZvcm0gOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBiYWxhbmNlIDogc3RyaW5nO1xuICBwdWJsaWMgc2hvd0Zvcm0gOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc0RldmljZU9ubGluZSA6IGJvb2xlYW47XG4gIHB1YmxpYyByZXNwb25zZURhdGEgOiBhbnk7XG4gIHB1YmxpYyBwYXlSZXN1bHRUZXh0IDogc3RyaW5nO1xuICBwdWJsaWMgc2hvd1BheW1lbnRSZXN1bHRUZXh0IDogYm9vbGVhbjtcbiAgcHVibGljIHRyYW5zYWN0aW9ucyA6IGFueTtcbiAgcHVibGljIHVzZXJJbmZvOiBhbnk7XG4gIHB1YmxpYyBpdGVtczogQXJyYXk8e2lkOiBudW1iZXIsIHR5cGU6IHN0cmluZywgc3RvcmU6IHN0cmluZywgcHJpY2U6IHN0cmluZywgZGF0ZTogc3RyaW5nfT47XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgbmV0d29yazogTmV0d29yaywgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLFxuICAgIHB1YmxpYyBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsIHB1YmxpYyBhcGlTZXJ2aWNlIDogQXBpU2VydmljZVByb3ZpZGVyLCBwdWJsaWMgZXZlbnRzIDogRXZlbnRzLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLCBwcml2YXRlIGhlbHBlcjogSGVscGVyU2VydmljZSAvKiwgcHVibGljIGJhcmNvU2Nhbm5lcjogQmFyY29kZVNjYW5uZXIsIHByaXZhdGUgdG9hc3Q6IFRvYXN0Ki8pIHtcbiAgICB0aGlzLnNob3dQYXltZW50UmVzdWx0VGV4dCA9IGZhbHNlO1xuICAgIHRoaXMucGF5UmVzdWx0VGV4dCA9IFwiXCI7XG5cbiAgICB0aGlzLmJhbGFuY2UgPSB0aGlzLmhlbHBlci5iYWxhbmNlO1xuICAgIHRoaXMuYmFsYW5jZUZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgYW1vdW50OlsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3RcbiAgICB0aGlzLm5ldHdvcmsub25EaXNjb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMudXNlckxvZ2dlZEluS2V5KS50aGVuKCh2YWx1ZSk9PntcbiAgICAgIHRoaXMudXNlckluZm8gPSB2YWx1ZTtcbiAgICAgIHRoaXMudXBkYXRlVHJhbnNhY3Rpb25zKCk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVUcmFuc2FjdGlvbnMoKXtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdmFyIGRhdGEgPSB7ICd1JzogdGhpcy51c2VySW5mby51c2VySWQsIHQ6ICdidXknIH1cbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RGF0YShkYXRhLCAndHJhbnNhY3Rpb25zLnBocCcpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIHRoaXMudHJhbnNhY3Rpb25zID0gcmVzdWx0O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyYW5zYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSB0aGlzLnRyYW5zYWN0aW9uc1tpXTtcbiAgICAgICAgbGV0IHRkYXRlID0gbmV3IERhdGUodHJhbnNhY3Rpb24uZGF0ZV9jcmVhdGVkKTtcblxuICAgICAgICBsZXQgbmFtZSA9ICcnO1xuICAgICAgICBpZih0cmFuc2FjdGlvbi5pbl9uYW1lLmxlbmd0aCA8IDcpe1xuICAgICAgICAgIG5hbWUgPSB0cmFuc2FjdGlvbi5pbl9uYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgbmFtZSA9IHRyYW5zYWN0aW9uLmluX25hbWUuc3Vic3RyKDAsIDcpICsgJy4uLidcbiAgICAgICAgfVxuICAgICAgICBsZXQgcHJpY2VGaXhlZCA9IHRyYW5zYWN0aW9uLnRyYW5zYWN0aW9uX3R5cGVfaWQgPT0gMyA/ICgnJCcgKyBwYXJzZUZsb2F0KHRyYW5zYWN0aW9uLnByaWNlKS50b0ZpeGVkKDIpKSA6ICcoJCcgKyBwYXJzZUZsb2F0KHRyYW5zYWN0aW9uLnByaWNlKS50b0ZpeGVkKDIpICsgJyknO1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgIGlkOiB0cmFuc2FjdGlvbi5pZCxcbiAgICAgICAgICB0eXBlOiB0cmFuc2FjdGlvbi50cmFuc2FjdGlvbl90eXBlX2lkID09IDMgPyAnRCcgOiAnQycsXG4gICAgICAgICAgc3RvcmU6IHRyYW5zYWN0aW9uLnRyYW5zYWN0aW9uX3R5cGVfaWQgPT0gMyA/ICctLS0tLS0tJyA6IG5hbWUsXG4gICAgICAgICAgcHJpY2U6IHByaWNlRml4ZWQsXG4gICAgICAgICAgZGF0ZTogdGRhdGUuZ2V0RGF0ZSgpICsgJy0nICsgKHRkYXRlLmdldE1vbnRoKCkgKyAxKSArICcgJyArIHRkYXRlLmdldEhvdXJzKCkgKyAnOicgKyB0ZGF0ZS5nZXRNaW51dGVzKClcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzaG93UGF5TW9yZUJhbGFuY2VGb3JtKCl7XG4gICAgdGhpcy5zaG93Rm9ybSA9IHRydWU7XG4gIH1cblxuICBhdHRlbXBUb1BheU1vcmVCYWxhbmNlKCl7XG4gICAgbGV0IGxvYWRpbmcgPSB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZSh7XG4gICAgICBjb250ZW50OiAnRXNwZXJlIHVuIG1vbWVudG8uLi4nXG4gICAgfSk7XG4gICAgbG9hZGluZy5wcmVzZW50KCk7XG4gICAgdGhpcy5zaG93UGF5bWVudFJlc3VsdFRleHQgPSBmYWxzZTtcblxuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnVzZXJMb2dnZWRJbktleSkudGhlbih2YWx1ZSA9PiB7XG4gICAgICB0aGlzLnVzZXJJbmZvID0gdmFsdWU7XG4gICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYScsIHBhcnNlRmxvYXQodGhpcy5iYWxhbmNlRm9ybS52YWx1ZS5hbW91bnQpLnRvRml4ZWQoMikpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCd1JywgdGhpcy51c2VySW5mby51c2VySWQpO1xuXG4gICAgICB0aGlzLmFwaVNlcnZpY2UucG9zdERhdGEoZm9ybURhdGEsICdwYXltb3JlYmFsYW5jZS5waHAnKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXN1bHQ7XG4gICAgICAgICAgdGhpcy5zaG93UGF5bWVudFJlc3VsdFRleHQgPSB0cnVlO1xuXG4gICAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgICAgaWYgKHRoaXMucmVzcG9uc2VEYXRhLnN0YXR1cyA9PSBcIm9rXCIpIHtcbiAgICAgICAgICAgIHZhciBiYWxhbmNlVmFsID0gJyQnICsgcGFyc2VGbG9hdCh0aGlzLnJlc3BvbnNlRGF0YS5iYWxhbmNlKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgdGhpcy5wYXlSZXN1bHRUZXh0ID0gJ1N1IHRyYW5zYWNjaW9uIHNlIGhhIGhlY2hvIGNvbiBleGl0by5cXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTdSBudWV2byBzYWxkbyBlcyAnICsgYmFsYW5jZVZhbDtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goJ3NldEJhbGFuY2UnLCBiYWxhbmNlVmFsKTtcbiAgICAgICAgICAgIHRoaXMuYmFsYW5jZSA9IGJhbGFuY2VWYWw7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRyYW5zYWN0aW9ucygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICB0aGlzLnBheVJlc3VsdFRleHQgPSB0aGlzLnJlc3BvbnNlRGF0YS5tc2c7XG4gICAgICAgICAgfVxuICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICAgIHRoaXMuc2hvd1BheW1lbnRSZXN1bHRUZXh0ID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnBheVJlc3VsdFRleHQgPSAnSGEgb2N1cnJpZG8gdW4gZXJyb3I6ICcgKyBlcnIuc3RhdHVzO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9hY2NvdW50L2FjY291bnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UnO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvaGVscGVyJztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBUcmFuc2FjdGlvbnNQYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLXRyYW5zYWN0aW9ucycsXG4gIHRlbXBsYXRlVXJsOiAndHJhbnNhY3Rpb25zLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvbnNQYWdlIHtcbiAgcHVibGljIGlzRGV2aWNlT25saW5lIDogYm9vbGVhbjtcbiAgcHVibGljIGJhbGFuY2UgOiBzdHJpbmc7XG4gIHB1YmxpYyB0cmFuc2FjdGlvbnMgOiBhbnk7XG4gIHB1YmxpYyB1c2VySW5mbzogYW55O1xuICBwdWJsaWMgaXRlbXM6IEFycmF5PHtpZDogbnVtYmVyLCB1c2VyOiBzdHJpbmcsIHByaWNlOiBzdHJpbmcsIGRhdGU6IHN0cmluZ30+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsIHB1YmxpYyBhcGlTZXJ2aWNlIDogQXBpU2VydmljZVByb3ZpZGVyLCBcbiAgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JrLCBwcml2YXRlIGhlbHBlcjogSGVscGVyU2VydmljZSkge1xuICAgIFxuICAgIHRoaXMuYmFsYW5jZSA9IHRoaXMuaGVscGVyLmJhbGFuY2U7XG4gICAgXG4gICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBkaXNjb25uZWN0XG4gICAgdGhpcy5uZXR3b3JrLm9uRGlzY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBjb25uZWN0aW9uXG4gICAgdGhpcy5uZXR3b3JrLm9uQ29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXkpLnRoZW4oKHZhbHVlKT0+e1xuICAgICAgdGhpcy51c2VySW5mbyA9IHZhbHVlO1xuICAgICAgdmFyIGRhdGEgPSB7ICd1JzogdGhpcy51c2VySW5mby51c2VySWQsIHR5cGU6ICdzZWxsJyB9XG4gICAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RGF0YShkYXRhLCAndHJhbnNhY3Rpb25zLnBocCcpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMgPSByZXN1bHQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmFuc2FjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSB0aGlzLnRyYW5zYWN0aW9uc1tpXTtcbiAgICAgICAgICBsZXQgdGRhdGUgPSBuZXcgRGF0ZSh0cmFuc2FjdGlvbi5kYXRlX2NyZWF0ZWQpO1xuICAgICAgICAgIFxuICAgICAgICAgIGxldCBuYW1lID0gJyc7XG4gICAgICAgICAgaWYodHJhbnNhY3Rpb24ub3V0X25hbWUubGVuZ3RoIDwgMTApe1xuICAgICAgICAgICAgbmFtZSA9IHRyYW5zYWN0aW9uLm91dF9uYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgbmFtZSA9IHRyYW5zYWN0aW9uLm91dF9uYW1lLnN1YnN0cigwLCAxMCkgKyAnLi4uJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgcHJpY2VGaXhlZCA9ICckJyArIHBhcnNlRmxvYXQodHJhbnNhY3Rpb24ucHJpY2UpLnRvRml4ZWQoMik7XG4gICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiB0cmFuc2FjdGlvbi5pZCxcbiAgICAgICAgICAgIHVzZXI6IG5hbWUsXG4gICAgICAgICAgICBwcmljZTogcHJpY2VGaXhlZCxcbiAgICAgICAgICAgIGRhdGU6IHRkYXRlLmdldERhdGUoKSArICctJyArICh0ZGF0ZS5nZXRNb250aCgpICsgMSkgKyAnICcgKyB0ZGF0ZS5nZXRIb3VycygpICsgJzonICsgdGRhdGUuZ2V0TWludXRlcygpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zLnRzIiwiZXhwb3J0IHZhciBDb25zdGFudHMgPSB7XHJcbiAgICBBUElfRU5EUE9JTlQgOiAnaHR0cHM6Ly93d3cuZXNmZXJhc29sdWNpb25lcy5jb20vYXBpL3BheW1lbnQvYXBpLycsXHJcbiAgICBMT0NBTF9BUElfRU5EUE9JTlQ6ICdodHRwOi8vbG9jYWxob3N0OjgwOTkvJyxcclxuICAgIHVzZXJMb2dnZWRJbktleSA6ICd1c2VyTG9nZ2VkSW4nLFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL2NvbnN0YW50cy50cyIsImltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC5tb2R1bGUnO1xuXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4udHMiLCJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5cbi8qXG4gIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIEFwaVNlcnZpY2VQcm92aWRlciBwcm92aWRlci5cblxuICBTZWUgaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2RlcGVuZGVuY3ktaW5qZWN0aW9uIGZvciBtb3JlIGluZm8gb24gcHJvdmlkZXJzXG4gIGFuZCBBbmd1bGFyIERJLlxuKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlUHJvdmlkZXIge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LCBwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtKSB7XG4gICAgY29uc29sZS5sb2coJ0hlbGxvIEFwaVNlcnZpY2VQcm92aWRlciBQcm92aWRlcicpO1xuICB9XG5cbiAgcG9zdERhdGEoZGF0YSwgdXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBlbmRwb2ludCA9IENvbnN0YW50cy5BUElfRU5EUE9JTlQ7XG4gICAgICBpZighdGhpcy5wbGF0Zm9ybS5pcygnY29yZG92YScpKXtcbiAgICAgICAgZW5kcG9pbnQgPSBDb25zdGFudHMuTE9DQUxfQVBJX0VORFBPSU5UO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmh0dHAucG9zdChlbmRwb2ludCArIHVybCwgZGF0YSlcbiAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldERhdGEoZGF0YSwgdXJsKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICB2YXIgc3RyID0gW107XG4gICAgICBmb3IgKHZhciBwIGluIGRhdGEpe1xuICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgIHN0ci5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChwKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFbcF0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZW5kcG9pbnQgPSBDb25zdGFudHMuQVBJX0VORFBPSU5UO1xuICAgICAgaWYoIXRoaXMucGxhdGZvcm0uaXMoJ2NvcmRvdmEnKSl7XG4gICAgICAgIGVuZHBvaW50ID0gQ29uc3RhbnRzLkxPQ0FMX0FQSV9FTkRQT0lOVDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5odHRwLmdldChlbmRwb2ludCArIHVybCsnPycrc3RyLmpvaW4oXCImXCIpKVxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRXJyb3JIYW5kbGVyLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW9uaWNTdG9yYWdlTW9kdWxlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgSW9uaWNBcHAsIElvbmljRXJyb3JIYW5kbGVyLCBJb25pY01vZHVsZSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuLy9pbXBvcnQgeyBGYWNlYm9vayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmFjZWJvb2snO1xuaW1wb3J0IHsgUVJTY2FubmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9xci1zY2FubmVyJztcblxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3RvYXN0JztcblxuaW1wb3J0IHsgTXlBcHAgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuLi9wYWdlcy9ob21lL2hvbWUnO1xuaW1wb3J0IHsgTGlzdFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9saXN0L2xpc3QnO1xuaW1wb3J0IHsgTG9naW5QYWdlIH0gZnJvbSAnLi4vcGFnZXMvbG9naW4vbG9naW4nO1xuaW1wb3J0IHsgU2lnbnVwUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3NpZ251cC9zaWdudXAnO1xuaW1wb3J0IHsgRm9yZ290UGFnZSB9IGZyb20gJy4uL3BhZ2VzL2ZvcmdvdC9mb3Jnb3QnO1xuaW1wb3J0IHsgQWNjb3VudFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9hY2NvdW50L2FjY291bnQnO1xuaW1wb3J0IHsgUGF5bWVudFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9wYXltZW50L3BheW1lbnQnO1xuaW1wb3J0IHsgU2Nhbm5lclBhZ2UgfSBmcm9tICcuLi9wYWdlcy9zY2FubmVyL3NjYW5uZXInO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25zUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMnO1xuXG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N0YXR1cy1iYXInO1xuaW1wb3J0IHsgU3BsYXNoU2NyZWVuIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zcGxhc2gtc2NyZWVuJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvaGVscGVyJztcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xuaW1wb3J0IHsgQXBpU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ3hRUkNvZGVNb2R1bGUgfSBmcm9tICduZ3gtcXJjb2RlMic7XG5pbXBvcnQgeyBORkMsIE5kZWYgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25mYyc7XG5pbXBvcnQgeyBJbkFwcFB1cmNoYXNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pbi1hcHAtcHVyY2hhc2UnO1xuLy9pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmFyY29kZS1zY2FubmVyJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTXlBcHAsXG4gICAgSG9tZVBhZ2UsXG4gICAgTGlzdFBhZ2UsXG4gICAgTG9naW5QYWdlLFxuICAgIFNpZ251cFBhZ2UsXG4gICAgRm9yZ290UGFnZSxcbiAgICBBY2NvdW50UGFnZSxcbiAgICBQYXltZW50UGFnZSxcbiAgICBTY2FubmVyUGFnZSxcbiAgICBUcmFuc2FjdGlvbnNQYWdlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLmZvclJvb3QoTXlBcHApLFxuICAgIElvbmljU3RvcmFnZU1vZHVsZS5mb3JSb290KCksXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBOZ3hRUkNvZGVNb2R1bGVcbiAgXSxcbiAgYm9vdHN0cmFwOiBbSW9uaWNBcHBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBNeUFwcCxcbiAgICBIb21lUGFnZSxcbiAgICBMaXN0UGFnZSxcbiAgICBMb2dpblBhZ2UsXG4gICAgU2lnbnVwUGFnZSxcbiAgICBGb3Jnb3RQYWdlLFxuICAgIEFjY291bnRQYWdlLFxuICAgIFBheW1lbnRQYWdlLFxuICAgIFNjYW5uZXJQYWdlLFxuICAgIFRyYW5zYWN0aW9uc1BhZ2VcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU3RhdHVzQmFyLFxuICAgIFNwbGFzaFNjcmVlbixcbiAgICBIZWxwZXJTZXJ2aWNlLFxuICAgIE5ldHdvcmssXG4gICAgLy9GYWNlYm9vayxcbiAgICB7cHJvdmlkZTogRXJyb3JIYW5kbGVyLCB1c2VDbGFzczogSW9uaWNFcnJvckhhbmRsZXJ9LFxuICAgIEFwaVNlcnZpY2VQcm92aWRlcixcbiAgICBRUlNjYW5uZXIsXG4gICAgVG9hc3QsXG4gICAgTkZDLFxuICAgIE5kZWYsXG4gICAgSW5BcHBQdXJjaGFzZVxuICAgIC8vQmFyY29kZVNjYW5uZXJcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLm1vZHVsZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vc2VydmljZXMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWxwZXJTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBiYWxhbmNlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdXNlck5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyB1c2VySWQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2Upe1xyXG4gICAgICAgIHRoaXMuYmFsYW5jZSA9ICctLS0tJztcclxuICAgIH1cclxuXHJcbiAgICBzZXRCYWxhbmNlKGFjdHVhbEJhbGFuY2Upe1xyXG4gICAgICAgIHRoaXMuYmFsYW5jZSA9IGFjdHVhbEJhbGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlckluZm8oYWN0dWFsVXNlck5hbWUsIGFjdHVhbFVzZXJJZCl7XHJcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9IGFjdHVhbFVzZXJOYW1lO1xyXG4gICAgICAgIHRoaXMudXNlcklkID0gYWN0dWFsVXNlcklkO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpe1xyXG4gICAgICAgIHRoaXMuYmFsYW5jZSA9ICctLS0tJztcclxuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXksIG51bGwpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3ZpZGVycy9oZWxwZXIudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2LCBQbGF0Zm9ybSwgTG9hZGluZ0NvbnRyb2xsZXIsIEV2ZW50cyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zdGF0dXMtYmFyJztcbmltcG9ydCB7IFNwbGFzaFNjcmVlbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3BsYXNoLXNjcmVlbic7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vc2VydmljZXMvY29uc3RhbnRzJztcbmltcG9ydCB7IEFwaVNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4uL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2hlbHBlcic7XG5cbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi4vcGFnZXMvaG9tZS9ob21lJztcbmltcG9ydCB7IEFjY291bnRQYWdlIH0gZnJvbSAnLi4vcGFnZXMvYWNjb3VudC9hY2NvdW50JztcbmltcG9ydCB7IExvZ2luUGFnZSB9IGZyb20gJy4uL3BhZ2VzL2xvZ2luL2xvZ2luJztcbmltcG9ydCB7IFNpZ251cFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9zaWdudXAvc2lnbnVwJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uc1BhZ2UgfSBmcm9tICcuLi9wYWdlcy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnYXBwLmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgTXlBcHAge1xuICBAVmlld0NoaWxkKE5hdikgbmF2OiBOYXY7XG5cbiAgcm9vdFBhZ2U6IGFueSA9IEhvbWVQYWdlO1xuICB1c2VySW5mbzogYW55O1xuICByZXNwb25zZURhdGE6YW55O1xuXG4gIHBhZ2VzOiBBcnJheTx7dGl0bGU6IHN0cmluZywgY29tcG9uZW50OiBhbnksIHR5cGU6IHN0cmluZywgaWNvbjogc3RyaW5nfT47XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSwgcHVibGljIHN0YXR1c0JhcjogU3RhdHVzQmFyLCBwdWJsaWMgc3BsYXNoU2NyZWVuOiBTcGxhc2hTY3JlZW4sIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSxcbiAgICBwdWJsaWMgYXBpU2VydmljZSA6IEFwaVNlcnZpY2VQcm92aWRlciwgcHVibGljIGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlciwgcHVibGljIGV2ZW50cyA6IEV2ZW50cywgcHVibGljIGhlbHBlciA6IEhlbHBlclNlcnZpY2UpIHtcbiAgICB0aGlzLmluaXRpYWxpemVBcHAoKTtcblxuICAgIC8vIHVzZWQgZm9yIGFuIGV4YW1wbGUgb2YgbmdGb3IgYW5kIG5hdmlnYXRpb25cbiAgICB0aGlzLnBhZ2VzID0gW1xuICAgICAgeyB0aXRsZTogJ0hvbWUnLCBjb21wb25lbnQ6IEhvbWVQYWdlLCB0eXBlOiAncm9vdCcsIGljb246ICcnIH0sXG4gICAgICB7IHRpdGxlOiAnTWkgY3VlbnRhJywgY29tcG9uZW50OiBBY2NvdW50UGFnZSwgdHlwZTogJ3B1c2gnLCBpY29uOiAnJyB9LFxuICAgICAgeyB0aXRsZTogJ01pcyBWZW50YXMnLCBjb21wb25lbnQ6IFRyYW5zYWN0aW9uc1BhZ2UsIHR5cGU6ICdwdXNoJywgaWNvbjogJycgfSxcbiAgICAgIHsgdGl0bGU6ICdQZXJmaWwnLCBjb21wb25lbnQ6IFNpZ251cFBhZ2UsIHR5cGU6ICdyb290JywgaWNvbjogJycgfSxcbiAgICAgIHsgdGl0bGU6ICdMb2dvdXQnLCBjb21wb25lbnQ6IG51bGwsIHR5cGU6ICdsb2dvdXQnLCBpY29uOiAnbG9nLW91dCcgfVxuICAgIF07XG4gICAgcGxhdGZvcm0ucmVhZHkoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMudXNlckxvZ2dlZEluS2V5KS50aGVuKCh2YWx1ZSk9PntcbiAgICAgICAgICBpZih2YWx1ZSA9PSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMubmF2LnNldFJvb3QoTG9naW5QYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGxldCBsb2FkaW5nID0gdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgICAgICAgICBjb250ZW50OiAnRXNwZXJlIHVuIG1vbWVudG8uLi4nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxvYWRpbmcucHJlc2VudCgpO1xuICAgICAgICAgICAgdGhpcy51c2VySW5mbyA9IHZhbHVlO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7ICdpZCc6IHRoaXMudXNlckluZm8udXNlcklkLCAndHlwZSc6ICd1c2VyJyB9XG4gICAgICAgICAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RGF0YShkYXRhLCAndXNlcnMucGhwJykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICBsb2FkaW5nLmRpc21pc3MoKTtcbiAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXN1bHQ7XG4gICAgICAgICAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goXCJzZXRCYWxhbmNlXCIsICckJyArIHRoaXMucmVzcG9uc2VEYXRhLnVzZXIuYW1vdW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICB0aGlzLm5hdi5zZXRSb290KExvZ2luUGFnZSk7XG4gICAgICAgIH0pOztcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpemVBcHAoKSB7XG4gICAgdGhpcy5wbGF0Zm9ybS5yZWFkeSgpLnRoZW4oKCkgPT4ge1xuICAgICAgLy8gT2theSwgc28gdGhlIHBsYXRmb3JtIGlzIHJlYWR5IGFuZCBvdXIgcGx1Z2lucyBhcmUgYXZhaWxhYmxlLlxuICAgICAgLy8gSGVyZSB5b3UgY2FuIGRvIGFueSBoaWdoZXIgbGV2ZWwgbmF0aXZlIHRoaW5ncyB5b3UgbWlnaHQgbmVlZC5cbiAgICAgIHRoaXMuc3RhdHVzQmFyLnN0eWxlRGVmYXVsdCgpO1xuICAgICAgdGhpcy5zcGxhc2hTY3JlZW4uaGlkZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgb3BlblBhZ2UocGFnZSkge1xuICAgIC8vIFJlc2V0IHRoZSBjb250ZW50IG5hdiB0byBoYXZlIGp1c3QgdGhpcyBwYWdlXG4gICAgLy8gd2Ugd291bGRuJ3Qgd2FudCB0aGUgYmFjayBidXR0b24gdG8gc2hvdyBpbiB0aGlzIHNjZW5hcmlvXG4gICAgaWYocGFnZS50eXBlID09ICdsb2dvdXQnKVxuICAgICAgdGhpcy5ldmVudHMucHVibGlzaCgnbG9nb3V0Jyk7XG4gICAgZWxzZSBpZihwYWdlLnR5cGUgPT0gJ3Jvb3QnKVxuICAgICAgdGhpcy5uYXYuc2V0Um9vdChwYWdlLmNvbXBvbmVudCk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5uYXYucHVzaChwYWdlLmNvbXBvbmVudCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnbGlzdC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0UGFnZSB7XG4gIHNlbGVjdGVkSXRlbTogYW55O1xuICBpY29uczogc3RyaW5nW107XG4gIGl0ZW1zOiBBcnJheTx7dGl0bGU6IHN0cmluZywgbm90ZTogc3RyaW5nLCBpY29uOiBzdHJpbmd9PjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zKSB7XG4gICAgLy8gSWYgd2UgbmF2aWdhdGVkIHRvIHRoaXMgcGFnZSwgd2Ugd2lsbCBoYXZlIGFuIGl0ZW0gYXZhaWxhYmxlIGFzIGEgbmF2IHBhcmFtXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBuYXZQYXJhbXMuZ2V0KCdpdGVtJyk7XG5cbiAgICAvLyBMZXQncyBwb3B1bGF0ZSB0aGlzIHBhZ2Ugd2l0aCBzb21lIGZpbGxlciBjb250ZW50IGZvciBmdW56aWVzXG4gICAgdGhpcy5pY29ucyA9IFsnZmxhc2snLCAnd2lmaScsICdiZWVyJywgJ2Zvb3RiYWxsJywgJ2Jhc2tldGJhbGwnLCAncGFwZXItcGxhbmUnLFxuICAgICdhbWVyaWNhbi1mb290YmFsbCcsICdib2F0JywgJ2JsdWV0b290aCcsICdidWlsZCddO1xuXG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xuICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGl0bGU6ICdJdGVtICcgKyBpLFxuICAgICAgICBub3RlOiAnVGhpcyBpcyBpdGVtICMnICsgaSxcbiAgICAgICAgaWNvbjogdGhpcy5pY29uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmljb25zLmxlbmd0aCldXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpdGVtVGFwcGVkKGV2ZW50LCBpdGVtKSB7XG4gICAgLy8gVGhhdCdzIHJpZ2h0LCB3ZSdyZSBwdXNoaW5nIHRvIG91cnNlbHZlcyFcbiAgICB0aGlzLm5hdkN0cmwucHVzaChMaXN0UGFnZSwge1xuICAgICAgaXRlbTogaXRlbVxuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvbGlzdC9saXN0LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIEV2ZW50cywgTG9hZGluZ0NvbnRyb2xsZXIgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9oZWxwZXInO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UnO1xuXG5pbXBvcnQgeyBMb2dpblBhZ2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbic7XG5pbXBvcnQgeyBTY2FubmVyUGFnZSB9IGZyb20gJy4uL3NjYW5uZXIvc2Nhbm5lcic7XG4vL2ltcG9ydCB7IFBheW1lbnRQYWdlIH0gZnJvbSAnLi4vcGF5bWVudC9wYXltZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICdob21lLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlIHtcbiAgcHVibGljIGlzRGV2aWNlT25saW5lIDogYm9vbGVhbjtcbiAgcHVibGljIGJhbGFuY2UgOiBzdHJpbmc7XG4gIHB1YmxpYyBzaG93UVJDb2RlIDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgY3JlYXRlZENvZGU6IGFueTtcbiAgcHVibGljIHVzZXJJbmZvOiBhbnk7XG4gIHJlc3BvbnNlRGF0YTphbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHByaXZhdGUgbmV0d29yazogTmV0d29yaywgcHVibGljIGV2ZW50cyA6IEV2ZW50cywgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLCBwdWJsaWMgYXBpU2VydmljZSA6IEFwaVNlcnZpY2VQcm92aWRlciwgcHVibGljIGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlciwgcHVibGljIGhlbHBlciA6IEhlbHBlclNlcnZpY2UpIHtcbiAgICAgIHRoaXMuYmFsYW5jZSA9IHRoaXMuaGVscGVyLmJhbGFuY2U7XG4gICAgICBldmVudHMuc3Vic2NyaWJlKCdzZXRCYWxhbmNlJywgYWN0dWFsQmFsYW5jZSA9PiB7XG4gICAgICAgIHRoaXMuYmFsYW5jZSA9IGFjdHVhbEJhbGFuY2U7XG4gICAgICAgIHRoaXMuaGVscGVyLnNldEJhbGFuY2UoYWN0dWFsQmFsYW5jZSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5ldmVudHMuc3Vic2NyaWJlKCdsb2dvdXQnLCgpID0+IHtcbiAgICAgICAgICAvL2NhbGwgbWV0aG9kIHRvIHJlZnJlc2ggY29udGVudFxuICAgICAgICAgIHRoaXMubG9nb3V0KCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3RcbiAgICAgIHRoaXMubmV0d29yay5vbkRpc2Nvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICAgIHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnVzZXJMb2dnZWRJbktleSkudGhlbigodmFsdWUpPT57XG4gICAgICBpZih2YWx1ZSAhPSBudWxsKXtcbiAgICAgICAgdGhpcy51c2VySW5mbyA9IHZhbHVlO1xuICAgICAgICB0aGlzLnNob3dRUkNvZGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNyZWF0ZWRDb2RlID0gXCJ7XFxcInN0b3JlXFxcIjpcXFwiXCIgKyB0aGlzLnVzZXJJbmZvLnVzZXJOYW1lICsgXCJcXFwiLFxcXCJzdG9yZUlkXFxcIjpcXFwiXCIgKyB0aGlzLnVzZXJJbmZvLnVzZXJJZCArIFwiXFxcIn1cIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBsb2dvdXQoKXtcbiAgICB0aGlzLmhlbHBlci5sb2dvdXQoKTtcbiAgICB0aGlzLm5hdkN0cmwuc2V0Um9vdChMb2dpblBhZ2UpO1xuICB9XG5cbiAgcmVmcmVzaEJhbGFuY2UoKXtcbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXkpLnRoZW4oKHZhbHVlKT0+e1xuICAgICAgaWYodmFsdWUgPT0gbnVsbCl7XG4gICAgICAgIHRoaXMubmF2Q3RybC5zZXRSb290KExvZ2luUGFnZSk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBsZXQgbG9hZGluZyA9IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgICAgICBjb250ZW50OiAnRXNwZXJlIHVuIG1vbWVudG8uLi4nXG4gICAgICAgIH0pO1xuICAgICAgICBsb2FkaW5nLnByZXNlbnQoKTtcbiAgICAgICAgdGhpcy51c2VySW5mbyA9IHZhbHVlO1xuICAgICAgICB2YXIgZGF0YSA9IHsgJ2lkJzogdGhpcy51c2VySW5mby51c2VySWQsICd0eXBlJzogJ3VzZXInIH1cbiAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGEoZGF0YSwgJ3VzZXJzLnBocCcpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICBsb2FkaW5nLmRpc21pc3MoKTtcbiAgICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3VsdDtcbiAgICAgICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKFwic2V0QmFsYW5jZVwiLCAnJCcgKyBwYXJzZUZsb2F0KHRoaXMucmVzcG9uc2VEYXRhLnVzZXIuYW1vdW50KS50b0ZpeGVkKDIpKTtcbiAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICBsb2FkaW5nLmRpc21pc3MoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoTG9naW5QYWdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHRha2VQYXltZW50KCl7XG4gICAgLyp0aGlzLmhlbHBlci5zdG9yZU5hbWUgPSAnQ2VydmVjZXJpYSBBcnRlc2FuYWwgUy5BLic7XG4gICAgdGhpcy5oZWxwZXIuc3RvcmVJZCA9IDI7XG4gICAgdGhpcy5uYXZDdHJsLnB1c2goUGF5bWVudFBhZ2UpOyovXG4gICAgdGhpcy5uYXZDdHJsLnB1c2goU2Nhbm5lclBhZ2UpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvaG9tZS9ob21lLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgRXZlbnRzLCBMb2FkaW5nQ29udHJvbGxlciB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG4vL2ltcG9ydCB7IEZhY2Vib29rIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9mYWNlYm9vayc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IEFwaVNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4uL2hvbWUvaG9tZSc7XG5pbXBvcnQgeyBTaWdudXBQYWdlIH0gZnJvbSAnLi4vc2lnbnVwL3NpZ251cCc7XG5pbXBvcnQgeyBGb3Jnb3RQYWdlIH0gZnJvbSAnLi4vZm9yZ290L2ZvcmdvdCc7XG5cbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgTG9naW5QYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICdsb2dpbi5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5QYWdlIHtcbiAgcHJpdmF0ZSBsb2dpbiA6IEZvcm1Hcm91cDtcbiAgcHVibGljIGlzRGV2aWNlT25saW5lIDogYm9vbGVhbjtcbiAgcHVibGljIHNob3dMb2dpbkZhaWxUZXh0IDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgdXNlckluZm8gOiBhbnkgPSB7fTtcbiAgcHVibGljIHJlc3BvbnNlRGF0YSA6IGFueTtcbiAgcHVibGljIGxvZ2luRmFpbFRleHQgOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmssIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIC8qcHJpdmF0ZSBmYjogRmFjZWJvb2ssKi8gcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHB1YmxpYyBldmVudHMgOiBFdmVudHMsIHB1YmxpYyBhcGlTZXJ2aWNlIDogQXBpU2VydmljZVByb3ZpZGVyLCBwdWJsaWMgbG9hZGluZ0N0cmw6IExvYWRpbmdDb250cm9sbGVyKSB7XG4gICAgdGhpcy5sb2dpbiA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBwd2Q6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgfSk7XG4gICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG5cbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3RcbiAgICB0aGlzLm5ldHdvcmsub25EaXNjb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ2lvblZpZXdEaWRMb2FkIExvZ2luUGFnZScpO1xuICB9XG5cbiAgc2lnbnVwUGFnZSgpeyB0aGlzLm5hdkN0cmwuc2V0Um9vdChTaWdudXBQYWdlKTsgfVxuICBmb3Jnb3RQYXNzd29yZFBhZ2UoKXsgdGhpcy5uYXZDdHJsLnNldFJvb3QoRm9yZ290UGFnZSk7IH1cblxuICBmYkxvZ2luKCl7XG4gICAgLyp0aGlzLmZiLmxvZ2luKFsncHVibGljX3Byb2ZpbGUnLCAnZW1haWwnXSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuZmIuYXBpKCdtZS8/ZmllbGRzPWlkLGVtYWlsLGZpcnN0X25hbWUnLCBbJ3B1YmxpY19wcm9maWxlJywgJ2VtYWlsJ10pLnRoZW4oYXBpUmVzID0+IHtcbiAgICAgICAgICB0aGlzLnVzZXJJbmZvID0gYXBpUmVzO1xuICAgICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgICAgIGFsZXJ0KCdMb2dnZWQgaW50byBGYWNlYm9vayEnKVxuICAgICAgICB9KS5jYXRjaChlID0+IGFsZXJ0KCdFcnJvciBhcGkgaW50byBGYWNlYm9vaycpKTtcbiAgICB9KS5jYXRjaChlID0+IGFsZXJ0KCdFcnJvciBsb2dnaW5nIGludG8gRmFjZWJvb2snICArIGUpKTsqL1xuICB9XG5cbiAgYXR0ZW1wdFVzZXJMb2dpbigpe1xuICAgIGxldCBsb2FkaW5nID0gdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgY29udGVudDogJ0VzcGVyZSB1biBtb21lbnRvLi4uJ1xuICAgIH0pO1xuICAgIGxvYWRpbmcucHJlc2VudCgpO1xuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgndScsIHRoaXMubG9naW4udmFsdWUuZW1haWwpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgncCcsIHRoaXMubG9naW4udmFsdWUucHdkKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3QnLCAnMScpO1xuICAgIHRoaXMuYXBpU2VydmljZS5wb3N0RGF0YShmb3JtRGF0YSwgJ2FjY2Vzcy5waHAnKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3VsdDtcbiAgICAgICAgaWYgKHRoaXMucmVzcG9uc2VEYXRhLnN0YXR1cyA9PSBcIm9rXCIpIHtcbiAgICAgICAgICBsZXQgdXNlckFycmF5ID0ge1xuICAgICAgICAgICAgdXNlcklkOiB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLmlkLFxuICAgICAgICAgICAgdXNlckVtYWlsOiB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLmVtYWlsLFxuICAgICAgICAgICAgdXNlck5hbWU6IHRoaXMucmVzcG9uc2VEYXRhLnVzZXIubmFtZSxcbiAgICAgICAgICAgIHVzZXJUeXBlOiB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLnVzZXJfdHlwZV9pZFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXksIHVzZXJBcnJheSk7XG4gICAgICAgICAgdGhpcy5zaG93TG9naW5GYWlsVGV4dCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goJ3NldEJhbGFuY2UnLCAnJCcgKyBwYXJzZUZsb2F0KHRoaXMucmVzcG9uc2VEYXRhLnVzZXIuYW1vdW50KS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKCdzZXRNZW51SXRlbXMnLCB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLnVzZXJfdHlwZV9pZCA9PSAyID8gJ3VzZXInIDogJ3N0b3JlJyk7XG4gICAgICAgICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoSG9tZVBhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2hvd0xvZ2luRmFpbFRleHQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMubG9naW5GYWlsVGV4dCA9ICh0aGlzLnJlc3BvbnNlRGF0YS5tc2cgPT0gJ25vIHBhc3N3b3JkJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRyYXNlw7FhIGluY29ycmVjdGEnIDogKHRoaXMucmVzcG9uc2VEYXRhLm1zZyA9PSAnbm8gdXNlcicgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdFc3RlIHVzdWFyaW8gbm8gZXhpc3RlJyA6ICh0aGlzLnJlc3BvbnNlRGF0YS5tc2cgPT0gJ25vIHBsYXRmb3JtJyA/ICdQbGF0YWZvcm1hIGluY29ycmVjdGEnIDogJ0Vycm9yIGRlc2Nvbm9jaWRvJykpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvbG9naW4vbG9naW4udHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zLCBMb2FkaW5nQ29udHJvbGxlciwgRXZlbnRzLCBQbGF0Zm9ybSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXBpU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9oZWxwZXInO1xuaW1wb3J0IHsgTkZDLCBOZGVmIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZmMnO1xuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3RvYXN0JztcblxuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuLi9ob21lL2hvbWUnO1xuaW1wb3J0IHsgTG9naW5QYWdlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4nO1xuaW1wb3J0IHsgRm9yZ290UGFnZSB9IGZyb20gJy4uL2ZvcmdvdC9mb3Jnb3QnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIFNpZ251cFBhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2Utc2lnbnVwJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWdudXAuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNpZ251cFBhZ2Uge1xuICBwdWJsaWMgaXNEZXZpY2VPbmxpbmUgOiBib29sZWFuO1xuICBwcml2YXRlIHJlZ2lzdGVyIDogRm9ybUdyb3VwO1xuICBwdWJsaWMgcmVzcG9uc2VEYXRhIDogYW55O1xuICBwdWJsaWMgc2hvd0R1cGxpY2F0ZVRleHQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIG5hbWVWYWx1ZSA6IHN0cmluZztcbiAgcHVibGljIGVtYWlsVmFsdWUgOiBzdHJpbmc7XG4gIHB1YmxpYyBpc1VzZXJMb2dnZWRJbiA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNob3dMaW5rVGFnQnV0dG9uIDogYm9vbGVhbjtcbiAgcHVibGljIHVzZXJJbmZvOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmssIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHB1YmxpYyBhcGlTZXJ2aWNlIDogQXBpU2VydmljZVByb3ZpZGVyLCBwcml2YXRlIG5mYzogTkZDLCBwcml2YXRlIG5kZWY6IE5kZWYsIHB1YmxpYyBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHB1YmxpYyBoZWxwZXI6IEhlbHBlclNlcnZpY2UsIHB1YmxpYyBldmVudHM6IEV2ZW50cywgcHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSwgcHJpdmF0ZSB0b2FzdDogVG9hc3QpIHtcbiAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3RcbiAgICB0aGlzLm5ldHdvcmsub25EaXNjb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlciA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgbmFtZTogWycnXSxcbiAgICAgICAgcHdkOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKV0sXG4gICAgICAgIGdyb3VwIDogWycnXVxuICAgIH0pO1xuICAgIHZhciAkdmlldyA9IHRoaXM7XG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMudXNlckxvZ2dlZEluS2V5KS50aGVuKHZhbHVlID0+IHtcbiAgICAgIGlmKHZhbHVlICE9IG51bGwpe1xuICAgICAgICB0aGlzLmlzVXNlckxvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51c2VySW5mbyA9IHZhbHVlO1xuICAgICAgICBpZih2YWx1ZS51c2VyVHlwZSA9PSAyKVxuICAgICAgICAgIHRoaXMuc2hvd0xpbmtUYWdCdXR0b24gPSB0cnVlO1xuICAgICAgICBsZXQgbG9hZGluZyA9IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdFc3BlcmUgdW4gbW9tZW50by4uLidcbiAgICAgICAgfSk7XG4gICAgICAgIGxvYWRpbmcucHJlc2VudCgpO1xuICAgICAgICAkdmlldy5yZWdpc3RlciA9ICR2aWV3LmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgbmFtZTogWycnXSxcbiAgICAgICAgICAgIHB3ZDogWycnLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV0sXG4gICAgICAgICAgICBncm91cCA6IFsnJ11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51c2VySW5mbyA9IHZhbHVlO1xuICAgICAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RGF0YSh7ICdpZCc6IHRoaXMudXNlckluZm8udXNlcklkLCAndHlwZSc6ICd1c2VyJyB9LCAndXNlcnMucGhwJykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzdWx0O1xuICAgICAgICAgIHRoaXMubmFtZVZhbHVlID0gdGhpcy5yZXNwb25zZURhdGEudXNlci5uYW1lO1xuICAgICAgICAgIHRoaXMuZW1haWxWYWx1ZSA9IHRoaXMucmVzcG9uc2VEYXRhLnVzZXIuZW1haWw7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygnaW9uVmlld0RpZExvYWQgU2lnbnVwUGFnZScpO1xuICB9XG5cbiAgbG9nb3V0KCl7XG4gICAgICB0aGlzLmhlbHBlci5sb2dvdXQoKTtcbiAgICAgIHRoaXMubmF2Q3RybC5zZXRSb290KExvZ2luUGFnZSk7XG4gIH1cblxuICBjYW5jZWwoKXtcbiAgICAgIHRoaXMubmF2Q3RybC5zZXRSb290KEhvbWVQYWdlKTtcbiAgfVxuXG4gIGxvZ2luUGFnZSgpeyB0aGlzLm5hdkN0cmwuc2V0Um9vdChMb2dpblBhZ2UpOyB9XG4gIGZvcmdvdFBhc3N3b3JkUGFnZSgpeyB0aGlzLm5hdkN0cmwuc2V0Um9vdChGb3Jnb3RQYWdlKTsgfVxuXG4gIGxpbmtUYWcoKXtcbiAgICB0aGlzLm5mYy5hZGROZGVmTGlzdGVuZXIoKCkgPT4ge1xuICAgICAgaWYodGhpcy5wbGF0Zm9ybS5pcygnY29yZG92YScpKXtcbiAgICAgICAgdGhpcy50b2FzdC5zaG93KCdzdWNjZXNzZnVsbHkgYXR0YWNoZWQgbmRlZiBsaXN0ZW5lcicsICc1MDAwJywgJ2NlbnRlcicpO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgYWxlcnQoJ3N1Y2Nlc3NmdWxseSBhdHRhY2hlZCBuZGVmIGxpc3RlbmVyJyk7XG4gICAgICB9XG4gICAgfSwgKGVycikgPT4ge1xuICAgICAgaWYodGhpcy5wbGF0Zm9ybS5pcygnY29yZG92YScpKXtcbiAgICAgICAgdGhpcy50b2FzdC5zaG93KCdlcnJvciBhdHRhY2hpbmcgbmRlZiBsaXN0ZW5lcicgKyBlcnIsICc1MDAwJywgJ2NlbnRlcicpO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgYWxlcnQoJ2Vycm9yIGF0dGFjaGluZyBuZGVmIGxpc3RlbmVyJyArIGVycik7XG4gICAgICB9XG4gICAgfSkuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgaWYodGhpcy5wbGF0Zm9ybS5pcygnY29yZG92YScpKXtcbiAgICAgICAgdGhpcy50b2FzdC5zaG93KCdyZWNlaXZlZCBuZGVmIG1lc3NhZ2UuIHRoZSB0YWcgY29udGFpbnM6ICcgKyBldmVudC50YWcsICc1MDAwJywgJ2NlbnRlcicpO1xuICAgICAgICB0aGlzLnRvYXN0LnNob3coJ2RlY29kZWQgdGFnIGlkJyArIHRoaXMubmZjLmJ5dGVzVG9IZXhTdHJpbmcoZXZlbnQudGFnLmlkKSwgJzUwMDAnLCAnY2VudGVyJyk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBhbGVydCgncmVjZWl2ZWQgbmRlZiBtZXNzYWdlLiB0aGUgdGFnIGNvbnRhaW5zOiAnICsgZXZlbnQudGFnKTtcbiAgICAgICAgYWxlcnQoJ2RlY29kZWQgdGFnIGlkJyArIHRoaXMubmZjLmJ5dGVzVG9IZXhTdHJpbmcoZXZlbnQudGFnLmlkKSk7XG4gICAgICB9XG5cbiAgICAgIGxldCBtZXNzYWdlID0gdGhpcy5uZGVmLnRleHRSZWNvcmQodGhpcy51c2VySW5mby51c2VyRW1haWwpO1xuICAgICAgdGhpcy5uZmMuc2hhcmUoW21lc3NhZ2VdKS50aGVuKHN1Y2Nlc3MgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhzdWNjZXNzKTtcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBhdHRlbXB0VXNlclJlZ2lzdGVyKCl7XG4gICAgdGhpcy5zaG93RHVwbGljYXRlVGV4dCA9IGZhbHNlO1xuICAgIGxldCBsb2FkaW5nID0gdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgICBjb250ZW50OiAnRXNwZXJlIHVuIG1vbWVudG8uLi4nXG4gICAgfSk7XG4gICAgbG9hZGluZy5wcmVzZW50KCk7XG5cbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXkpLnRoZW4odmFsdWUgPT4ge1xuICAgICAgdGhpcy51c2VySW5mbyA9IHZhbHVlO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCd1c2VySWQnLCB0aGlzLnVzZXJJbmZvLnVzZXJJZCApO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCduYW1lJywgdGhpcy5yZWdpc3Rlci52YWx1ZS5uYW1lKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZW1haWwnLCB0aGlzLnJlZ2lzdGVyLnZhbHVlLmVtYWlsKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcl90eXBlX2lkJywgJzInKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgndWlkJywnMTIzNDU2Nzg5MCcpO1xuICAgICAgaWYodmFsdWUgIT0gbnVsbCl7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndHlwZScsICdzYXZlJyk7XG4gICAgICAgIGlmKHRoaXMucmVnaXN0ZXIudmFsdWUucHdkKVxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncGFzc3dvcmQnLCB0aGlzLnJlZ2lzdGVyLnZhbHVlLnB3ZCk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3R5cGUnLCAnbmV3Jyk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncGFzc3dvcmQnLCB0aGlzLnJlZ2lzdGVyLnZhbHVlLnB3ZCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXBpU2VydmljZS5wb3N0RGF0YShmb3JtRGF0YSwgJ3VzZXJzLnBocCcpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzdWx0O1xuICAgICAgICBpZiAodGhpcy5yZXNwb25zZURhdGEuc3RhdHVzID09IFwib2tcIikge1xuICAgICAgICAgIGxldCB1c2VyQXJyYXkgPSB7XG4gICAgICAgICAgICB1c2VySWQ6IHRoaXMucmVzcG9uc2VEYXRhLmlkLFxuICAgICAgICAgICAgdXNlck5hbWU6IHRoaXMucmVzcG9uc2VEYXRhLnVzZXIubmFtZSxcbiAgICAgICAgICAgIHVzZXJFbWFpbDogdGhpcy5yZXNwb25zZURhdGEudXNlci5lbWFpbCxcbiAgICAgICAgICAgIHVzZXJUeXBlOiB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLnVzZXJfdHlwZV9pZFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXksIHVzZXJBcnJheSk7XG4gICAgICAgICAgdGhpcy5ldmVudHMucHVibGlzaCgnc2V0QmFsYW5jZScsICckJyArIHBhcnNlRmxvYXQodGhpcy5yZXNwb25zZURhdGEudXNlci5hbW91bnQpLnRvRml4ZWQoMikpO1xuICAgICAgICAgIHRoaXMubmF2Q3RybC5zZXRSb290KEhvbWVQYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMucmVzcG9uc2VEYXRhLm1zZyA9PSBcImR1cGxpY2F0ZVwiKXtcbiAgICAgICAgICB0aGlzLnNob3dEdXBsaWNhdGVUZXh0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9zaWdudXAvc2lnbnVwLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==