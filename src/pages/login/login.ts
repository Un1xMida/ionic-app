import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { ErrorPage } from "../error/error";

import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
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
  constructor(public navCtrl: NavController, public navParams: NavParams , private auth: AuthServiceProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  }

  
  logIn(){
    this.auth.getData('users',this.username,this.password).then((result) => {
      if(this.auth.loggedIn === true){
        this.navCtrl.push(HomePage);
        localStorage.setItem('state', JSON.stringify({"logged":true}));
        // console.log('retrievedObject: ', this.retrive.logged);
      }
      else {
        this.navCtrl.push(ErrorPage);
      }
    });

  }
}
