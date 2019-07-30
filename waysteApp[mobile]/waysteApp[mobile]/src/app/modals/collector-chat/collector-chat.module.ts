import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

//import { CollectorChatPage } from './collector-chat.page';

const routes: Routes = [
  {
    path: '',
    //component: CollectorChatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
  //declarations: [CollectorChatPage]
})
export class CollectorChatPageModule {}
