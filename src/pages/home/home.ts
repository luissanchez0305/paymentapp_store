import { Component, NgZone } from '@angular/core';
import { NavController, Events, LoadingController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { HelperService } from '../../providers/helper';
import { Constants } from '../../services/constants';
import { Storage } from '@ionic/storage';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

import { LoginPage } from '../login/login';
import { ScannerPage } from '../scanner/scanner';
//import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public isDeviceOnline : boolean;
  public balance : string;
  public showQRCode : boolean = false;
  public createdCode: any;
  public userInfo: any;
  responseData:any;

  constructor(public navCtrl: NavController, private network: Network, public events : Events, private zone: NgZone,
    private storage: Storage, public apiService : ApiServiceProvider, public loadingCtrl: LoadingController, public helper : HelperService) {
      this.balance = this.helper.balance;
      events.subscribe('setBalance', actualBalance => {
        this.balance = actualBalance;
        this.helper.setBalance(actualBalance);
      });

      this.events.subscribe('logout',() => {
          //call method to refresh content
          this.logout();
      });

      this.isDeviceOnline = true;
      // watch network for a disconnect
      this.network.onDisconnect().subscribe(() => {
        this.zone.run(() => {
          this.isDeviceOnline = false;
        });
      });
      // watch network for a connection
      this.network.onConnect().subscribe(() => {
        this.zone.run(() => {
          this.isDeviceOnline = true;
        });
      });
  }

  ionViewDidLoad() {
    this.storage.get(Constants.userLoggedInKey).then((value)=>{
      if(value != null){
        this.userInfo = value;
        this.showQRCode = true;
        this.createdCode = "{\"store\":\"" + this.userInfo.userName + "\",\"storeId\":\"" + this.userInfo.userId + "\"}";
      }
    });
  }
  logout(){
    this.helper.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  refreshBalance(){
    this.storage.get(Constants.userLoggedInKey).then((value)=>{
      if(value == null){
        this.navCtrl.setRoot(LoginPage);
      }
      else{
        let loading = this.loadingCtrl.create({
          content: 'Espere un momento...'
        });
        loading.present();
        this.userInfo = value;
        var data = { 'id': this.userInfo.userId, 'type': 'user' }
        this.apiService.getData(data, 'users.php').then(result => {
          loading.dismiss();
          this.responseData = result;
          this.events.publish("setBalance", '$' + parseFloat(this.responseData.user.amount).toFixed(2));
        }, err => {
          loading.dismiss();
        });
      }
    })
    .catch(err => {
        this.navCtrl.setRoot(LoginPage);
    });
  }

  takePayment(){
    /*this.helper.storeName = 'Cerveceria Artesanal S.A.';
    this.helper.storeId = 2;
    this.navCtrl.push(PaymentPage);*/
    this.navCtrl.push(ScannerPage);
  }
}
