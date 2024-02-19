import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/account',
    pathMatch: 'full'
  },{
    path: 'tabs',
    component: HomePage,
    children:[
      {
        path:'account',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/account/account.module').then( m => m.AccountPageModule)
          }
        ]
      },
      {
        path:'calls',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/calls/calls.module').then( m => m.CallsPageModule)
          }
        ]
      },
      {
        path:'inbox',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/inbox/inbox.module').then( m => m.InboxPageModule)
          }
        ]
      }

    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
