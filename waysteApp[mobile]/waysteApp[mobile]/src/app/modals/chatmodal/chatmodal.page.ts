import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { SMS } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-chatmodal',
  templateUrl: './chatmodal.page.html',
  styleUrls: ['./chatmodal.page.scss'],
})
export class ChatmodalPage implements OnInit {
  val;
  chat_text:any ='';
  constructor(private modalController: ModalController,
               public navParams: NavParams,
               private sms: SMS) {
    this.val = this.navParams.get('value');
   }

  ngOnInit() {
  }

  sendTocustomer(){

    this.sms.send('09077333494', this.chat_text);

  }

  closeModal(){
    this.modalController.dismiss();
  }


}
