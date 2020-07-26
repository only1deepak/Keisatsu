import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.page.html',
  styleUrls: ['./public-home.page.scss'],
})
export class PublicHomePage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController, private router: Router) 
  {}

  async showActionSheet(){
    await this.actionSheetCtrl.create({
      header: 'Choose your Action',
      buttons: [{
        text: 'Lodge FIR',
        icon: 'bookmark',
        handler: () => {
          this.router.navigateByUrl('/public-fir')
        }
      }, {
        text: 'Check FIR status',
        icon: 'checkmark-done-outline',
        handler: () => {
          console.log('status clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    }).then(res => res.present());

  }

  ngOnInit() {
  }

}
