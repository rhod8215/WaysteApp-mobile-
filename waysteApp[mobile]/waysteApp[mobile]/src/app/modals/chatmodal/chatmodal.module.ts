import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SMS } from '@ionic-native/sms/ngx';
//import { ChatmodalPage } from './chatmodal.page';

const routes: Routes = [
  {
    path: '',
    //component: ChatmodalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers:[SMS],
  //declarations: [ChatmodalPage]
})
export class ChatmodalPageModule {}
