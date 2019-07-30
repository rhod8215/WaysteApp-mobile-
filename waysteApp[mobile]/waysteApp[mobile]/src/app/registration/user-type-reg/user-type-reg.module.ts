import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { PopOverComponent } from '../pop-over/pop-over.component';
import { UserTypeRegPage } from './user-type-reg.page';
import { HouseholdRegPage } from '../household-reg/household-reg.page';
const routes: Routes = [
  {
    path: '',
    component: UserTypeRegPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserTypeRegPage, HouseholdRegPage,PopOverComponent],
  entryComponents: [HouseholdRegPage,PopOverComponent]
})
export class UserTypeRegPageModule {}
