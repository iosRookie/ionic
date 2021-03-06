import { Component, ViewEncapsulation } from '@angular/core';
import { ItemSliding, ToastController } from 'ionic-angular';


@Component({
  templateUrl: 'page.html',
  encapsulation: ViewEncapsulation.None
})
export class ApiDemoPage {
  chats: any[];
  logins: any[];

  constructor(private toastCtrl: ToastController) {
    this.chats = [
    {
      img: './avatar-cher.png',
      name: 'Cher',
      message: 'Ugh. As if.',
      time: '9:38 pm'
    }, {
      img: './avatar-dionne.png',
      name: 'Dionne',
      message: 'Mr. Hall was way harsh.',
      time: '8:59 pm'
    }, {
      img: './avatar-murray.png',
      name: 'Murray',
      message: 'Excuse me, "Ms. Dione."',
      time: 'Wed'
    }];

    this.logins = [
    {
        icon: 'logo-twitter',
        name: 'Twitter',
        username: 'admin',
    }, {
        icon: 'logo-github',
        name: 'GitHub',
        username: 'admin37',
    }, {
        icon: 'logo-instagram',
        name: 'Instagram',
        username: 'imanadmin',
    }, {
        icon: 'logo-codepen',
        name: 'Codepen',
        username: 'administrator',
    }];
  }

  more(item: ItemSliding) {
    console.log('More');
    item.close();
  }

  delete(item: ItemSliding) {
    console.log('Delete');
    item.close();
  }

  mute(item: ItemSliding) {
    console.log('Mute');
    item.close();
  }

  archive(item: ItemSliding) {
    this.expandAction(item, 'archiving', 'Chat was archived.');
  }

  download(item: ItemSliding) {
    this.expandAction(item, 'downloading', 'Login was downloaded.');
  }

  expandAction(item: ItemSliding, action: string, text: string) {
    // TODO item.setCssClass(action, true);

    setTimeout(() => {
      const toast = this.toastCtrl.create({
        message: text
      });
      toast.present();
      // TODO item.setCssClass(action, false);
      item.close();

      setTimeout(() => toast.dismiss(), 2000);
    }, 1500);
  }
}


@Component({
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class ApiDemoApp {
  root = ApiDemoPage;
}
