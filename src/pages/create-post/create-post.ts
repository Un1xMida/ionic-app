import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { HomePage } from "../home/home";

/**
 * Generated class for the CreatePostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-post',
  templateUrl: 'create-post.html',
})
export class CreatePostPage {
  newPost={"title": "","body": ""};


  constructor(public navCtrl: NavController, public navParams: NavParams, private auth:AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePostPage');
  }

  

  addPost(){
    this.auth.createPost(this.newPost,'posts').then((result) => {
      console.log(result);
      this.navCtrl.push(HomePage);
    }, (err) => {
      console.log('failed');
    })
  }

}
