import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  
  {
    path: '',
    redirectTo: 'public-fir',
    pathMatch: 'full'
  },
  {
    path: 'public-fir',
    loadChildren: () => import('./public-fir/public-fir.module').then( m => m.PublicFIRPageModule)
  },
  {
    path: 'public-appointment',
    loadChildren: () => import('./public-appointment/public-appointment.module').then( m => m.PublicAppointmentPageModule)
  },
    path: 'public-noc',
    loadChildren: () => import('./public-noc/public-noc.module').then( m => m.PublicNOCPageModule)
  },
  {
    path:'public-home',
    loadChildren: () => import('./public-home/public-home.module').then( m => m.PublicHomePageModule)
  }



  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
