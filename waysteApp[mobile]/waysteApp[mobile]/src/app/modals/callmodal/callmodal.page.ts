import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-callmodal',
  templateUrl: './callmodal.page.html',
  styleUrls: ['./callmodal.page.scss'],
})
export class CallmodalPage implements OnInit {
  val;
  constructor(public modalController: ModalController, public navParams: NavParams) { 

    this.val = this.navParams.get('value');
  }
  
  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss();
  }


}
