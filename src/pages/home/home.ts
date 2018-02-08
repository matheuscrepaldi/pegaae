import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private splashScreen: SplashScreen) {

    this.splashScreen.show();
    
    this.splashScreen.hide();

  }

  

}
