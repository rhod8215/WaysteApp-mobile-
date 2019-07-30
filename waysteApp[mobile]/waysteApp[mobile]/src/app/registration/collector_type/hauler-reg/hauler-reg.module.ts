import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HaulerRegPage } from './hauler-reg.page';

const routes: Routes = [
  {
    path: '',
    component: HaulerRegPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HaulerRegPage]
})
export class HaulerRegPageModule {}
