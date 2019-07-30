import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrackpagePage } from './trackpage.page';
import { CollectorChatPage } from 'src/app/modals/collector-chat/collector-chat.page';


const routes: Routes = [
  {
    path: '',
    component: TrackpagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  
  declarations: [TrackpagePage,CollectorChatPage],
  entryComponents:[CollectorChatPage]
})
export class TrackpagePageModule {}
