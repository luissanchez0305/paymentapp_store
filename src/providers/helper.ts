import { Injectable } from '@angular/core';
import { Constants } from '../services/constants';
import { Storage } from '@ionic/storage';

@Injectable()

export class HelperService {
    public balance: string;
    public userName: string;
    public userId: number;

    constructor(private storage: Storage){
        this.balance = '----';
    }

    setBalance(actualBalance){
        this.balance = actualBalance;
    }

    setUserInfo(actualUserName, actualUserId){
        this.userName = actualUserName;
        this.userId = actualUserId;
    }

    logout(){
        this.balance = '----';
        this.storage.set(Constants.userLoggedInKey, null);
    }
}