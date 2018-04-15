import { Component } from '@angular/core';
import { NavController , App } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { TruncateTitlesDirective } from "../../directives/truncate-titles/truncate-titles";
import { CreatePostPage } from "../create-post/create-post";
import { DetailsPage } from "../details/details";
import { WelcomePage } from "../welcome/welcome";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts;
  constructor(public navCtrl: NavController, public app:App , private auth:AuthServiceProvider) {
    this.auth.getPost('posts').then((result) => {
      this.posts = result;
      // console.log(this.posts)
    })
  }
  

  logOut(){
    const root = this.app.getRootNav();
    // root.popToRoot();
    this.navCtrl.push(WelcomePage);
    this.auth.loggedIn = false;
    localStorage.setItem('state', JSON.stringify({"logged":false}))
  }

  createPost():void{
    this.navCtrl.push(CreatePostPage);
  }

  goToDetails(id){

    this.navCtrl.push(DetailsPage, {id:id})
  }
  
}
