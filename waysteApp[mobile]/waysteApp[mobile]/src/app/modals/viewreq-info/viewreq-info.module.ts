import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

//import { ViewreqInfoPage } from './viewreq-info.page';

const routes: Routes = [
  {
    path: '',
    //component: ViewreqInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  //declarations: [ViewreqInfoPage]
})
export class ViewreqInfoPageModule {}
