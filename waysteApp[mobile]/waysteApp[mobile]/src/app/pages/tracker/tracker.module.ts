import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonBottomDrawerModule} from 'ion-bottom-drawer';
import { IonicModule } from '@ionic/angular';

import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { TrackerPage } from './tracker.page';
import { ChatmodalPage} from 'src/app/modals/chatmodal/chatmodal.page';
//import { CallmodalPage } from 'src/app/modals/callmodal/callmodal.page';

const routes: Routes = [
  {
    path: '',
    component: TrackerPage
  }
];

@NgModule({
  imports: [
    IonBottomDrawerModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrackerPage,ChatmodalPage],
  entryComponents: [ChatmodalPage]
})
export class TrackerPageModule {}

