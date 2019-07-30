import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
//import {CollectorRouteService} from 'src/app/services/collector-route.service';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[

    
    { 
      path: 'tracker', 
      
      loadChildren: '../tracker/tracker.module#TrackerPageModule'
      
    },
    { 
      path: 'redeem',
       loadChildren: '../redeem/redeem.module#RedeemPageModule' 
      }
    ]
  },

  {
    path:'',
    redirectTo:'/tabs/tracker/',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  declarations: [TabsPage]
})
export class TabsPageModule {}
