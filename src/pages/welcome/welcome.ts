import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SignupPage } from "../signup/signup";
import { LoginPage } from "../login/login";
import { HomePage } from "../home/home";


/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  retrive=this.retrive = JSON.parse(localStorage.getItem('state'));
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
    console.log(this.retrive.logged)
  }

  signUp(){
    this.navCtrl.push(SignupPage)
  }
  logIn(){
    if (this.retrive.logged === true) {
      this.navCtrl.push(HomePage)
    }
    else if (this.retrive.logged === false){
      this.navCtrl.push(LoginPage)
    }
  }
}
