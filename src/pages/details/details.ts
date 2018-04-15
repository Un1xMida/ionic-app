import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  postInfo:any=[];

  postId= this.navParams.get('id');
  constructor(public navCtrl: NavController, public navParams: NavParams,private auth:AuthServiceProvider) {
    this.auth.getPost(`posts/${this.postId}`,).then((result) => {
      this.postInfo = result;
      console.log(this.postInfo)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
    this.auth.getPostData('posts',this.postId);
  }

  
  

}
