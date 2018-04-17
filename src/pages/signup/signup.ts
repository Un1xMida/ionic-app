import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  responseData;
  userData={"name": "","username": "","email": "","password":""};
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth:AuthServiceProvider) {
  }

  ionViewDidLoad() {
  }


  signUp(){
    this.auth.postData(this.userData,'users').then((result) => {
      this.responseData = result;
      localStorage.setItem('userData', JSON.stringify(this.responseData))
      this.navCtrl.push('LoginPage');
    }, (err) => {
    })
  }

  logIn(){
    this.navCtrl.push('LoginPage');
  }
}
