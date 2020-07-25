import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD
  {
  

    path: '',
    redirectTo: 'public-fir',
    pathMatch: 'full'
  },
  {
    path: 'public-fir',
    loadChildren: () => import('./public-fir/public-fir.module').then( m => m.PublicFIRPageModule)
  }

=======
  
  {
    path: '',
    redirectTo: 'public-home',
    pathMatch: 'full'
  },
  {
    path: 'public-home',
    loadChildren: () => import('./public-home/public-home.module').then( m => m.PublicHomePageModule)
  },
>>>>>>> a2095c09c0cd2c141c8ff8a3ba218203cd388faf
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
