import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  

    path: '',
    redirectTo: 'public-fir',
    pathMatch: 'full'
  },
  {
    path: 'public-fir',
    loadChildren: () => import('./public-fir/public-fir.module').then( m => m.PublicFIRPageModule)
  }

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
