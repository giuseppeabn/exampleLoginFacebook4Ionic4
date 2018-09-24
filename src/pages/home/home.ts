import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   options={
    method: "share",
    href: "http://google.com",
    caption: "desde ionic.",
    description: "test",
    picture: 'https://media.gettyimages.com/vectors/letter-g-icon-on-black-and-white-vector-backgrounds-vector-id832141938',
    hashtag: '#testIonic',
    message:'',
    name:''
  }
  constructor(public navCtrl: NavController, private fb: Facebook) {

  }


  login() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
      .catch(e => console.log('Error logging into Facebook', e));

  }
  logOut(){
    this.fb.logout()
    .then((resp)=>{ console.log("logout ",resp)})
    .catch(e => console.log("error logout ",e))
  }
  getStatus(){
    this.fb.getLoginStatus()
    .then((resp)=>{ console.log("status ",resp)})
    .catch(e=> console.log("error ", e))

   
  }
  shared(){
   
    this.fb.showDialog(this.options)
    .then((resp)=>{console.log("compartido ", resp)})
    .catch(e => console.log("error compartir ",e))
  }
  sendPhoto(){
    this.options.message="body message";
    this.options.name="name";
    this.fb.showDialog(this.options)
    .then((resp)=>{ console.log("send photo ",resp)})
    .catch(e =>console.log("error ", e))
  }

}
