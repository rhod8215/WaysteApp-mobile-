import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: '', loadChildren: './collector_pages/tabs/tabs.module#TabsPageModule' },
  { path: 'individual-sign-up', loadChildren: './pages/individual-sign-up/individual-sign-up.module#IndividualSignUpPageModule' },
 
  { path: 'callmodal', loadChildren: './modals/callmodal/callmodal.module#CallmodalPageModule' },
  { path: 'chatmodal', loadChildren: './modals/chatmodal/chatmodal.module#ChatmodalPageModule' },
  { path: 'viewreq-info', loadChildren: './modals/viewreq-info/viewreq-info.module#ViewreqInfoPageModule' },
  { path: 'collector-chat', loadChildren: './modals/collector-chat/collector-chat.module#CollectorChatPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  
  { path: 'user-type-reg', loadChildren: './registration/user-type-reg/user-type-reg.module#UserTypeRegPageModule' },
  { path: 'household-reg', loadChildren: './registration/household-reg/household-reg.module#HouseholdRegPageModule' },
  { path: 'hauler-reg', loadChildren: './registration/collector_type/hauler-reg/hauler-reg.module#HaulerRegPageModule' },
  { path: 'eco-aide-reg', loadChildren: './registration/collector_type/eco-aide-reg/eco-aide-reg.module#EcoAideRegPageModule' }
  
  
 
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
