import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-household-reg',
  templateUrl: './household-reg.page.html',
  styleUrls: ['./household-reg.page.scss'],
})
export class HouseholdRegPage implements OnInit {

  constructor(public modalController: ModalController, public navParams: NavParams) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss();
  }

}
