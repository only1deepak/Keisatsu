import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  
  {
    path: '',
<<<<<<< HEAD
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'public-home',
    loadChildren: () => import('./public-home/public-home.module').then( m => m.PublicHomePageModule)
  },
  {
    path: 'public-noc',
    loadChildren: () => import('./public-noc/public-noc.module').then( m => m.PublicNOCPageModule)
  }
=======
    redirectTo: 'public-appointment',
    pathMatch: 'full'
  },

  {
    path: 'public-appointment',
    loadChildren: () => import('./public-appointment/public-appointment.module').then( m => m.PublicAppointmentPageModule)
  },

  

  
>>>>>>> 9951d204136c6369d4704f0c241a05ae11438589
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
