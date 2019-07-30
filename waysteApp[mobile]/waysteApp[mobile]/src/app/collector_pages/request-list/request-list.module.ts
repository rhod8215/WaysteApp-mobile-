import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RequestListPage } from './request-list.page';
import { ViewreqInfoPage } from 'src/app/modals/viewreq-info/viewreq-info.page';

const routes: Routes = [
  {
    path: '',
    component: RequestListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RequestListPage,ViewreqInfoPage],
  entryComponents:[ViewreqInfoPage]
})
export class RequestListPageModule {}
