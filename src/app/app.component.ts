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
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Meu perfil',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Adversários',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Amigos',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Avaliações',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Convites',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
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
