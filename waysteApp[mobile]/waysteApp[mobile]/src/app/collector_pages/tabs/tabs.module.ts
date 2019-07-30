import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      { 
        path: 'request-list',
       loadChildren: '../request-list/request-list.module#RequestListPageModule' 
      
      },

    { 
      path: 'accepted-list',
      loadChildren: '../accepted-list/accepted-list.module#AcceptedListPageModule' 
    
    },
    
    { 
      path: 'trackpage',
      loadChildren: '../trackpage/trackpage.module#TrackpagePageModule' 
    }
    ],

  },

  

  {
    path:'',
    redirectTo:'collector_pages/tabs/request-list/',
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
  declarations: [TabsPage]
})
export class TabsPageModule {}
