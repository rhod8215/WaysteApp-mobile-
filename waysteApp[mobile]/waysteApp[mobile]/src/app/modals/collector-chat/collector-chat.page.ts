import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-collector-chat',
  templateUrl: './collector-chat.page.html',
  styleUrls: ['./collector-chat.page.scss'],
})
export class CollectorChatPage implements OnInit {
  val;

  constructor(private modalController: ModalController, public navParams: NavParams) { 

    this.val = this.navParams.get('value');
  }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
