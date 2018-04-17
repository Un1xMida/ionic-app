import { Component } from '@angular/core';
import { IonicPage , NavController , App } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { TruncateTitlesDirective } from "../../directives/truncate-titles/truncate-titles";

import { AppGLobalService } from '../../services/globals';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts;
  constructor(public navCtrl: NavController, public app:App , private auth:AuthServiceProvider, private globals:AppGLobalService) {
    this.auth.getPost('posts').then((result) => {
      this.posts = result;
    })
  }
  
  ionViewDidLoad() {

  }
  logOut(){
    this.navCtrl.push('WelcomePage');
    this.auth.loggedIn = false;
    localStorage.setItem('state', JSON.stringify({"logged":false}))
  }

  createPost():void{
    this.navCtrl.push('CreatePostPage');
  }

  goToDetails(id){

    this.navCtrl.push('DetailsPage', {id:id})
  }
  
}
