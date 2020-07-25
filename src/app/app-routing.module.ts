import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  
  {
    path: '',
    redirectTo: 'public-noc',
    pathMatch: 'full'
  },
  {
    path: 'public-fir',
    loadChildren: () => import('./public-fir/public-fir.module').then( m => m.PublicFIRPageModule)
  },
  {
    path: 'public-noc',
    loadChildren: () => import('./public-noc/public-noc.module').then( m => m.PublicNOCPageModule)
  }


  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
