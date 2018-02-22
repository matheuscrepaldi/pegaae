import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {


  constructor(public navCtrl: NavController, public splashScreen: SplashScreen) {
    
    this.splashScreen.hide();
  }
  // ionViewDidLoad() {
  //   var tutorial = localStorage.getItem("tutorial");
  //   if(tutorial == "true") this.navCtrl.setRoot("LoginPage");
  // }
  
  navLogin() {
    this.navCtrl.push("LoginPage");
    localStorage.setItem("tutorial", "true");
  }
}
