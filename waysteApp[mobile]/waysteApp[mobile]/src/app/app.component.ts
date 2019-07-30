import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home'
    },
    
    
    {
      title: 'Profile',
      url: '/profile'
    },
    {
      title: 'Notifications',
      url: ''
    },
    {
      title: 'Waste Tracker',
      url: '/tabs/tracker'
    },
    {
      title: 'Schedule Pick-up',
      url: ''
    },
    {
      title: 'Donate to Eco-Aide',
      url: ''
    },
    {
      title: 'Trash to Cash Stories',
      url: ''
    },
    {
      title: 'Help',
      url: ''
    },
    {
      title: 'Settings',
      url: ''
    
    },
    {
      title: 'Rate Us',
      url: ''
  
    },
    {
      title: 'Exit',
      url: ''

    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    
      this.splashScreen.hide();
    });
  }
}
