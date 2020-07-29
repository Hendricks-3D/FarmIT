import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      

      {
        path: 'tips',
        loadChildren: () => import('../Pages/plant-tips/plant-tips.module').then(m => m.PlantTipsPageModule)
      },

      {
        path: 'market',
        loadChildren: () => import('../Pages/market/market.module').then(m => m.MarketPageModule)
      },
      {
        path: 'garden',
        loadChildren: () => import('../Pages/garden/garden.module').then(m => m.GardenPageModule)
      }
      ,
      {
        path: 'home',
        loadChildren: () => import('../Pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
