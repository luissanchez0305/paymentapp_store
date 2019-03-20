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
            selector: 'page-forgot',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\user\src\pages\forgot\forgot.html"*/'<!--\n  Generated template for the ForgotPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>forgot</ion-title>\n  </ion-navbar>\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n\n</ion-header>\n\n\n<ion-content padding class="masters">\n    <div text-center><img src="assets/imgs/forgotpwd.png" width="100" ></div>\n    <form [formGroup]="forgot" (ngSubmit)="attemptUserForgot()">\n      <ion-list no-lines padding-top>\n        <ion-item *ngIf="!showSent">\n          <ion-input type="email" placeholder="Email Address" formControlName="email"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button ion-button block round color="secondary" *ngIf="!showSent">Send</button>\n      <label class="lorems lorems-content" *ngIf="showSent">\n        Una nueva contraseña ha sido enviada a la direccion de correo que envio<br>Por favor, le recomendamos que la cambie tan pronto vuelva a entrar\n      </label>\n      <label class="error" *ngIf="showForgotFailText">{{ forgotFailText }} </label>\n    </form>\n\n    <div padding-top>\n    <button ion-button block color="light" clear (click)="loginPage();">If already have an account ? LOGIN</button>\n    <button ion-button block color="light" clear (click)="signupPage();">If new member ? SIGNUP</button>\n   </div>\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\user\src\pages\forgot\forgot.html"*/,
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
            selector: 'page-scanner',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\user\src\pages\scanner\scanner.html"*/'<!--\n  Generated template for the ScannerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Escanea el codigo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\user\src\pages\scanner\scanner.html"*/,
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
            selector: 'page-payment',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\user\src\pages\payment\payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton>\n    <ion-title>Haz un pago</ion-title>\n  </ion-navbar>\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n\n</ion-header>\n\n\n<ion-content padding>\n    {{ storeName }}\n\n    <form [formGroup]="pay" (ngSubmit)="attempToCharge()">\n      <ion-list no-lines padding-top>\n        <ion-item>\n          <ion-input type="number" placeholder="Precio" formControlName="price"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button ion-button block round color="secondary" type="submit" *ngIf="!paid" [disabled]="!pay.valid">Cobrar</button>\n      <label class="error" *ngIf="showPaymentFailText">{{ payFailText }} </label>\n    </form>\n    <button ion-button block round color="secondary" *ngIf="paid" (click)="goBack()">Regresar</button>\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\user\src\pages\payment\payment.html"*/,
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
            selector: 'page-account',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\user\src\pages\account\account.html"*/'<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mi cuenta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    Su balance actual es\n\n    <h1>{{ balance }}</h1>\n    <div *ngIf="showForm">\n      <form [formGroup]="balanceForm" (ngSubmit)="attempToPayMoreBalance()">\n        <ion-list no-lines padding-top>\n          <ion-item>\n            <ion-input type="number" placeholder="Monto" formControlName="amount"></ion-input>\n          </ion-item>\n        </ion-list>\n        <button ion-button full round color="secondary" type="submit" [disabled]="!balanceForm.valid">Pagar</button>\n        <label class="error" *ngIf="showPaymentResultText">{{ payResultText }} </label>\n      </form>\n    </div>\n  </ion-item>\n  <h1>Transacciones</h1>\n  <ion-grid>\n    <ion-row ion-item *ngFor="let item of items">\n      <ion-col col-2>\n        {{item.type}}\n      </ion-col>\n      <ion-col col-4>\n        {{item.store}}\n      </ion-col>\n      <ion-col col-2>\n        {{item.price}}\n      </ion-col>\n      <ion-col col-4>\n        {{item.date}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\user\src\pages\account\account.html"*/,
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
            selector: 'page-transactions',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\user\src\pages\transactions\transactions.html"*/'<!--\n  Generated template for the TransactionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Transacciones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  Su balance actual es\n  \n  <h1>{{ balance }}</h1>\n  <ion-grid>\n    <ion-row ion-item *ngFor="let item of items">\n      <ion-col col-2>\n        {{item.type}}\n      </ion-col>\n      <ion-col col-4>\n        {{item.user}}\n      </ion-col>\n      <ion-col col-2>\n        {{item.price}}\n      </ion-col>\n      <ion-col col-4>\n        {{item.date}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\user\src\pages\transactions\transactions.html"*/,
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
    function ApiServiceProvider(http) {
        this.http = http;
        console.log('Hello ApiServiceProvider Provider');
    }
    ApiServiceProvider.prototype.postData = function (data, url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].API_ENDPOINT + url, data)
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
            for (var p in data)
                if (data.hasOwnProperty(p)) {
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
                }
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].API_ENDPOINT + url + '?' + str.join("&"))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
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
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\user\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\user\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_service__["a" /* ApiServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_service__["a" /* ApiServiceProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__providers_helper__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_helper__["a" /* HelperService */]) === "function" && _j || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
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
            selector: 'page-list',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\user\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\user\src\pages\list\list.html"*/
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
            selector: 'page-home',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\user\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n</ion-header>\n\n\n<ion-content padding>\n  <p class="balance-title">Saldo actual</p>\n  <p class="balance-number">{{ balance }}</p>\n  \n  <ion-item *ngIf="showQRCode">\n    <h1>Código de venta</h1>\n    <div>\n      <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n    </div>\n  </ion-item>\n    <button ion-button end color="primary" (click)="refreshBalance();"> RECARGAR BALANCE </button>\n    \n    <button ion-button end color="primary" (click)="takePayment();"> RECIBIR PAGO </button>\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\user\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_service__["a" /* ApiServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_service__["a" /* ApiServiceProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__providers_helper__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_helper__["a" /* HelperService */]) === "function" && _h || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
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
                    'Este usuario no existe' : 'Error desconocido'));
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\user\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n\n</ion-header>\n\n\n<ion-content padding class="masters">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col ><button ion-button block class="facebookButton" (click)="fbLogin();">Login With Facebook</button></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col><button ion-button block class="instagramButton">Login With Instagram</button></ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class="hrLine"><span>Or</span></div>\n\n    <form [formGroup]="login" (ngSubmit)="attemptUserLogin()">\n      <ion-list no-lines padding-top>\n        <ion-item>\n          <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="password" placeholder="Password" formControlName="pwd"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button ion-button block round color="secondary" type="submit" [disabled]="!login.valid">Login</button>\n      <label class="error" *ngIf="showLoginFailText">{{ loginFailText }} </label>\n    </form>\n\n    <div padding-top>\n    <button ion-button block color="light" clear (click)="signupPage();">If new member ? SIGNUP</button>\n    <button ion-button block color="light" clear (click)="forgotPasswordPage();">Forgot Password</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\user\src\pages\login\login.html"*/,
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
            selector: 'page-signup',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\user\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n        <ion-buttons end *ngIf="isUserLoggedIn">\n          <button id="logout" (click)="logout()">\n            Logout\n          </button>\n        </ion-buttons>\n  </ion-navbar>\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n\n</ion-header>\n\n\n<ion-content padding class="masters">\n\n    <ion-grid>\n      <ion-row *ngIf="!isUserLoggedIn">\n        <ion-col><button ion-button block class="facebookButton"> Facebook</button></ion-col>\n        <ion-col><button ion-button block class="instagramButton"> Instagram</button></ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button block *ngIf="showLinkTagButton" (click)="linkTag()">Enlazar Tag</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class="hrLine" *ngIf="!isUserLoggedIn"><span>Or</span></div>\n    <form [formGroup]="register" (ngSubmit)="attemptUserRegister()">\n      <ion-list no-lines padding-top>\n        <ion-item>\n          <ion-input type="text" placeholder="Nombre" value="{{ nameValue }}" formControlName="name"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="email" placeholder="Email" value="{{ emailValue }}" formControlName="email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="password" placeholder="Password" formControlName="pwd"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button ion-button block round color="secondary" type="submit" [disabled]="!register.valid" *ngIf="!isUserLoggedIn">Signup</button>\n      <button ion-button block round color="secondary" type="submit" [disabled]="!register.valid" *ngIf="isUserLoggedIn">Guardar</button>\n      <label class="error" *ngIf="showDuplicateText">Este correo ya existe, intente otro</label>\n      <ion-row><a center ion-link color="primary" (click)="cancel();" *ngIf="isUserLoggedIn">Cancel</a></ion-row>\n    </form>\n    <div padding *ngIf="!isUserLoggedIn">\n      <button ion-button block color="light" clear (click)="loginPage();">If already have an account ? LOGIN</button>\n      <button ion-button block color="light" clear (click)="forgotPasswordPage();">Forgot Password</button>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\user\src\pages\signup\signup.html"*/,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9mb3Jnb3QvZm9yZ290LnRzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvZXNtNSBsYXp5IiwiLi4vLi4vc3JjIGxhenkiLCIuLi8uLi9zcmMvcGFnZXMvc2Nhbm5lci9zY2FubmVyLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL3BheW1lbnQvcGF5bWVudC50cyIsIi4uLy4uL3NyYy9wYWdlcy9hY2NvdW50L2FjY291bnQudHMiLCIuLi8uLi9zcmMvcGFnZXMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy50cyIsIi4uLy4uL3NyYy9zZXJ2aWNlcy9jb25zdGFudHMudHMiLCIuLi8uLi9zcmMvYXBwL21haW4udHMiLCIuLi8uLi9zcmMvcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlLnRzIiwiLi4vLi4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwiLi4vLi4vc3JjL3Byb3ZpZGVycy9oZWxwZXIudHMiLCIuLi8uLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCIuLi8uLi9zcmMvcGFnZXMvbGlzdC9saXN0LnRzIiwiLi4vLi4vc3JjL3BhZ2VzL2hvbWUvaG9tZS50cyIsIi4uLy4uL3NyYy9wYWdlcy9sb2dpbi9sb2dpbi50cyIsIi4uLy4uL3NyYy9wYWdlcy9zaWdudXAvc2lnbnVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQzBCO0FBQzVCO0FBQ29CO0FBQ1M7QUFFbEM7QUFDRztBQUU5Qzs7Ozs7R0FLRztBQU1IO0lBUUUsb0JBQW1CLE9BQXNCLEVBQVMsV0FBOEIsRUFBUyxTQUFvQixFQUFVLE9BQWdCLEVBQVUsSUFBWSxFQUNwSixVQUErQixFQUFVLFdBQXdCO1FBRDFFLGlCQWtCQztRQWxCa0IsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxZ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WUFBWTtxQkFDOUMsQ0FBQztvQkFFRixLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzRUFBUyxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDdkQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzlGLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLDZEQUFRLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFDRCxJQUFJLENBQUMsRUFBRSxFQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFDO29CQUM1QyxLQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2dCQUNoQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsYUFBRztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBaEtVLFVBQVU7UUFKdEIsd0VBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1dBQ0c7U0FDM0IsQ0FBQzsyT0FZNEIsMEVBQWdDLHFFQUEyQixDQUF5RDtZQUMxSCx1SUFBaUMsRUFBRywrREFBMEMsc0VBQW1EO1lBQ3RJLE9BQXFGO09BYjNGLFVBQVUsQ0FpS3RCO0lBQUQsQ0FBQztBQUFBO1NBaktZLFVBQVUsZSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgTG9hZGluZ0NvbnRyb2xsZXIgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFwaVNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZSc7XG5cbmltcG9ydCB7IExvZ2luUGFnZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luJztcbmltcG9ydCB7IFNpZ251cFBhZ2UgfSBmcm9tICcuLi9zaWdudXAvc2lnbnVwJztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBGb3Jnb3RQYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWZvcmdvdCcsXG4gIHRlbXBsYXRlVXJsOiAnZm9yZ290Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBGb3Jnb3RQYWdlIHtcbiAgcHJpdmF0ZSBmb3Jnb3QgOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBpc0RldmljZU9ubGluZSA6IGJvb2xlYW47XG4gIHB1YmxpYyBzaG93Rm9yZ290RmFpbFRleHQgOiBib29sZWFuO1xuICBwdWJsaWMgZm9yZ290RmFpbFRleHQgOiBzdHJpbmc7XG4gIHB1YmxpYyByZXNwb25zZURhdGEgOiBhbnk7XG4gIHB1YmxpYyBzaG93U2VudCA6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHB1YmxpYyBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JrLCBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwdWJsaWMgYXBpU2VydmljZSA6IEFwaVNlcnZpY2VQcm92aWRlciwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgICB0aGlzLmZvcmdvdCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3RcbiAgICB0aGlzLm5ldHdvcmsub25EaXNjb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ2lvblZpZXdEaWRMb2FkIEZvcmdvdFBhZ2UnKTtcbiAgfVxuXG4gIGF0dGVtcHRVc2VyRm9yZ290KCkge1xuICAgIGxldCBsb2FkaW5nID0gdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgY29udGVudDogJ0VzcGVyZSB1biBtb21lbnRvLi4uJ1xuICAgIH0pO1xuICAgIGxvYWRpbmcucHJlc2VudCgpO1xuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnZScsIHRoaXMuZm9yZ290LnZhbHVlLmVtYWlsKTtcbiAgICB0aGlzLmFwaVNlcnZpY2UucG9zdERhdGEoZm9ybURhdGEsJ3NlbmRfbWFpbC5waHAnKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzdWx0O1xuICAgICAgICBpZih0aGlzLnJlc3BvbnNlRGF0YS5zdGF0dXMgPT0gJ29rJyl7XG4gICAgICAgICAgdGhpcy5zaG93U2VudCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zaG93Rm9yZ290RmFpbFRleHQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNob3dGb3Jnb3RGYWlsVGV4dCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5mb3Jnb3RGYWlsVGV4dCA9IHRoaXMucmVzcG9uc2VEYXRhLm1zZyA9PSAnbm8gdXNlcicgPyAnVXN1YXJpbyBubyBleGlzdGUnIDogJ0Vycm9yIGRlc2Nvbm9jaWRvJztcbiAgICAgICAgfVxuICAgIH0sIChlcnIpID0+IHtcbiAgICAgIC8vIEVycm9yIGxvZ1xuICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICB0aGlzLnNob3dGb3Jnb3RGYWlsVGV4dCA9IHRydWU7XG4gICAgICB0aGlzLmZvcmdvdEZhaWxUZXh0ID0gZXJyO1xuICAgIH0pO1xuICB9XG5cbiAgbG9naW5QYWdlKCl7IHRoaXMubmF2Q3RybC5zZXRSb290KExvZ2luUGFnZSk7IH1cbiAgc2lnbnVwUGFnZSgpeyB0aGlzLm5hdkN0cmwuc2V0Um9vdChTaWdudXBQYWdlKTsgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvZm9yZ290L2ZvcmdvdC50cyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdGNoZWQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IDEyNztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2VzbTUgbGF6eVxuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdGNoZWQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IDE3MDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYyBsYXp5XG4vLyBtb2R1bGUgaWQgPSAxNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMsIEV2ZW50cywgUGxhdGZvcm0gfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFFSU2Nhbm5lciwgUVJTY2FubmVyU3RhdHVzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9xci1zY2FubmVyJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvaGVscGVyJztcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS90b2FzdCc7XG5cbmltcG9ydCB7IFBheW1lbnRQYWdlIH0gZnJvbSAnLi4vcGF5bWVudC9wYXltZW50JztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBTY2FubmVyUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1zY2FubmVyJyxcbiAgdGVtcGxhdGVVcmw6ICdzY2FubmVyLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTY2FubmVyUGFnZSB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHJpdmF0ZSBxclNjYW5uZXI6IFFSU2Nhbm5lcixcbiAgICBwdWJsaWMgaGVscGVyIDogSGVscGVyU2VydmljZSwgcHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSwgcHVibGljIGV2ZW50cyA6IEV2ZW50cywgcHJpdmF0ZSB0b2FzdDogVG9hc3QpIHtcblxuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgLy8gT3B0aW9uYWxseSByZXF1ZXN0IHRoZSBwZXJtaXNzaW9uIGVhcmx5XG4gICAgdGhpcy5xclNjYW5uZXIucHJlcGFyZSgpXG4gICAgICAgIC50aGVuKChzdGF0dXM6IFFSU2Nhbm5lclN0YXR1cykgPT4ge1xuICAgICAgICAgICAgIGlmIChzdGF0dXMuYXV0aG9yaXplZCkge1xuICAgICAgICAgICAgICAgLy8gY2FtZXJhIHBlcm1pc3Npb24gd2FzIGdyYW50ZWRcblxuXG4gICAgICAgICAgICAgICAvLyBzdGFydCBzY2FubmluZ1xuICAgICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tYXBwJykuY2xhc3NMaXN0LmFkZCgnc2Nhbm5lcl9iZycpO1xuICAgICAgICAgICAgICAgIGxldCBzY2FuU3ViID0gdGhpcy5xclNjYW5uZXIuc2NhbigpLnN1YnNjcmliZSgodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vLSB0ZXh0IGRlYmUgdGVuZXIgdW4ganNvbiBjb24gZWwgaWQgZGUgbGEgdGllbmRhIHkgZWwgbm9tYnJlXG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgc2NhbkluZm8gPSBKU09OLnBhcnNlKHRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVscGVyLnVzZXJOYW1lID0gc2NhbkluZm8udXNlcjtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlbHBlci51c2VySWQgPSBzY2FuSW5mby51c2VySWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnFyU2Nhbm5lci5oaWRlKCk7IC8vIGhpZGUgY2FtZXJhIHByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICBzY2FuU3ViLnVuc3Vic2NyaWJlKCk7IC8vIHN0b3Agc2Nhbm5pbmdcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdkN0cmwucHVzaChQYXltZW50UGFnZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucGxhdGZvcm0uaXMoJ2NvcmRvdmEnKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0LnNob3coJ0hhIG9jdXJyaWRvIHVuIGVycm9yLiBJbnRlbnRlIG51ZXZhbWVudGUgKCcrZSsnKScsICc1MDAwJywgJ2NlbnRlcicpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdkN0cmwucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0hhIG9jdXJyaWRvIHVuIGVycm9yLiBJbnRlbnRlIG51ZXZhbWVudGUgKCcrZSsnKScpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cy5kZW5pZWQpIHtcbiAgICAgICAgICAgICAgIC8vIGNhbWVyYSBwZXJtaXNzaW9uIHdhcyBwZXJtYW5lbnRseSBkZW5pZWRcbiAgICAgICAgICAgICAgIC8vIHlvdSBtdXN0IHVzZSBRUlNjYW5uZXIub3BlblNldHRpbmdzKCkgbWV0aG9kIHRvIGd1aWRlIHRoZSB1c2VyIHRvIHRoZSBzZXR0aW5ncyBwYWdlXG4gICAgICAgICAgICAgICAvLyB0aGVuIHRoZXkgY2FuIGdyYW50IHRoZSBwZXJtaXNzaW9uIGZyb20gdGhlcmVcbiAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgLy8gcGVybWlzc2lvbiB3YXMgZGVuaWVkLCBidXQgbm90IHBlcm1hbmVudGx5LiBZb3UgY2FuIGFzayBmb3IgcGVybWlzc2lvbiBhZ2FpbiBhdCBhIGxhdGVyIHRpbWUuXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIHRoaXMucXJTY2FubmVyLnNob3coKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZTogYW55KSA9PiB7XG4gICAgICBpZih0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpe1xuICAgICAgICB0aGlzLnRvYXN0LnNob3coJ0hhIG9jdXJyaWRvIHVuIGVycm9yLiBJbnRlbnRlIG51ZXZhbWVudGUgKCcrZSsnKScsICcxMDAwMCcsICdjZW50ZXInKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3NjYW5uZXIvc2Nhbm5lci50cyIsImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iYXJjb2RlLXNjYW5uZXInO1xuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3RvYXN0JztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgTG9hZGluZ0NvbnRyb2xsZXIsIEV2ZW50cywgUGxhdGZvcm0gfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgQXBpU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvaGVscGVyJztcbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi4vaG9tZS9ob21lJztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBQYXltZW50UGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1wYXltZW50JyxcbiAgdGVtcGxhdGVVcmw6ICdwYXltZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50UGFnZSB7XG4gIHByaXZhdGUgcGF5IDogRm9ybUdyb3VwO1xuICBwdWJsaWMgaXNEZXZpY2VPbmxpbmUgOiBib29sZWFuO1xuICBwdWJsaWMgc2hvd1BheW1lbnRGYWlsVGV4dCA6IGJvb2xlYW47XG4gIHB1YmxpYyBwYXlGYWlsVGV4dCA6IHN0cmluZztcbiAgcHVibGljIHVzZXJOYW1lIDogc3RyaW5nO1xuICBwdWJsaWMgdXNlcklkIDogc3RyaW5nO1xuICBwdWJsaWMgcmVzcG9uc2VEYXRhIDogYW55O1xuICBwdWJsaWMgY2xpbmV0czogYW55W10gPSBbXTtcbiAgcHVibGljIHNlbGVjdGVkQ2xpZW50OiBhbnk7XG4gIHB1YmxpYyBjbGllbnRGb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgcGFpZCA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHVzZXJJbmZvOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmssIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgdG9hc3Q6IFRvYXN0LCBwdWJsaWMgbG9hZGluZ0N0cmw6IExvYWRpbmdDb250cm9sbGVyLCBwdWJsaWMgYXBpU2VydmljZSA6IEFwaVNlcnZpY2VQcm92aWRlciwgcHVibGljIGV2ZW50cyA6IEV2ZW50cyxcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSwgcHVibGljIGhlbHBlciA6IEhlbHBlclNlcnZpY2UvKnByaXZhdGUgYmFyY29kZVNjYW5uZXI6IEJhcmNvZGVTY2FubmVyLCovKSB7XG4gICAgdGhpcy5wYXkgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgcHJpY2U6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgIHF0eTogWycxJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3RcbiAgICB0aGlzLm5ldHdvcmsub25EaXNjb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMudXNlck5hbWUgPSBcIkN1YWwgZXMgbGEgY2FudGlkYWQgZGUgc3UgdHJhbnNhY2Npb24gY29uIFwiICsgaGVscGVyLnVzZXJOYW1lICsgXCI/XCI7XG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygnaW9uVmlld0RpZExvYWQgUGF5bWVudFBhZ2UnKTtcbiAgfVxuXG4gIGdvQmFjaygpe1xuICAgIHRoaXMubmF2Q3RybC5zZXRSb290KEhvbWVQYWdlKTtcbiAgICB0aGlzLm5hdkN0cmwucG9wVG9Sb290KCk7XG4gIH1cblxuICBhdHRlbXBUb0NoYXJnZSgpe1xuICAgIHRoaXMuc2hvd1BheW1lbnRGYWlsVGV4dCA9IGZhbHNlO1xuICAgIGxldCBsb2FkaW5nID0gdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgY29udGVudDogJ0VzcGVyZSB1biBtb21lbnRvLi4uJ1xuICAgIH0pO1xuICAgIGxvYWRpbmcucHJlc2VudCgpO1xuXG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMudXNlckxvZ2dlZEluS2V5KS50aGVuKHZhbHVlID0+IHtcbiAgICAgIHRoaXMudXNlckluZm8gPSB2YWx1ZTtcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncCcsIHRoaXMucGF5LnZhbHVlLnByaWNlKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdxJywgJzEnKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdjJywgU3RyaW5nKHRoaXMuaGVscGVyLnVzZXJJZCkpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3UnLCB0aGlzLnVzZXJJbmZvLnVzZXJJZCk7XG5cbiAgICAgICAgLy8tIGFsIGhhY2VyIHN1Ym1pdCBkZWJlIGRlIGNvcnJlciBhcGkgcGFyYSBkZXNjb250YXIgY2FudGlkYWQgZW4gJCQgZGUgbGEgY3VlbnRhIGRlbCB1c3VzYXJpbyBsb2d1ZWFkb1xuICAgICAgICB0aGlzLmFwaVNlcnZpY2UucG9zdERhdGEoZm9ybURhdGEsICdwYXliaWxsLnBocCcpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXN1bHQ7XG4gICAgICAgICAgICB0aGlzLnBhaWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMucmVzcG9uc2VEYXRhLnN0YXR1cyA9PSBcIm9rXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG90YWwgPSB0aGlzLnBheS52YWx1ZS5xdHkgKiB0aGlzLnBheS52YWx1ZS5wcmljZTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpe1xuICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdC5zaG93KCdTdSB0cmFuc2FjY2lvbiBwb3IgJCcgKyB0b3RhbCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyBhICcgKyB0aGlzLmhlbHBlci51c2VyTmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyBzZSBoYSBoZWNobyBjb24gZXhpdG8uXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1N1IGJhbGFuY2UgYWN0dWFsIGVzIGRlICQnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEuYmFsYW5jZSwgJzE1MDAwJywgJ2NlbnRlcicpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goXCJzZXRCYWxhbmNlXCIsICckJyArIHBhcnNlRmxvYXQodGhpcy5yZXNwb25zZURhdGEuYmFsYW5jZSkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoSG9tZVBhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2Q3RybC5wb3BUb1Jvb3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BheW1lbnRGYWlsVGV4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICB0aGlzLnBheUZhaWxUZXh0ID0gJ1N1IHRyYW5zYWNjaW9uIHBvciAkJyArIHRvdGFsICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIGRlICcgKyB0aGlzLmhlbHBlci51c2VyTmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyBzZSBoYSBoZWNobyBjb24gZXhpdG8uXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1N1IGJhbGFuY2UgYWN0dWFsIGVzIGRlICQnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEuYmFsYW5jZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMucHVibGlzaCgnc2V0QmFsYW5jZScsICckJyArIHBhcnNlRmxvYXQodGhpcy5yZXNwb25zZURhdGEuYmFsYW5jZSkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zaG93UGF5bWVudEZhaWxUZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5wYXlGYWlsVGV4dCA9IHRoaXMucmVzcG9uc2VEYXRhLm1zZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICAgIHRoaXMucGFpZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zaG93UGF5bWVudEZhaWxUZXh0ID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnBheUZhaWxUZXh0ID0gJ2Vycm9yJztcbiAgICAgIH0pO1xuICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgIHRoaXMucGFpZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd1BheW1lbnRGYWlsVGV4dCA9IHRydWU7XG4gICAgICAgIHRoaXMucGF5RmFpbFRleHQgPSBlcnIubXNnO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvcGF5bWVudC9wYXltZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgTG9hZGluZ0NvbnRyb2xsZXIsIEV2ZW50cyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9oZWxwZXInO1xuLy9pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmFyY29kZS1zY2FubmVyJztcblxuLy9pbXBvcnQgeyBUb2FzdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdG9hc3QnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIEFjY291bnRQYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWFjY291bnQnLFxuICB0ZW1wbGF0ZVVybDogJ2FjY291bnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFjY291bnRQYWdlIHtcbiAgcHVibGljIGJhbGFuY2VGb3JtIDogRm9ybUdyb3VwO1xuICBwdWJsaWMgYmFsYW5jZSA6IHN0cmluZztcbiAgcHVibGljIHNob3dGb3JtIDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNEZXZpY2VPbmxpbmUgOiBib29sZWFuO1xuICBwdWJsaWMgcmVzcG9uc2VEYXRhIDogYW55O1xuICBwdWJsaWMgcGF5UmVzdWx0VGV4dCA6IHN0cmluZztcbiAgcHVibGljIHNob3dQYXltZW50UmVzdWx0VGV4dCA6IGJvb2xlYW47XG4gIHB1YmxpYyB0cmFuc2FjdGlvbnMgOiBhbnk7XG4gIHB1YmxpYyB1c2VySW5mbzogYW55O1xuICBwdWJsaWMgaXRlbXM6IEFycmF5PHtpZDogbnVtYmVyLCB0eXBlOiBzdHJpbmcsIHN0b3JlOiBzdHJpbmcsIHByaWNlOiBzdHJpbmcsIGRhdGU6IHN0cmluZ30+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmssIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcyxcbiAgICBwdWJsaWMgbG9hZGluZ0N0cmw6IExvYWRpbmdDb250cm9sbGVyLCBwdWJsaWMgYXBpU2VydmljZSA6IEFwaVNlcnZpY2VQcm92aWRlciwgcHVibGljIGV2ZW50cyA6IEV2ZW50cyxcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBoZWxwZXI6IEhlbHBlclNlcnZpY2UgLyosIHB1YmxpYyBiYXJjb1NjYW5uZXI6IEJhcmNvZGVTY2FubmVyLCBwcml2YXRlIHRvYXN0OiBUb2FzdCovKSB7XG4gICAgdGhpcy5zaG93UGF5bWVudFJlc3VsdFRleHQgPSBmYWxzZTtcbiAgICB0aGlzLnBheVJlc3VsdFRleHQgPSBcIlwiO1xuXG4gICAgdGhpcy5iYWxhbmNlID0gdGhpcy5oZWxwZXIuYmFsYW5jZTtcbiAgICB0aGlzLmJhbGFuY2VGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgIGFtb3VudDpbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBkaXNjb25uZWN0XG4gICAgdGhpcy5uZXR3b3JrLm9uRGlzY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBjb25uZWN0aW9uXG4gICAgdGhpcy5uZXR3b3JrLm9uQ29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnVzZXJMb2dnZWRJbktleSkudGhlbigodmFsdWUpPT57XG4gICAgICB0aGlzLnVzZXJJbmZvID0gdmFsdWU7XG4gICAgICB0aGlzLnVwZGF0ZVRyYW5zYWN0aW9ucygpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlVHJhbnNhY3Rpb25zKCl7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHZhciBkYXRhID0geyAndSc6IHRoaXMudXNlckluZm8udXNlcklkLCB0OiAnYnV5JyB9XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGEoZGF0YSwgJ3RyYW5zYWN0aW9ucy5waHAnKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICB0aGlzLnRyYW5zYWN0aW9ucyA9IHJlc3VsdDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmFuc2FjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gdGhpcy50cmFuc2FjdGlvbnNbaV07XG4gICAgICAgIGxldCB0ZGF0ZSA9IG5ldyBEYXRlKHRyYW5zYWN0aW9uLmRhdGVfY3JlYXRlZCk7XG5cbiAgICAgICAgbGV0IG5hbWUgPSAnJztcbiAgICAgICAgaWYodHJhbnNhY3Rpb24uaW5fbmFtZS5sZW5ndGggPCA3KXtcbiAgICAgICAgICBuYW1lID0gdHJhbnNhY3Rpb24uaW5fbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIG5hbWUgPSB0cmFuc2FjdGlvbi5pbl9uYW1lLnN1YnN0cigwLCA3KSArICcuLi4nXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByaWNlRml4ZWQgPSB0cmFuc2FjdGlvbi50cmFuc2FjdGlvbl90eXBlX2lkID09IDMgPyAoJyQnICsgcGFyc2VGbG9hdCh0cmFuc2FjdGlvbi5wcmljZSkudG9GaXhlZCgyKSkgOiAnKCQnICsgcGFyc2VGbG9hdCh0cmFuc2FjdGlvbi5wcmljZSkudG9GaXhlZCgyKSArICcpJztcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICBpZDogdHJhbnNhY3Rpb24uaWQsXG4gICAgICAgICAgdHlwZTogdHJhbnNhY3Rpb24udHJhbnNhY3Rpb25fdHlwZV9pZCA9PSAzID8gJ0QnIDogJ0MnLFxuICAgICAgICAgIHN0b3JlOiB0cmFuc2FjdGlvbi50cmFuc2FjdGlvbl90eXBlX2lkID09IDMgPyAnLS0tLS0tLScgOiBuYW1lLFxuICAgICAgICAgIHByaWNlOiBwcmljZUZpeGVkLFxuICAgICAgICAgIGRhdGU6IHRkYXRlLmdldERhdGUoKSArICctJyArICh0ZGF0ZS5nZXRNb250aCgpICsgMSkgKyAnICcgKyB0ZGF0ZS5nZXRIb3VycygpICsgJzonICsgdGRhdGUuZ2V0TWludXRlcygpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvd1BheU1vcmVCYWxhbmNlRm9ybSgpe1xuICAgIHRoaXMuc2hvd0Zvcm0gPSB0cnVlO1xuICB9XG5cbiAgYXR0ZW1wVG9QYXlNb3JlQmFsYW5jZSgpe1xuICAgIGxldCBsb2FkaW5nID0gdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgY29udGVudDogJ0VzcGVyZSB1biBtb21lbnRvLi4uJ1xuICAgIH0pO1xuICAgIGxvYWRpbmcucHJlc2VudCgpO1xuICAgIHRoaXMuc2hvd1BheW1lbnRSZXN1bHRUZXh0ID0gZmFsc2U7XG5cbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXkpLnRoZW4odmFsdWUgPT4ge1xuICAgICAgdGhpcy51c2VySW5mbyA9IHZhbHVlO1xuICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2EnLCBwYXJzZUZsb2F0KHRoaXMuYmFsYW5jZUZvcm0udmFsdWUuYW1vdW50KS50b0ZpeGVkKDIpKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgndScsIHRoaXMudXNlckluZm8udXNlcklkKTtcblxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnBvc3REYXRhKGZvcm1EYXRhLCAncGF5bW9yZWJhbGFuY2UucGhwJykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzdWx0O1xuICAgICAgICAgIHRoaXMuc2hvd1BheW1lbnRSZXN1bHRUZXh0ID0gdHJ1ZTtcblxuICAgICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICAgIGlmICh0aGlzLnJlc3BvbnNlRGF0YS5zdGF0dXMgPT0gXCJva1wiKSB7XG4gICAgICAgICAgICB2YXIgYmFsYW5jZVZhbCA9ICckJyArIHBhcnNlRmxvYXQodGhpcy5yZXNwb25zZURhdGEuYmFsYW5jZSkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIHRoaXMucGF5UmVzdWx0VGV4dCA9ICdTdSB0cmFuc2FjY2lvbiBzZSBoYSBoZWNobyBjb24gZXhpdG8uXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU3UgbnVldm8gc2FsZG8gZXMgJyArIGJhbGFuY2VWYWw7XG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKCdzZXRCYWxhbmNlJywgYmFsYW5jZVZhbCk7XG4gICAgICAgICAgICB0aGlzLmJhbGFuY2UgPSBiYWxhbmNlVmFsO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUcmFuc2FjdGlvbnMoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgdGhpcy5wYXlSZXN1bHRUZXh0ID0gdGhpcy5yZXNwb25zZURhdGEubXNnO1xuICAgICAgICAgIH1cbiAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICBsb2FkaW5nLmRpc21pc3MoKTtcbiAgICAgICAgICB0aGlzLnNob3dQYXltZW50UmVzdWx0VGV4dCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5wYXlSZXN1bHRUZXh0ID0gJ0hhIG9jdXJyaWRvIHVuIGVycm9yOiAnICsgZXJyLnN0YXR1cztcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvYWNjb3VudC9hY2NvdW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgQXBpU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2hlbHBlcic7XG5cbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgVHJhbnNhY3Rpb25zUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS10cmFuc2FjdGlvbnMnLFxuICB0ZW1wbGF0ZVVybDogJ3RyYW5zYWN0aW9ucy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb25zUGFnZSB7XG4gIHB1YmxpYyBpc0RldmljZU9ubGluZSA6IGJvb2xlYW47XG4gIHB1YmxpYyBiYWxhbmNlIDogc3RyaW5nO1xuICBwdWJsaWMgdHJhbnNhY3Rpb25zIDogYW55O1xuICBwdWJsaWMgdXNlckluZm86IGFueTtcbiAgcHVibGljIGl0ZW1zOiBBcnJheTx7aWQ6IG51bWJlciwgdXNlcjogc3RyaW5nLCBwcmljZTogc3RyaW5nLCBkYXRlOiBzdHJpbmd9PjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLCBwdWJsaWMgYXBpU2VydmljZSA6IEFwaVNlcnZpY2VQcm92aWRlciwgXG4gIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgbmV0d29yazogTmV0d29yaywgcHJpdmF0ZSBoZWxwZXI6IEhlbHBlclNlcnZpY2UpIHtcbiAgICBcbiAgICB0aGlzLmJhbGFuY2UgPSB0aGlzLmhlbHBlci5iYWxhbmNlO1xuICAgIFxuICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgZGlzY29ubmVjdFxuICAgIHRoaXMubmV0d29yay5vbkRpc2Nvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgIHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMudXNlckxvZ2dlZEluS2V5KS50aGVuKCh2YWx1ZSk9PntcbiAgICAgIHRoaXMudXNlckluZm8gPSB2YWx1ZTtcbiAgICAgIHZhciBkYXRhID0geyAndSc6IHRoaXMudXNlckluZm8udXNlcklkLCB0eXBlOiAnc2VsbCcgfVxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGEoZGF0YSwgJ3RyYW5zYWN0aW9ucy5waHAnKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zID0gcmVzdWx0O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJhbnNhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gdGhpcy50cmFuc2FjdGlvbnNbaV07XG4gICAgICAgICAgbGV0IHRkYXRlID0gbmV3IERhdGUodHJhbnNhY3Rpb24uZGF0ZV9jcmVhdGVkKTtcbiAgICAgICAgICBcbiAgICAgICAgICBsZXQgbmFtZSA9ICcnO1xuICAgICAgICAgIGlmKHRyYW5zYWN0aW9uLm91dF9uYW1lLmxlbmd0aCA8IDEwKXtcbiAgICAgICAgICAgIG5hbWUgPSB0cmFuc2FjdGlvbi5vdXRfbmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIG5hbWUgPSB0cmFuc2FjdGlvbi5vdXRfbmFtZS5zdWJzdHIoMCwgMTApICsgJy4uLidcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHByaWNlRml4ZWQgPSAnJCcgKyBwYXJzZUZsb2F0KHRyYW5zYWN0aW9uLnByaWNlKS50b0ZpeGVkKDIpO1xuICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICBpZDogdHJhbnNhY3Rpb24uaWQsXG4gICAgICAgICAgICB1c2VyOiBuYW1lLFxuICAgICAgICAgICAgcHJpY2U6IHByaWNlRml4ZWQsXG4gICAgICAgICAgICBkYXRlOiB0ZGF0ZS5nZXREYXRlKCkgKyAnLScgKyAodGRhdGUuZ2V0TW9udGgoKSArIDEpICsgJyAnICsgdGRhdGUuZ2V0SG91cnMoKSArICc6JyArIHRkYXRlLmdldE1pbnV0ZXMoKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy50cyIsImV4cG9ydCB2YXIgQ29uc3RhbnRzID0ge1xyXG4gICAgQVBJX0VORFBPSU5UIDogJ2h0dHBzOi8vd3d3LmVzZmVyYXNvbHVjaW9uZXMuY29tL2FwaS9wYXltZW50L2FwaS8nLFxyXG4gICAgdXNlckxvZ2dlZEluS2V5IDogJ3VzZXJMb2dnZWRJbicsXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvY29uc3RhbnRzLnRzIiwiaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwLm1vZHVsZSc7XG5cbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbWFpbi50cyIsImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuXG4vKlxuICBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBBcGlTZXJ2aWNlUHJvdmlkZXIgcHJvdmlkZXIuXG5cbiAgU2VlIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9kZXBlbmRlbmN5LWluamVjdGlvbiBmb3IgbW9yZSBpbmZvIG9uIHByb3ZpZGVyc1xuICBhbmQgQW5ndWxhciBESS5cbiovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZVByb3ZpZGVyIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCkge1xuICAgIGNvbnNvbGUubG9nKCdIZWxsbyBBcGlTZXJ2aWNlUHJvdmlkZXIgUHJvdmlkZXInKTtcbiAgfVxuXG4gIHBvc3REYXRhKGRhdGEsIHVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmh0dHAucG9zdChDb25zdGFudHMuQVBJX0VORFBPSU5UICsgdXJsLCBkYXRhKVxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RGF0YShkYXRhLCB1cmwpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgIHZhciBzdHIgPSBbXTtcbiAgICAgIGZvciAodmFyIHAgaW4gZGF0YSlcbiAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICBzdHIucHVzaChlbmNvZGVVUklDb21wb25lbnQocCkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW3BdKSk7XG4gICAgICAgIH1cblxuICAgICAgdGhpcy5odHRwLmdldChDb25zdGFudHMuQVBJX0VORFBPSU5UICsgdXJsKyc/JytzdHIuam9pbihcIiZcIikpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UudHMiLCJpbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBFcnJvckhhbmRsZXIsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJb25pY1N0b3JhZ2VNb2R1bGUgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBJb25pY0FwcCwgSW9uaWNFcnJvckhhbmRsZXIsIElvbmljTW9kdWxlIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG4vL2ltcG9ydCB7IEZhY2Vib29rIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9mYWNlYm9vayc7XG5pbXBvcnQgeyBRUlNjYW5uZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3FyLXNjYW5uZXInO1xuXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdG9hc3QnO1xuXG5pbXBvcnQgeyBNeUFwcCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4uL3BhZ2VzL2hvbWUvaG9tZSc7XG5pbXBvcnQgeyBMaXN0UGFnZSB9IGZyb20gJy4uL3BhZ2VzL2xpc3QvbGlzdCc7XG5pbXBvcnQgeyBMb2dpblBhZ2UgfSBmcm9tICcuLi9wYWdlcy9sb2dpbi9sb2dpbic7XG5pbXBvcnQgeyBTaWdudXBQYWdlIH0gZnJvbSAnLi4vcGFnZXMvc2lnbnVwL3NpZ251cCc7XG5pbXBvcnQgeyBGb3Jnb3RQYWdlIH0gZnJvbSAnLi4vcGFnZXMvZm9yZ290L2ZvcmdvdCc7XG5pbXBvcnQgeyBBY2NvdW50UGFnZSB9IGZyb20gJy4uL3BhZ2VzL2FjY291bnQvYWNjb3VudCc7XG5pbXBvcnQgeyBQYXltZW50UGFnZSB9IGZyb20gJy4uL3BhZ2VzL3BheW1lbnQvcGF5bWVudCc7XG5pbXBvcnQgeyBTY2FubmVyUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3NjYW5uZXIvc2Nhbm5lcic7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbnNQYWdlIH0gZnJvbSAnLi4vcGFnZXMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucyc7XG5cbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3RhdHVzLWJhcic7XG5pbXBvcnQgeyBTcGxhc2hTY3JlZW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NwbGFzaC1zY3JlZW4nO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy9oZWxwZXInO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuLi9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5neFFSQ29kZU1vZHVsZSB9IGZyb20gJ25neC1xcmNvZGUyJztcbmltcG9ydCB7IE5GQywgTmRlZiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmZjJztcbmltcG9ydCB7IEluQXBwUHVyY2hhc2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2luLWFwcC1wdXJjaGFzZSc7XG4vL2ltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iYXJjb2RlLXNjYW5uZXInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNeUFwcCxcbiAgICBIb21lUGFnZSxcbiAgICBMaXN0UGFnZSxcbiAgICBMb2dpblBhZ2UsXG4gICAgU2lnbnVwUGFnZSxcbiAgICBGb3Jnb3RQYWdlLFxuICAgIEFjY291bnRQYWdlLFxuICAgIFBheW1lbnRQYWdlLFxuICAgIFNjYW5uZXJQYWdlLFxuICAgIFRyYW5zYWN0aW9uc1BhZ2VcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUuZm9yUm9vdChNeUFwcCksXG4gICAgSW9uaWNTdG9yYWdlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE5neFFSQ29kZU1vZHVsZVxuICBdLFxuICBib290c3RyYXA6IFtJb25pY0FwcF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIE15QXBwLFxuICAgIEhvbWVQYWdlLFxuICAgIExpc3RQYWdlLFxuICAgIExvZ2luUGFnZSxcbiAgICBTaWdudXBQYWdlLFxuICAgIEZvcmdvdFBhZ2UsXG4gICAgQWNjb3VudFBhZ2UsXG4gICAgUGF5bWVudFBhZ2UsXG4gICAgU2Nhbm5lclBhZ2UsXG4gICAgVHJhbnNhY3Rpb25zUGFnZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBTdGF0dXNCYXIsXG4gICAgU3BsYXNoU2NyZWVuLFxuICAgIEhlbHBlclNlcnZpY2UsXG4gICAgTmV0d29yayxcbiAgICAvL0ZhY2Vib29rLFxuICAgIHtwcm92aWRlOiBFcnJvckhhbmRsZXIsIHVzZUNsYXNzOiBJb25pY0Vycm9ySGFuZGxlcn0sXG4gICAgQXBpU2VydmljZVByb3ZpZGVyLFxuICAgIFFSU2Nhbm5lcixcbiAgICBUb2FzdCxcbiAgICBORkMsXG4gICAgTmRlZixcbiAgICBJbkFwcFB1cmNoYXNlXG4gICAgLy9CYXJjb2RlU2Nhbm5lclxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5cclxuZXhwb3J0IGNsYXNzIEhlbHBlclNlcnZpY2Uge1xyXG4gICAgcHVibGljIGJhbGFuY2U6IHN0cmluZztcclxuICAgIHB1YmxpYyB1c2VyTmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHVzZXJJZDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSl7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlID0gJy0tLS0nO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEJhbGFuY2UoYWN0dWFsQmFsYW5jZSl7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlID0gYWN0dWFsQmFsYW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRVc2VySW5mbyhhY3R1YWxVc2VyTmFtZSwgYWN0dWFsVXNlcklkKXtcclxuICAgICAgICB0aGlzLnVzZXJOYW1lID0gYWN0dWFsVXNlck5hbWU7XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSBhY3R1YWxVc2VySWQ7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCl7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlID0gJy0tLS0nO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoQ29uc3RhbnRzLnVzZXJMb2dnZWRJbktleSwgbnVsbCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvdmlkZXJzL2hlbHBlci50cyIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXYsIFBsYXRmb3JtLCBMb2FkaW5nQ29udHJvbGxlciwgRXZlbnRzIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N0YXR1cy1iYXInO1xuaW1wb3J0IHsgU3BsYXNoU2NyZWVuIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zcGxhc2gtc2NyZWVuJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgQXBpU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvaGVscGVyJztcblxuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuLi9wYWdlcy9ob21lL2hvbWUnO1xuaW1wb3J0IHsgQWNjb3VudFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9hY2NvdW50L2FjY291bnQnO1xuaW1wb3J0IHsgTG9naW5QYWdlIH0gZnJvbSAnLi4vcGFnZXMvbG9naW4vbG9naW4nO1xuaW1wb3J0IHsgU2lnbnVwUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3NpZ251cC9zaWdudXAnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25zUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICdhcHAuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBNeUFwcCB7XG4gIEBWaWV3Q2hpbGQoTmF2KSBuYXY6IE5hdjtcblxuICByb290UGFnZTogYW55ID0gSG9tZVBhZ2U7XG4gIHVzZXJJbmZvOiBhbnk7XG4gIHJlc3BvbnNlRGF0YTphbnk7XG5cbiAgcGFnZXM6IEFycmF5PHt0aXRsZTogc3RyaW5nLCBjb21wb25lbnQ6IGFueSwgdHlwZTogc3RyaW5nLCBpY29uOiBzdHJpbmd9PjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLCBwdWJsaWMgc3RhdHVzQmFyOiBTdGF0dXNCYXIsIHB1YmxpYyBzcGxhc2hTY3JlZW46IFNwbGFzaFNjcmVlbiwgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLFxuICAgIHB1YmxpYyBhcGlTZXJ2aWNlIDogQXBpU2VydmljZVByb3ZpZGVyLCBwdWJsaWMgbG9hZGluZ0N0cmw6IExvYWRpbmdDb250cm9sbGVyLCBwdWJsaWMgZXZlbnRzIDogRXZlbnRzLCBwdWJsaWMgaGVscGVyIDogSGVscGVyU2VydmljZSkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZUFwcCgpO1xuXG4gICAgLy8gdXNlZCBmb3IgYW4gZXhhbXBsZSBvZiBuZ0ZvciBhbmQgbmF2aWdhdGlvblxuICAgIHRoaXMucGFnZXMgPSBbXG4gICAgICB7IHRpdGxlOiAnSG9tZScsIGNvbXBvbmVudDogSG9tZVBhZ2UsIHR5cGU6ICdyb290JywgaWNvbjogJycgfSxcbiAgICAgIHsgdGl0bGU6ICdNaSBjdWVudGEnLCBjb21wb25lbnQ6IEFjY291bnRQYWdlLCB0eXBlOiAncHVzaCcsIGljb246ICcnIH0sXG4gICAgICB7IHRpdGxlOiAnTWlzIFZlbnRhcycsIGNvbXBvbmVudDogVHJhbnNhY3Rpb25zUGFnZSwgdHlwZTogJ3B1c2gnLCBpY29uOiAnJyB9LFxuICAgICAgeyB0aXRsZTogJ1BlcmZpbCcsIGNvbXBvbmVudDogU2lnbnVwUGFnZSwgdHlwZTogJ3Jvb3QnLCBpY29uOiAnJyB9LFxuICAgICAgeyB0aXRsZTogJ0xvZ291dCcsIGNvbXBvbmVudDogbnVsbCwgdHlwZTogJ2xvZ291dCcsIGljb246ICdsb2ctb3V0JyB9XG4gICAgXTtcbiAgICBwbGF0Zm9ybS5yZWFkeSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXkpLnRoZW4oKHZhbHVlKT0+e1xuICAgICAgICAgIGlmKHZhbHVlID09IG51bGwpe1xuICAgICAgICAgICAgdGhpcy5uYXYuc2V0Um9vdChMb2dpblBhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgbGV0IGxvYWRpbmcgPSB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZSh7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICdFc3BlcmUgdW4gbW9tZW50by4uLidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbG9hZGluZy5wcmVzZW50KCk7XG4gICAgICAgICAgICB0aGlzLnVzZXJJbmZvID0gdmFsdWU7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHsgJ2lkJzogdGhpcy51c2VySW5mby51c2VySWQsICd0eXBlJzogJ3VzZXInIH1cbiAgICAgICAgICAgIHRoaXMuYXBpU2VydmljZS5nZXREYXRhKGRhdGEsICd1c2Vycy5waHAnKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgdGhpcy5ldmVudHMucHVibGlzaChcInNldEJhbGFuY2VcIiwgJyQnICsgdGhpcy5yZXNwb25zZURhdGEudXNlci5hbW91bnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIHRoaXMubmF2LnNldFJvb3QoTG9naW5QYWdlKTtcbiAgICAgICAgfSk7O1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUFwcCgpIHtcbiAgICB0aGlzLnBsYXRmb3JtLnJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgICAvLyBPa2F5LCBzbyB0aGUgcGxhdGZvcm0gaXMgcmVhZHkgYW5kIG91ciBwbHVnaW5zIGFyZSBhdmFpbGFibGUuXG4gICAgICAvLyBIZXJlIHlvdSBjYW4gZG8gYW55IGhpZ2hlciBsZXZlbCBuYXRpdmUgdGhpbmdzIHlvdSBtaWdodCBuZWVkLlxuICAgICAgdGhpcy5zdGF0dXNCYXIuc3R5bGVEZWZhdWx0KCk7XG4gICAgICB0aGlzLnNwbGFzaFNjcmVlbi5oaWRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuUGFnZShwYWdlKSB7XG4gICAgLy8gUmVzZXQgdGhlIGNvbnRlbnQgbmF2IHRvIGhhdmUganVzdCB0aGlzIHBhZ2VcbiAgICAvLyB3ZSB3b3VsZG4ndCB3YW50IHRoZSBiYWNrIGJ1dHRvbiB0byBzaG93IGluIHRoaXMgc2NlbmFyaW9cbiAgICBpZihwYWdlLnR5cGUgPT0gJ2xvZ291dCcpXG4gICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKCdsb2dvdXQnKTtcbiAgICBlbHNlIGlmKHBhZ2UudHlwZSA9PSAncm9vdCcpXG4gICAgICB0aGlzLm5hdi5zZXRSb290KHBhZ2UuY29tcG9uZW50KTtcbiAgICBlbHNlXG4gICAgICB0aGlzLm5hdi5wdXNoKHBhZ2UuY29tcG9uZW50KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICdsaXN0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExpc3RQYWdlIHtcbiAgc2VsZWN0ZWRJdGVtOiBhbnk7XG4gIGljb25zOiBzdHJpbmdbXTtcbiAgaXRlbXM6IEFycmF5PHt0aXRsZTogc3RyaW5nLCBub3RlOiBzdHJpbmcsIGljb246IHN0cmluZ30+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMpIHtcbiAgICAvLyBJZiB3ZSBuYXZpZ2F0ZWQgdG8gdGhpcyBwYWdlLCB3ZSB3aWxsIGhhdmUgYW4gaXRlbSBhdmFpbGFibGUgYXMgYSBuYXYgcGFyYW1cbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG5hdlBhcmFtcy5nZXQoJ2l0ZW0nKTtcblxuICAgIC8vIExldCdzIHBvcHVsYXRlIHRoaXMgcGFnZSB3aXRoIHNvbWUgZmlsbGVyIGNvbnRlbnQgZm9yIGZ1bnppZXNcbiAgICB0aGlzLmljb25zID0gWydmbGFzaycsICd3aWZpJywgJ2JlZXInLCAnZm9vdGJhbGwnLCAnYmFza2V0YmFsbCcsICdwYXBlci1wbGFuZScsXG4gICAgJ2FtZXJpY2FuLWZvb3RiYWxsJywgJ2JvYXQnLCAnYmx1ZXRvb3RoJywgJ2J1aWxkJ107XG5cbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMTsgaSsrKSB7XG4gICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICB0aXRsZTogJ0l0ZW0gJyArIGksXG4gICAgICAgIG5vdGU6ICdUaGlzIGlzIGl0ZW0gIycgKyBpLFxuICAgICAgICBpY29uOiB0aGlzLmljb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuaWNvbnMubGVuZ3RoKV1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGl0ZW1UYXBwZWQoZXZlbnQsIGl0ZW0pIHtcbiAgICAvLyBUaGF0J3MgcmlnaHQsIHdlJ3JlIHB1c2hpbmcgdG8gb3Vyc2VsdmVzIVxuICAgIHRoaXMubmF2Q3RybC5wdXNoKExpc3RQYWdlLCB7XG4gICAgICBpdGVtOiBpdGVtXG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9saXN0L2xpc3QudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgRXZlbnRzLCBMb2FkaW5nQ29udHJvbGxlciB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2hlbHBlcic7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IEFwaVNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZSc7XG5cbmltcG9ydCB7IExvZ2luUGFnZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luJztcbmltcG9ydCB7IFNjYW5uZXJQYWdlIH0gZnJvbSAnLi4vc2Nhbm5lci9zY2FubmVyJztcbi8vaW1wb3J0IHsgUGF5bWVudFBhZ2UgfSBmcm9tICcuLi9wYXltZW50L3BheW1lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ2hvbWUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2Uge1xuICBwdWJsaWMgaXNEZXZpY2VPbmxpbmUgOiBib29sZWFuO1xuICBwdWJsaWMgYmFsYW5jZSA6IHN0cmluZztcbiAgcHVibGljIHNob3dRUkNvZGUgOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBjcmVhdGVkQ29kZTogYW55O1xuICBwdWJsaWMgdXNlckluZm86IGFueTtcbiAgcmVzcG9uc2VEYXRhOmFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JrLCBwdWJsaWMgZXZlbnRzIDogRXZlbnRzLCBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsIHB1YmxpYyBhcGlTZXJ2aWNlIDogQXBpU2VydmljZVByb3ZpZGVyLCBwdWJsaWMgbG9hZGluZ0N0cmw6IExvYWRpbmdDb250cm9sbGVyLCBwdWJsaWMgaGVscGVyIDogSGVscGVyU2VydmljZSkge1xuICAgICAgdGhpcy5iYWxhbmNlID0gdGhpcy5oZWxwZXIuYmFsYW5jZTtcbiAgICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3NldEJhbGFuY2UnLCBhY3R1YWxCYWxhbmNlID0+IHtcbiAgICAgICAgdGhpcy5iYWxhbmNlID0gYWN0dWFsQmFsYW5jZTtcbiAgICAgICAgdGhpcy5oZWxwZXIuc2V0QmFsYW5jZShhY3R1YWxCYWxhbmNlKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmV2ZW50cy5zdWJzY3JpYmUoJ2xvZ291dCcsKCkgPT4ge1xuICAgICAgICAgIC8vY2FsbCBtZXRob2QgdG8gcmVmcmVzaCBjb250ZW50XG4gICAgICAgICAgdGhpcy5sb2dvdXQoKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgZGlzY29ubmVjdFxuICAgICAgdGhpcy5uZXR3b3JrLm9uRGlzY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgICAgdGhpcy5uZXR3b3JrLm9uQ29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMudXNlckxvZ2dlZEluS2V5KS50aGVuKCh2YWx1ZSk9PntcbiAgICAgIGlmKHZhbHVlICE9IG51bGwpe1xuICAgICAgICB0aGlzLnVzZXJJbmZvID0gdmFsdWU7XG4gICAgICAgIHRoaXMuc2hvd1FSQ29kZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY3JlYXRlZENvZGUgPSBcIntcXFwic3RvcmVcXFwiOlxcXCJcIiArIHRoaXMudXNlckluZm8udXNlck5hbWUgKyBcIlxcXCIsXFxcInN0b3JlSWRcXFwiOlxcXCJcIiArIHRoaXMudXNlckluZm8udXNlcklkICsgXCJcXFwifVwiO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGxvZ291dCgpe1xuICAgIHRoaXMuaGVscGVyLmxvZ291dCgpO1xuICAgIHRoaXMubmF2Q3RybC5zZXRSb290KExvZ2luUGFnZSk7XG4gIH1cblxuICByZWZyZXNoQmFsYW5jZSgpe1xuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnVzZXJMb2dnZWRJbktleSkudGhlbigodmFsdWUpPT57XG4gICAgICBpZih2YWx1ZSA9PSBudWxsKXtcbiAgICAgICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoTG9naW5QYWdlKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGxldCBsb2FkaW5nID0gdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgICAgIGNvbnRlbnQ6ICdFc3BlcmUgdW4gbW9tZW50by4uLidcbiAgICAgICAgfSk7XG4gICAgICAgIGxvYWRpbmcucHJlc2VudCgpO1xuICAgICAgICB0aGlzLnVzZXJJbmZvID0gdmFsdWU7XG4gICAgICAgIHZhciBkYXRhID0geyAnaWQnOiB0aGlzLnVzZXJJbmZvLnVzZXJJZCwgJ3R5cGUnOiAndXNlcicgfVxuICAgICAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RGF0YShkYXRhLCAndXNlcnMucGhwJykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzdWx0O1xuICAgICAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goXCJzZXRCYWxhbmNlXCIsICckJyArIHBhcnNlRmxvYXQodGhpcy5yZXNwb25zZURhdGEudXNlci5hbW91bnQpLnRvRml4ZWQoMikpO1xuICAgICAgICB9LCBlcnIgPT4ge1xuICAgICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aGlzLm5hdkN0cmwuc2V0Um9vdChMb2dpblBhZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgdGFrZVBheW1lbnQoKXtcbiAgICAvKnRoaXMuaGVscGVyLnN0b3JlTmFtZSA9ICdDZXJ2ZWNlcmlhIEFydGVzYW5hbCBTLkEuJztcbiAgICB0aGlzLmhlbHBlci5zdG9yZUlkID0gMjtcbiAgICB0aGlzLm5hdkN0cmwucHVzaChQYXltZW50UGFnZSk7Ki9cbiAgICB0aGlzLm5hdkN0cmwucHVzaChTY2FubmVyUGFnZSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9ob21lL2hvbWUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zLCBFdmVudHMsIExvYWRpbmdDb250cm9sbGVyIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrJztcbi8vaW1wb3J0IHsgRmFjZWJvb2sgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZhY2Vib29rJztcbmltcG9ydCB7IFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5cbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi4vaG9tZS9ob21lJztcbmltcG9ydCB7IFNpZ251cFBhZ2UgfSBmcm9tICcuLi9zaWdudXAvc2lnbnVwJztcbmltcG9ydCB7IEZvcmdvdFBhZ2UgfSBmcm9tICcuLi9mb3Jnb3QvZm9yZ290JztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBMb2dpblBhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJ2xvZ2luLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpblBhZ2Uge1xuICBwcml2YXRlIGxvZ2luIDogRm9ybUdyb3VwO1xuICBwdWJsaWMgaXNEZXZpY2VPbmxpbmUgOiBib29sZWFuO1xuICBwdWJsaWMgc2hvd0xvZ2luRmFpbFRleHQgOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyB1c2VySW5mbyA6IGFueSA9IHt9O1xuICBwdWJsaWMgcmVzcG9uc2VEYXRhIDogYW55O1xuICBwdWJsaWMgbG9naW5GYWlsVGV4dCA6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsIHByaXZhdGUgbmV0d29yazogTmV0d29yaywgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgLypwcml2YXRlIGZiOiBGYWNlYm9vaywqLyBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHVibGljIGV2ZW50cyA6IEV2ZW50cywgcHVibGljIGFwaVNlcnZpY2UgOiBBcGlTZXJ2aWNlUHJvdmlkZXIsIHB1YmxpYyBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIpIHtcbiAgICB0aGlzLmxvZ2luID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHB3ZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KTtcbiAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcblxuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgZGlzY29ubmVjdFxuICAgIHRoaXMubmV0d29yay5vbkRpc2Nvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgIHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygnaW9uVmlld0RpZExvYWQgTG9naW5QYWdlJyk7XG4gIH1cblxuICBzaWdudXBQYWdlKCl7IHRoaXMubmF2Q3RybC5zZXRSb290KFNpZ251cFBhZ2UpOyB9XG4gIGZvcmdvdFBhc3N3b3JkUGFnZSgpeyB0aGlzLm5hdkN0cmwuc2V0Um9vdChGb3Jnb3RQYWdlKTsgfVxuXG4gIGZiTG9naW4oKXtcbiAgICAvKnRoaXMuZmIubG9naW4oWydwdWJsaWNfcHJvZmlsZScsICdlbWFpbCddKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5mYi5hcGkoJ21lLz9maWVsZHM9aWQsZW1haWwsZmlyc3RfbmFtZScsIFsncHVibGljX3Byb2ZpbGUnLCAnZW1haWwnXSkudGhlbihhcGlSZXMgPT4ge1xuICAgICAgICAgIHRoaXMudXNlckluZm8gPSBhcGlSZXM7XG4gICAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgICAgICAgYWxlcnQoJ0xvZ2dlZCBpbnRvIEZhY2Vib29rIScpXG4gICAgICAgIH0pLmNhdGNoKGUgPT4gYWxlcnQoJ0Vycm9yIGFwaSBpbnRvIEZhY2Vib29rJykpO1xuICAgIH0pLmNhdGNoKGUgPT4gYWxlcnQoJ0Vycm9yIGxvZ2dpbmcgaW50byBGYWNlYm9vaycgICsgZSkpOyovXG4gIH1cblxuICBhdHRlbXB0VXNlckxvZ2luKCl7XG4gICAgbGV0IGxvYWRpbmcgPSB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZSh7XG4gICAgICBjb250ZW50OiAnRXNwZXJlIHVuIG1vbWVudG8uLi4nXG4gICAgfSk7XG4gICAgbG9hZGluZy5wcmVzZW50KCk7XG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCd1JywgdGhpcy5sb2dpbi52YWx1ZS5lbWFpbCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdwJywgdGhpcy5sb2dpbi52YWx1ZS5wd2QpO1xuICAgIHRoaXMuYXBpU2VydmljZS5wb3N0RGF0YShmb3JtRGF0YSwgJ2FjY2Vzcy5waHAnKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3VsdDtcbiAgICAgICAgaWYgKHRoaXMucmVzcG9uc2VEYXRhLnN0YXR1cyA9PSBcIm9rXCIpIHtcbiAgICAgICAgICBsZXQgdXNlckFycmF5ID0ge1xuICAgICAgICAgICAgdXNlcklkOiB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLmlkLFxuICAgICAgICAgICAgdXNlckVtYWlsOiB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLmVtYWlsLFxuICAgICAgICAgICAgdXNlck5hbWU6IHRoaXMucmVzcG9uc2VEYXRhLnVzZXIubmFtZSxcbiAgICAgICAgICAgIHVzZXJUeXBlOiB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLnVzZXJfdHlwZV9pZFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXksIHVzZXJBcnJheSk7XG4gICAgICAgICAgdGhpcy5zaG93TG9naW5GYWlsVGV4dCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goJ3NldEJhbGFuY2UnLCAnJCcgKyBwYXJzZUZsb2F0KHRoaXMucmVzcG9uc2VEYXRhLnVzZXIuYW1vdW50KS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKCdzZXRNZW51SXRlbXMnLCB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLnVzZXJfdHlwZV9pZCA9PSAyID8gJ3VzZXInIDogJ3N0b3JlJyk7XG4gICAgICAgICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoSG9tZVBhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2hvd0xvZ2luRmFpbFRleHQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMubG9naW5GYWlsVGV4dCA9ICh0aGlzLnJlc3BvbnNlRGF0YS5tc2cgPT0gJ25vIHBhc3N3b3JkJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRyYXNlw7FhIGluY29ycmVjdGEnIDogKHRoaXMucmVzcG9uc2VEYXRhLm1zZyA9PSAnbm8gdXNlcicgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdFc3RlIHVzdWFyaW8gbm8gZXhpc3RlJyA6ICdFcnJvciBkZXNjb25vY2lkbycpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvbG9naW4vbG9naW4udHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zLCBMb2FkaW5nQ29udHJvbGxlciwgRXZlbnRzLCBQbGF0Zm9ybSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXBpU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9oZWxwZXInO1xuaW1wb3J0IHsgTkZDLCBOZGVmIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZmMnO1xuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3RvYXN0JztcblxuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuLi9ob21lL2hvbWUnO1xuaW1wb3J0IHsgTG9naW5QYWdlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4nO1xuaW1wb3J0IHsgRm9yZ290UGFnZSB9IGZyb20gJy4uL2ZvcmdvdC9mb3Jnb3QnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIFNpZ251cFBhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2Utc2lnbnVwJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWdudXAuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNpZ251cFBhZ2Uge1xuICBwdWJsaWMgaXNEZXZpY2VPbmxpbmUgOiBib29sZWFuO1xuICBwcml2YXRlIHJlZ2lzdGVyIDogRm9ybUdyb3VwO1xuICBwdWJsaWMgcmVzcG9uc2VEYXRhIDogYW55O1xuICBwdWJsaWMgc2hvd0R1cGxpY2F0ZVRleHQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIG5hbWVWYWx1ZSA6IHN0cmluZztcbiAgcHVibGljIGVtYWlsVmFsdWUgOiBzdHJpbmc7XG4gIHB1YmxpYyBpc1VzZXJMb2dnZWRJbiA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNob3dMaW5rVGFnQnV0dG9uIDogYm9vbGVhbjtcbiAgcHVibGljIHVzZXJJbmZvOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmssIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHB1YmxpYyBhcGlTZXJ2aWNlIDogQXBpU2VydmljZVByb3ZpZGVyLCBwcml2YXRlIG5mYzogTkZDLCBwcml2YXRlIG5kZWY6IE5kZWYsIHB1YmxpYyBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHB1YmxpYyBoZWxwZXI6IEhlbHBlclNlcnZpY2UsIHB1YmxpYyBldmVudHM6IEV2ZW50cywgcHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSwgcHJpdmF0ZSB0b2FzdDogVG9hc3QpIHtcbiAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3RcbiAgICB0aGlzLm5ldHdvcmsub25EaXNjb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlciA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgbmFtZTogWycnXSxcbiAgICAgICAgcHdkOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKV0sXG4gICAgICAgIGdyb3VwIDogWycnXVxuICAgIH0pO1xuICAgIHZhciAkdmlldyA9IHRoaXM7XG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMudXNlckxvZ2dlZEluS2V5KS50aGVuKHZhbHVlID0+IHtcbiAgICAgIGlmKHZhbHVlICE9IG51bGwpe1xuICAgICAgICB0aGlzLmlzVXNlckxvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51c2VySW5mbyA9IHZhbHVlO1xuICAgICAgICBpZih2YWx1ZS51c2VyVHlwZSA9PSAyKVxuICAgICAgICAgIHRoaXMuc2hvd0xpbmtUYWdCdXR0b24gPSB0cnVlO1xuICAgICAgICBsZXQgbG9hZGluZyA9IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdFc3BlcmUgdW4gbW9tZW50by4uLidcbiAgICAgICAgfSk7XG4gICAgICAgIGxvYWRpbmcucHJlc2VudCgpO1xuICAgICAgICAkdmlldy5yZWdpc3RlciA9ICR2aWV3LmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgbmFtZTogWycnXSxcbiAgICAgICAgICAgIHB3ZDogWycnLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV0sXG4gICAgICAgICAgICBncm91cCA6IFsnJ11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51c2VySW5mbyA9IHZhbHVlO1xuICAgICAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RGF0YSh7ICdpZCc6IHRoaXMudXNlckluZm8udXNlcklkLCAndHlwZSc6ICd1c2VyJyB9LCAndXNlcnMucGhwJykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzdWx0O1xuICAgICAgICAgIHRoaXMubmFtZVZhbHVlID0gdGhpcy5yZXNwb25zZURhdGEudXNlci5uYW1lO1xuICAgICAgICAgIHRoaXMuZW1haWxWYWx1ZSA9IHRoaXMucmVzcG9uc2VEYXRhLnVzZXIuZW1haWw7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygnaW9uVmlld0RpZExvYWQgU2lnbnVwUGFnZScpO1xuICB9XG5cbiAgbG9nb3V0KCl7XG4gICAgICB0aGlzLmhlbHBlci5sb2dvdXQoKTtcbiAgICAgIHRoaXMubmF2Q3RybC5zZXRSb290KExvZ2luUGFnZSk7XG4gIH1cblxuICBjYW5jZWwoKXtcbiAgICAgIHRoaXMubmF2Q3RybC5zZXRSb290KEhvbWVQYWdlKTtcbiAgfVxuXG4gIGxvZ2luUGFnZSgpeyB0aGlzLm5hdkN0cmwuc2V0Um9vdChMb2dpblBhZ2UpOyB9XG4gIGZvcmdvdFBhc3N3b3JkUGFnZSgpeyB0aGlzLm5hdkN0cmwuc2V0Um9vdChGb3Jnb3RQYWdlKTsgfVxuXG4gIGxpbmtUYWcoKXtcbiAgICB0aGlzLm5mYy5hZGROZGVmTGlzdGVuZXIoKCkgPT4ge1xuICAgICAgaWYodGhpcy5wbGF0Zm9ybS5pcygnY29yZG92YScpKXtcbiAgICAgICAgdGhpcy50b2FzdC5zaG93KCdzdWNjZXNzZnVsbHkgYXR0YWNoZWQgbmRlZiBsaXN0ZW5lcicsICc1MDAwJywgJ2NlbnRlcicpO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgYWxlcnQoJ3N1Y2Nlc3NmdWxseSBhdHRhY2hlZCBuZGVmIGxpc3RlbmVyJyk7XG4gICAgICB9XG4gICAgfSwgKGVycikgPT4ge1xuICAgICAgaWYodGhpcy5wbGF0Zm9ybS5pcygnY29yZG92YScpKXtcbiAgICAgICAgdGhpcy50b2FzdC5zaG93KCdlcnJvciBhdHRhY2hpbmcgbmRlZiBsaXN0ZW5lcicgKyBlcnIsICc1MDAwJywgJ2NlbnRlcicpO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgYWxlcnQoJ2Vycm9yIGF0dGFjaGluZyBuZGVmIGxpc3RlbmVyJyArIGVycik7XG4gICAgICB9XG4gICAgfSkuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgaWYodGhpcy5wbGF0Zm9ybS5pcygnY29yZG92YScpKXtcbiAgICAgICAgdGhpcy50b2FzdC5zaG93KCdyZWNlaXZlZCBuZGVmIG1lc3NhZ2UuIHRoZSB0YWcgY29udGFpbnM6ICcgKyBldmVudC50YWcsICc1MDAwJywgJ2NlbnRlcicpO1xuICAgICAgICB0aGlzLnRvYXN0LnNob3coJ2RlY29kZWQgdGFnIGlkJyArIHRoaXMubmZjLmJ5dGVzVG9IZXhTdHJpbmcoZXZlbnQudGFnLmlkKSwgJzUwMDAnLCAnY2VudGVyJyk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBhbGVydCgncmVjZWl2ZWQgbmRlZiBtZXNzYWdlLiB0aGUgdGFnIGNvbnRhaW5zOiAnICsgZXZlbnQudGFnKTtcbiAgICAgICAgYWxlcnQoJ2RlY29kZWQgdGFnIGlkJyArIHRoaXMubmZjLmJ5dGVzVG9IZXhTdHJpbmcoZXZlbnQudGFnLmlkKSk7XG4gICAgICB9XG5cbiAgICAgIGxldCBtZXNzYWdlID0gdGhpcy5uZGVmLnRleHRSZWNvcmQodGhpcy51c2VySW5mby51c2VyRW1haWwpO1xuICAgICAgdGhpcy5uZmMuc2hhcmUoW21lc3NhZ2VdKS50aGVuKHN1Y2Nlc3MgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhzdWNjZXNzKTtcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBhdHRlbXB0VXNlclJlZ2lzdGVyKCl7XG4gICAgdGhpcy5zaG93RHVwbGljYXRlVGV4dCA9IGZhbHNlO1xuICAgIGxldCBsb2FkaW5nID0gdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgICBjb250ZW50OiAnRXNwZXJlIHVuIG1vbWVudG8uLi4nXG4gICAgfSk7XG4gICAgbG9hZGluZy5wcmVzZW50KCk7XG5cbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXkpLnRoZW4odmFsdWUgPT4ge1xuICAgICAgdGhpcy51c2VySW5mbyA9IHZhbHVlO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCd1c2VySWQnLCB0aGlzLnVzZXJJbmZvLnVzZXJJZCApO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCduYW1lJywgdGhpcy5yZWdpc3Rlci52YWx1ZS5uYW1lKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZW1haWwnLCB0aGlzLnJlZ2lzdGVyLnZhbHVlLmVtYWlsKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcl90eXBlX2lkJywgJzInKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgndWlkJywnMTIzNDU2Nzg5MCcpO1xuICAgICAgaWYodmFsdWUgIT0gbnVsbCl7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndHlwZScsICdzYXZlJyk7XG4gICAgICAgIGlmKHRoaXMucmVnaXN0ZXIudmFsdWUucHdkKVxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncGFzc3dvcmQnLCB0aGlzLnJlZ2lzdGVyLnZhbHVlLnB3ZCk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3R5cGUnLCAnbmV3Jyk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncGFzc3dvcmQnLCB0aGlzLnJlZ2lzdGVyLnZhbHVlLnB3ZCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXBpU2VydmljZS5wb3N0RGF0YShmb3JtRGF0YSwgJ3VzZXJzLnBocCcpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzdWx0O1xuICAgICAgICBpZiAodGhpcy5yZXNwb25zZURhdGEuc3RhdHVzID09IFwib2tcIikge1xuICAgICAgICAgIGxldCB1c2VyQXJyYXkgPSB7XG4gICAgICAgICAgICB1c2VySWQ6IHRoaXMucmVzcG9uc2VEYXRhLmlkLFxuICAgICAgICAgICAgdXNlck5hbWU6IHRoaXMucmVzcG9uc2VEYXRhLnVzZXIubmFtZSxcbiAgICAgICAgICAgIHVzZXJFbWFpbDogdGhpcy5yZXNwb25zZURhdGEudXNlci5lbWFpbCxcbiAgICAgICAgICAgIHVzZXJUeXBlOiB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLnVzZXJfdHlwZV9pZFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXksIHVzZXJBcnJheSk7XG4gICAgICAgICAgdGhpcy5ldmVudHMucHVibGlzaCgnc2V0QmFsYW5jZScsICckJyArIHBhcnNlRmxvYXQodGhpcy5yZXNwb25zZURhdGEudXNlci5hbW91bnQpLnRvRml4ZWQoMikpO1xuICAgICAgICAgIHRoaXMubmF2Q3RybC5zZXRSb290KEhvbWVQYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMucmVzcG9uc2VEYXRhLm1zZyA9PSBcImR1cGxpY2F0ZVwiKXtcbiAgICAgICAgICB0aGlzLnNob3dEdXBsaWNhdGVUZXh0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9zaWdudXAvc2lnbnVwLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==