import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

//import { HouseholdRegPage } from './household-reg.page';

const routes: Routes = [
  {
    path: '',
   // component: HouseholdRegPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  //declarations: [HouseholdRegPage]
})
export class HouseholdRegPageModule {}
