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
  },
  {
    path: 'garden-detail',
    loadChildren: () => import('./Pages/garden-detail/garden-detail.module').then( m => m.GardenDetailPageModule)
  },
  {
    path: 'add-to-garden',
    loadChildren: () => import('./Pages/add-to-garden/add-to-garden.module').then( m => m.AddToGardenPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./Pages/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./Pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'contribute',
    loadChildren: () => import('./contribute/contribute.module').then( m => m.ContributePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
