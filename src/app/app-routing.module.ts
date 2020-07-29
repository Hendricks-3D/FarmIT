import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'plant-tips',
    loadChildren: () => import('./Pages/plant-tips/plant-tips.module').then( m => m.PlantTipsPageModule)
  },
  {
    path: 'market',
    loadChildren: () => import('./Pages/market/market.module').then( m => m.MarketPageModule)
  },
  {
    path: 'garden',
    loadChildren: () => import('./Pages/garden/garden.module').then( m => m.GardenPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
