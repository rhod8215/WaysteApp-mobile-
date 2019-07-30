import { Component, OnInit } from '@angular/core';
import { PopOverComponent } from '../pop-over/pop-over.component';
import { ModalController, PopoverController } from '@ionic/angular';
import { HouseholdRegPage } from '../household-reg/household-reg.page';
@Component({
  selector: 'app-user-type-reg',
  templateUrl: './user-type-reg.page.html',
  styleUrls: ['./user-type-reg.page.scss'],
})
export class UserTypeRegPage implements OnInit {

  constructor(public modalController: ModalController, public popoverController: PopoverController,) { }

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopOverComponent,
      event: ev
    });
    return await popover.present();
  }
  async RegisterModal(){
    const modal = await this.modalController.create({
      component: HouseholdRegPage
    })
    return await modal.present();
  }



}
