import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



import { TranslateService } from '@ngx-translate/core';
import { AppGLobalService } from '../../services/globals';


@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  retrive = this.retrive = JSON.parse(localStorage.getItem('state'));
  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, private globals: AppGLobalService) {
    translate.use('ar');
  }
  
  ionViewDidLoad() {

  }

  signUp() {
    this.navCtrl.push('SignupPage')
  }
  logIn() {
    if (this.retrive.logged === true) {
      this.navCtrl.push('HomePage')
    }
    else if (this.retrive.logged === false) {
      this.navCtrl.push('LoginPage')
    }
  }

  changeLanguage(langauge) {
    this.translate.use(langauge);
  }

}
