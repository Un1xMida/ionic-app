import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { AppGLobalService } from '../../services/globals';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username;
  password;
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider, private globals: AppGLobalService) {

  }

  ionViewDidLoad() {

  }


  logIn() {
    this.auth.getData('users', this.username, this.password).then((result) => {
      if (this.auth.loggedIn === true) {
        // this.globals.isLoggedIn = true;
        this.navCtrl.push('HomePage');
        localStorage.setItem('state', JSON.stringify({"logged":true}));
      }
      else {
        this.navCtrl.push('ErrorPage');
      }
    });

  }
}
