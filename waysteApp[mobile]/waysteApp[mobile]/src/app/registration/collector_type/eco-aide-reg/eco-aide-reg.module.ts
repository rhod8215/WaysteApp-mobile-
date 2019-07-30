import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EcoAideRegPage } from './eco-aide-reg.page';

const routes: Routes = [
  {
    path: '',
    component: EcoAideRegPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EcoAideRegPage]
})
export class EcoAideRegPageModule {}
